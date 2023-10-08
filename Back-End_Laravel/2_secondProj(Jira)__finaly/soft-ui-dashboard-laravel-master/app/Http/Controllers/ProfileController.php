<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;


class ProfileController extends Controller
{

    public function index()
    {
        $users = User::all();
        return view('task.user.user', [
            'users'=>$users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::find($id);
        return view('task.user.userAvatarUpdate', ['user'=>$user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        if ($request->hasFile('image')) {  // Умова, якщо це файл є (обраний, прикріплений)
            $user = User::find($id); // Шукаємо конкретного юзера по його ID
            $oldImage = $user->user_avatar;  // Створення змінної яка, записує вже існуюче фото

            $image = $request->file('image');  // Записуємо в змінну файл із інпута із неумом image
            $newImageName = uniqid() . '_' . $image->getClientOriginalName(); // Формуємо унікальну назву
            $image->storeAs('avatars', $newImageName, 'public'); // Зберігаємо фото в папку avatars

            $user->user_avatar = $newImageName;  // Записуємо оновлену назву фото
            $user->save();  // Зберігаємо

            // Видалення старого файлу, якщо він існує
            if ($oldImage) {
                $oldImagePath = public_path('storage/avatars/' . $oldImage);  //Якщо він існує, ми отримуємо повний шлях до файлу за допомогою public_path()
                if (file_exists($oldImagePath)) {  // file_exists каже чи існує файл, повертає true або false
                    unlink($oldImagePath); // unlink видаляє файли
                }
            }
        }

        return redirect()->route('user.index');


//        if ($request->hasFile('image')) {
//            $user = User::find($id);
//            $image = $request->file('image');
//            $imageName = $image->getClientOriginalName(); // Генеруємо унікальне ім'я для файлу
//            $image->storeAs('avatars', $imageName, 'public'); // Зберігаємо файл у директорії "avatars" з публічним доступом
//            $user->user_avatar = $imageName; // Зберігаємо ім'я файлу в базу даних
//            $user->save();
//        }
//
//        return redirect()->route('user.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();

        return redirect()->route('user.index');
    }

    public function getAddPhoto(string $id){     // Функція, яка дозволяє показувати акордіон при натисканні на певну ID
        $user = User::find($id);
        return response()->json(['photo' => $user->photo]);
    }

//    public function upload (Request $request, string $id)
//    {
//        $user = User::find($id);
//
//        if ($request->hasFile('image')){
//            $path = $request->file('image')->store('upload','public');
//            $user->user_avatar = $path;
//            $user->save();
//        }
//
//        return redirect()->route('user.index');
//    }

}

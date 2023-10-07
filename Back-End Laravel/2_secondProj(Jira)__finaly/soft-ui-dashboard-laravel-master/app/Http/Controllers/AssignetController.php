<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class AssignetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $taskUsers = Task::all();
        $users = User::all();
       return view('task.taskUser.taskUser', [
        'taskUsers'=>$taskUsers,
         'users'=>$users
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $taskUsers = Task::all();
        $users = User::all();
        $selectedTaskId = $request->input('task_id'); // Отримання значення task_id з URL

        return view('task.taskUser.taskUserCreate', [
            'taskUsers' => $taskUsers,
            'users' => $users,
            'selectedTaskId' => $selectedTaskId // Передача значення task_id у представлення
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
//        dd($request);
        $task_id = $request->input('task_id');
        $user_ids = $request->input('user_ids');

        $task = Task::find($task_id);
        if ($task) {
//            $task->users()->attach($user_ids);
            // Або використовуйте наступний метод, якщо ви хочете видаляти старі призначені користувачі перед додаванням нових
             $task->users()->sync($user_ids);
        }

        return redirect()->route('taskUser.index');
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\CategoryAdmin;
use Illuminate\Http\Request;

class CategoryAdminController extends Controller
{
//-----------------------------------------------------------------------

    public function index()
    {
        $categories = CategoryAdmin::all();
        return view('__categoryAdmin/categoryAdmin', ['categories'=>$categories]);
    }
//-----------------------------------------------------------------------

    public function create()
    {
        return view('__categoryAdmin/categoryAdminCreate');
    }
//-----------------------------------------------------------------------

    public function store(Request $request)
    {
        CategoryAdmin::create([
            "name" => $request->name,
            "description" => $request->description,
        ]);

        // $categories = CategoryAdmin::all();
        // return view('__categoryAdmin/categoryAdmin', ['categories'=>$categories]);

        return redirect()->route('categoryAdmin.index');
    }
//-----------------------------------------------------------------------

    public function show(CategoryAdmin $categoryAdmin)
    {
        dd(111);
    }

    public function edit(string $id)
    {
        $categoryAdmin = CategoryAdmin::find($id);

        return view('__categoryAdmin/categoryAdminRead', ['categoryAdmin'=>$categoryAdmin]);
    }

//-----------------------------------------------------------------------

    public function update(Request $request, string $id)
    {
        $categoryAdmin = CategoryAdmin::find($id);
        $categoryAdmin->name = $request->name;
        $categoryAdmin->description = $request->description;
        $categoryAdmin->save();

//        $categories = CategoryAdmin::all();
//        return view('__categoryAdmin/categoryAdmin', ['categories'=>$categories]);
        return redirect()->route('categoryAdmin.index');
    }
//-----------------------------------------------------------------------
    public function destroy(string $id)
    {
        $categoryAdmin = CategoryAdmin::find($id);
        $categoryAdmin->delete();

        return redirect()->route('categoryAdmin.index');
    }
}
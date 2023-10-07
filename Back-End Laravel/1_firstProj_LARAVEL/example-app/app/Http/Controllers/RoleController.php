<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $role = Role::all();
        return view('__roleAdmin/roleAdmin', ['roles'=>$role]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
//        dd('create');
        return view('__roleAdmin/roleAdminEdit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        dd('show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $role = Role::find($id);

        return view('__roleAdmin/roleAdminEdit', ['role' => $role]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
//        dd('update');
        $role = Role::find($id);
        $role->name =  $request->role;
        $role->save();

        $role = Role::all();
        return view('__roleAdmin/roleAdmin', ['roles'=>$role]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        dd(111);
    }
}

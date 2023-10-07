<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::all();
        $users = User::all();
        $rolesUser = RoleUser::all();
        return view('task.role.role', [
           'roles'=>$roles,
           'users'=>$users,
           'rolesUser'=>$rolesUser,
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
//        dd($request);

//        $roles = Role::all();
//        $users = User::all();
//
//        RoleUser::create([
//            "role_id" => $request->roles,
//            "user_id" => $request->users,
//        ]);
//
//        return view('role.role', [
//            'roles'=>$roles,
//            'users'=>$users,
//        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $roleUser = RoleUser::find($id);
        $roleUser->role_id = $request->input('role_id');
        $roleUser->save();

        return redirect()->route('roles.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        //
    }
}

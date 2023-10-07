<?php

namespace App\Http\Controllers;

use App\Models\PostsAdmin;
use App\Models\UserAdmin;
use Illuminate\Http\Request;

class UserAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = UserAdmin::all();
        return view('__usersAdmin/usersAdmin', ['users'=>$user]);
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
        $user = UserAdmin::find($id);

        return view('__usersAdmin/usersAdminEdit', ['users'=>$user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = UserAdmin::find($id);
        $user->name = $request->name;
        $user->save();

        $users = UserAdmin::all();
        return view('__usersAdmin/usersAdmin', ['users'=>$users]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = UserAdmin::find($id);
        $user->delete();

        $users = UserAdmin::all();
        return view('__usersAdmin/usersAdmin', ['users'=>$users]);
    }
}


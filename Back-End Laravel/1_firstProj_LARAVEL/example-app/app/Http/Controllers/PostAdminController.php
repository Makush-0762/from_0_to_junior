<?php

namespace App\Http\Controllers;

use App\Models\PostsAdmin;
use Illuminate\Http\Request;

class PostAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = PostsAdmin::all();
        return view('__postsAdmin/postsAdmin', ['posts'=>$post]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
//        return view('postsAdminCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
//      dd($request);
//        PostsAdmin::create([
//            "category_id"=>$request->category_id,
//            "name"=>$request->name,
//            "description"=>$request->description,
//        ]);
//
//        $post = PostsAdmin::all();
//        return view('__postsAdmin', ['posts'=>$post]);
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
        $post = PostsAdmin::find($id);

        return view('__postsAdmin/postsAdminEdit', ['post'=>$post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $post = PostsAdmin::find($id);
        $post->name = $request->name;
        $post->description = $request->description;
        $post->save();

        $post = PostsAdmin::all();
        return view('__postsAdmin/postsAdmin', ['posts'=>$post]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = PostsAdmin::find($id);
        $post->delete();

        $posts = PostsAdmin::all();
        return view('__postsAdmin/postsAdmin', ['posts'=>$posts]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    //-----------------------------------------------------------------------
    public function index()
    {
        $comments = Comment::all();
        return view('task.comment.comment', ['comments'=>$comments]);
    }

    //-----------------------------------------------------------------------
    public function create()
    {
        return view('task.comment.commentCreate');
    }


    //-----------------------------------------------------------------------
    public function store(Request $request)
    {
        Comment::create([
            "description"=>$request->description,
            "user_id"=>$request->user_id,
        ]);

        return redirect()->route('comments.index');
    }


    //-----------------------------------------------------------------------
    public function show(Comment $comment)
    {
        //
    }

    //-----------------------------------------------------------------------
    public function edit(string $id)
    {
        $comments =  Comment::find($id);
        return view('task.comment.commentUpdate', ['comments'=>$comments]);
    }


    //-----------------------------------------------------------------------
    public function update(Request $request, string $id)
    {
        $comment = Comment::find($id);
        $comment->description = $request->description;
        $comment->save();
//        $comment->user_id = $request->user_id;

        return redirect()->route('comments.index');
    }

//    public function query(Request $request)
//    {
//        $input = $request->all();
//        $data = Comment::select('description')->where('description', 'LIKE', "%{$input['query']}%")->get();
//
//        return response()->json($data);
//    }


    //-----------------------------------------------------------------------
    public function destroy(string $id)
    {
        $comment = Comment::find($id);
        $comment->delete();

        return redirect()->route('comments.index');
    }
}

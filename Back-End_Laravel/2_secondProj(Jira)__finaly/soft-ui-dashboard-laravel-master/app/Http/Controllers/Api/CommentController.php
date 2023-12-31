<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comment = Comment::all();

        $response = [
            'response' => [
                'success' => true,
                'comment' => [
                    'data' => $comment,
                ]
            ]
        ];

        return response()->json($response, 200);
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

        if($request->deleteId){
            $result = Comment::find($request->deleteId);

            if($result){
                $result->delete();
                $message = 'delete comment';
                return response()->json($message, 200);
            } else {
                $message = 'comment is not defind';
                return response()->json($message, 200);
            }
        }

        if($request->id){
            $comment = Comment::find($request->id);
            $comment->description = $request->description;
            $comment->user_id = $request->user_id;
            $comment->task_id = $request->task_id;
            $comment->save();

            if($comment){
                $response = [
                    'response' => [
                        'success' => true,
                        'comment' => [
                            'data' => $comment
                        ]
                    ]
                ];
                return response()->json($response,200);
            } else {
                $message = 'underfind comment';
                return response()->json($message,200);
            }
        } else {
            $comment = Comment::create([
                "description" => $request->description,
                "user_id" => $request->user_id,
                "task_id" => $request->task_id
            ]);

            $response = [
                'response' => [
                    'success' => true,
                    'comment' => [
                        'data' => $comment,
                    ]
                ]
            ];

            return response()->json($response, 200);
        }



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

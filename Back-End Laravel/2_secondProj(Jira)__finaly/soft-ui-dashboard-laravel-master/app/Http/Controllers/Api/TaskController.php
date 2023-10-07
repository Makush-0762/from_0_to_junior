<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function index()
    {
//        $tasks = Task::all();
//        $relatedComments = [];
//        foreach ($tasks as $task){
//            if ($task->comments){
//                foreach ($task->comments as $comment){
//                    $relatedComments[] = $comment;
//                }
//            }
//            $task->comments[] = $relatedComments;
//            $task->status;
//            $task->user;
//            $task->assigneds;
//        }
//
//        $response = [
//            'response' => [
//                'success' => true,
//                'task' => [
//                    'data' => $tasks,
//                ]
//            ]
//        ];
//
//        return response()->json($response, 200);


        $task = Task::with(['user', 'status','assigneds'])->get();

        $response = [
            'response' => [
                'success' => true,
                'task' => [
                    'data' => $task,
                ]
            ]
        ];

        return response()->json($response, 200);
    }


//    public function create()
//    {
//        //
//    }

    public function store(Request $request)
    {
//        dd($request);

        if($request->deleteId){
            $result = Task::find($request->deleteId);

            if($result){
                $result->delete();
                $message = 'delete task';
                return response()->json($message, 200);
            } else {
                $message = 'task with this ID is not definde';
                return response()->json($message, 200);
            }
        }

        if($request->id){
            $task=Task::find($request->id);
            $task->name = $request->name;
            $task->user_id = $request->user_id;
            $task->status_id = $request->status_id;
            $task->save();

            if($task){
                $response = [
                    'response' => [
                        'success' => true,
                        'task' => [
                            'data' => $task
                        ]
                    ]
                ];

                return response()->json($response, 200);
            } else {
                $message = 'task is not definde';
                return response()->json($message, 200);
            }
        } else {
            $task = Task::create([
                "name" => $request->name,
                'user_id' => $request->user_id,
                "status_id" => $request->status_id
            ]);
            $response = [
                'response' => [
                    'success' => true,
                    'task' => [
                        'data' => $task,
                    ]
                ]
            ];

            return response()->json($response,200);
        }


    }
//
//    public function show(string $id)
//    {
//        //
//    }
//
//
//    public function edit(string $id)
//    {
//        //
//    }
//
//
//    public function update(Request $request, string $id)
//    {
//        //
//    }
//
//
//    public function destroy(string $id)
//    {
//        //
//    }
}

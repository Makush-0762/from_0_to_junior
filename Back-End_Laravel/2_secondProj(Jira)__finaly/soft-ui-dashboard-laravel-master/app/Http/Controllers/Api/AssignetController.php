<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\TaskUser;
use App\Models\User;
use Illuminate\Http\Request;

class AssignetController extends Controller
{

    public function index()
    {
        $assignet = TaskUser::all();
//        $assignet = TaskUser::with(['user ', 'task'])->get();

        $response = [
            'response' => [
                'success' => true,
                'task' => [
                    'data' => $assignet,
                ]
            ]
        ];

        return response()->json($response, 200);
    }


    public function create()
    {
        //
    }

    public function store(Request $request)
    {
//        dd($request);

        if($request->deleteId){
            $result = TaskUser::find($request->deleteId);

            if($result){
                $result->delete();
                $message = 'delete Assigneds';
                return response()->json($message, 200);
            } else {
                $message = 'task with this ID is not definde';
                return response()->json($message, 200);
            }
        }

        if($request->id){
            $assignet=TaskUser::find($request->id);
            $assignet->user_id = $request->user_id;
            $assignet->task_id = $request->task_id;
            $assignet->save();

            if($assignet){
                $response = [
                    'response' => [
                        'success' => true,
                        'task' => [
                            'data' => $assignet
                        ]
                    ]
                ];

                return response()->json($response, 200);
            } else {
                $message = 'task is not definde';
                return response()->json($message, 200);
            }
        } else {
            $data = $request->all();
            foreach ($data as $item) {
                $assignet = TaskUser::create([
                    "user_id" => $item['user_id'],
                    'task_id' => $item['task_id'],
                ]);
                $assignedUsers[] = $assignet;
            }
            $response = [
                'response' => [
                    'success' => true,
                    'task' => [
                        'data' => $assignedUsers,
                    ]
                ]
            ];
            return response()->json($response,200,['success' => true, 'message' => 'Дані успішно збережені']);
        }
    }

    public function show(string $id)
    {
        //
    }


    public function edit(string $id)
    {
        //
    }


    public function update(Request $request, string $id)
    {
        //
    }


    public function destroy(string $id)
    {
        //
    }
}

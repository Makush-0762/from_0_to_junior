<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();

        $response = [
            'response'=>[
                'success' => true,
                'statues'=>[
                    'data'  => $projects,
                ]
            ]
        ];

        return response()->json($response, 200); // return response()->json($posts);
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
           $result = Project::find($request->deleteId);

           if($result){
               $result->delete();
               $message = 'Project is delete';
               return response()->json($message, 200);
           } else {
               $message = 'Project not defind';
               return response()->json($message, 200);
           }
        }

        if($request->id){
            $project = Project::find($request->id);
            $project->name = $request->name;
            $project->description = $request->description;
            $project->save();

                if($project){
                    $response = [
                        'response' => [
                            'success' => true,
                            'project' => [
                                'data' => $project,
                            ]
                        ]
                    ];
                    return response()->json($response, 200);
                }else {
                    $message = 'no status';
                    return response()->json($message, 200);
                }
        }else{
            $project = Project::create([
                'name'=>$request->name,
                'description'=>$request->description
            ]);
            $response = [
                'response' => [
                    'success' => true,
                    'project' => [
                        'data' => $project,
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

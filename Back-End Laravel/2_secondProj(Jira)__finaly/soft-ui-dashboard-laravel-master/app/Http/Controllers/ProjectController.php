<?php

namespace App\Http\Controllers;

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
        return view('task.project.project', [
            'projects'=>$projects,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('task.project.projectCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
//        dd($request);

        Project::create([
            'name'=>$request->name,
            'description'=>$request->description,
            'id'=>$request->user_id,
        ]);
        return redirect()->route('projects.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::find($id);
        return view('task.project.projectUpdate', [
            'projects'=>$project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $projects = Project::find($id);
        $projects->name = $request->name;
        $projects->description = $request->description;
        $projects->save();

        return redirect()->route('projects.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $projects = Project::find($id);
        $projects->delete();

        return redirect()->route('projects.index');
    }
    public function getTasks(string $id)
    {
        $projects = Project::find($id);
        return response()->json(['tasks' => $projects->tasks]);
    }
    public function getComments(string $id)
    {
        $projects = Project::find($id);
        return response()->json(['comments' => $projects->comments]);
    }

}

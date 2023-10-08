<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    //-----------------------------------------------------------------------
    public function index()
    {
        $tasks = Task::all();
        return view('task.task.task', [
            'tasks'=>$tasks,
        ]);
    }

    //-----------------------------------------------------------------------
    public function create()
    {
        $tasks = Task::all();
        return view('task.task.taskCreate', ['tasks'=>$tasks]);
    }

    //-----------------------------------------------------------------------
    public function store(Request $request)
    {
//        dd($request);
        Task::create([
            "name"=>$request->name,
            "user_id"=>$request->user_id,
            "status_id"=>$request->status_id,
        ]);

        return redirect()->route('tasks.index');
    }

    //-----------------------------------------------------------------------
//    public function show(string $id)
//    {
//        $task = Task::findOrFail($id);
//        return view('tasks.show', compact('task'));
//    }

    //-----------------------------------------------------------------------
    public function edit(string $id)
    {
        $task = Task::find($id);
        return view('task.task.taskUpdate', ['tasks'=>$task]);
    }

    //-------------------------------------------------------------------
    public function update(Request $request, string $id)
    {
        $task = Task::find($id);
        $task->name = $request->name;
        $task->user_id = $request->user_id;
        $task->status_id = $request->status_id;
        $task->save();



        return redirect()->route('tasks.index');
    }

    //-----------------------------------------------------------------------
    public function destroy(string $id)
    {
        $task = Task::find($id);
        $task->delete();

        return redirect()->route('tasks.index');
    }

    public function getComments(string $id)
    {
        $task = Task::find($id);
        return response()->json(['comments' => $task->comments]);
    }
}

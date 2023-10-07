<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use function Symfony\Component\String\s;

class StatusController extends Controller
{

    //-----------------------------------------------------------------------
    public function index()
    {
        $status = Status::all();
        return view('task.status.status', ['status'=>$status]);
    }

    //-----------------------------------------------------------------------
    public function create()
    {
        return view('task.status.statusCreate');
    }

    //-----------------------------------------------------------------------
    public function store(Request $request)
    {
//        dd($request);
        Status::create([
            "name"=>$request->name,
            "id_active"=>$request->id_active,
        ]);

        return redirect()->route('status.index');
    }

    //-----------------------------------------------------------------------
    public function show(Status $status)
    {
        //
    }

    //-----------------------------------------------------------------------
    public function edit(string $id)
    {
        $status = Status::find($id);
        return view('task.status.statusUpdate', ['status' => $status]);
    }

    //-----------------------------------------------------------------------
    public function update(Request $request, string $id)
    {
        $status = Status::find($id);
        $status->name = $request->name;
        $status->save();

        return redirect()->route('status.index');
    }

    //-----------------------------------------------------------------------
    public function destroy(string $id)
    {
        $status = Status::find($id);
        $status->delete();

        return redirect()->route('status.index');
    }
}

<?php

namespace App\Http\Controllers\Practic;

use App\Http\Controllers\Controller;
use App\Models\Practic\Table1;
use Illuminate\Http\Request;

class Table1Controller extends Controller
{
    public function index()
    {
        $table1 = Table1::all();

        return view('practic_table/table1', ['table1'=>$table1]);
    }

    public function create()
    {
        return view('practic_table/table1Create');
    }

    public function store(Request $request)
    {
//        dd($request);
        Table1::create([
            "name"=>$request->name,
            "description"=>$request->description,
            "price"=>$request->price,
            "img"=>$request->img,
        ]);

        return redirect()->route('table1.index');
//        $table1 = Table1::all();
//        return view('practic_table/table1', ['table1'=>$table1]);
    }

    public function show(Table1 $table1)
    {
        //
    }

    public function edit(string $id)
    {
        $table1 = Table1::find($id);

        return view ('practic_table/table1Edit', ['table1'=>$table1]);
    }

    public function update(Request $request, string $id)
    {
        $table1 = Table1::find($id);
        $table1->name = $request->name;
        $table1->description = $request->description;
        $table1->price = $request->price;
        $table1->img = $request->img;
        $table1->save();


        $table = Table1::all();
        return view('practic_table/table1', ['table1'=>$table]);
    }

    public function destroy(string $id)
    {
        $table1 = Table1::find($id);
        $table1->delete();

        $table = Table1::all();
        return view('practic_table/table1', ['table1'=>$table]);
    }
}

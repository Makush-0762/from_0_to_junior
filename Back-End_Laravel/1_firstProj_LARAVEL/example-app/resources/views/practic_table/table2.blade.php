@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row h-100">
            <div class="col-3">
                <div class="card p-4" style="width: 18rem;border-radius:  25%">
                    <img src="https://cs7.pikabu.ru/post_img/2018/01/05/10/1515172208178355173.jpg" class="card-img-top" style="border-radius:  25%" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center"><strong>Bober BobroBcbkuy</strong></h5><hr>
                        <h5 class="card-title text-center"><strong>GOD of FullStack Developer</strong></h5><hr>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="mt-3 d-flex justify-content-center"><button type="button" class="btn btn-primary">Redacte</button></div>
                    </div>
                </div>
            </div>
            <div class="col-8 bg-white p-4 h-100" >

                <a href="{{route ('table1.create')}}"> Створити нову </a>
                    <div style="overflow-x: scroll ">
                <table class="table text-center">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">description</th>
                        <th scope="col">price</th>
                        <th scope="col">img</th>
                        <th scope="col">updated_at</th>
                        <th scope="col">created_at</th>
                        <th scope="col">redact</th>
                        <th scope="col">delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($table1 as $table)
                        <tr>
                            <td>{{$table->id}}</td>
                            <td>{{$table->name}}</td>
                            <td>{{$table->description}}</td>
                            <td>{{$table->price}} грн</td>
                            <td>{{$table->img}}</td>
                            <td>{{$table->updated_at}}</td>
                            <td>{{$table->created_at}}</td>
                            <td><a class="text-decoration-none fs-4" href="{{route('table1.edit', ['id'=>$table->id])}}">&#9881;</a></td>
                            <td>
                                <form action="{{route('table1.destroy',['id'=>$table->id])}}" method="post">
                                    @csrf
                                    @method('delete')
                                    <button type="submit">&#10008;</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
              </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
@endsection



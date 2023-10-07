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
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="{{ url('/usersAdmin') }}">Users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href={{ url('/__roleAdmin') }}>Role</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('/__categoryAdmin') }}">Category</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="{{ url('/__postsAdmin') }}">Posts</a>
                    </li>
                </ul>
                <hr>
                <div class="search">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search ID" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <hr style="border-bottom: 5px solid black">
{{--                <a href="{{route('post.create')}}" style="padding: 15px;">NEW POST</a>--}}

                <table class="table text-center">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">category_id</th>
                        <th scope="col">name/title</th>
                        <th scope="col">description</th>
                        <th scope="col">url</th>
                        <th scope="col">redact</th>
                        <th scope="col">delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($posts as $post)
                        <tr>
                            <th scope="row">{{$post->id}}</th>
                            <td>{{$post->category_id}}</td>
                            <td>{{$post->name}}</td>
                            <td>{{$post->description}}</td>
                            <td>url</td>
                            <td><a class="text-decoration-none fs-4" href="{{route('post.edit', ['id'=>$post->id])}}">&#9881;</a></td>

                            <td>
                                <form action="{{route('post.destroy', ['id'=>$post->id])}}" method="post">
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


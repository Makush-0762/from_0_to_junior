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
                        <a class="nav-link active" href={{ url('/__roleAdmin') }}>Role</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('/__categoryAdmin') }}">Category</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="{{ url('/__postsAdmin') }}">Posts</a>
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
                <table class="table text-center">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">user_id</th>
                        <th scope="col">role</th>
                        <th scope="col">updated_at</th>
                        <th scope="col">created_at</th>
                        <th scope="col">redact</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($roles as $role)
                        <tr>
                            <td>{{$role->id}}</td>
                            <td>{{$role->user_id}}</td>
                            <td><strong>{{$role->name}}</strong></td>
                            <td>{{$role->updated_at}}</td>
                            <td>{{$role->created_at}}</td>
                            <td><a class="text-decoration-none fs-4" href="{{route('role.edit', ['id'=>$role->id])}}">&#9881;</a></td>
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


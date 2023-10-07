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
                <div class="tabs">
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
                            <a class="nav-link " href="{{ url('/__postsAdmin') }}">Posts</a>
                        </li>
                    </ul>
                </div>
                <hr>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Choose the topic on which the article will be</option>
                    <option value="1">HTML</option>
                    <option value="2">CSS</option>
                    <option value="3">JS</option>
                </select>
                <div class="input-group mb-3 mt-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Brief description</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="mt-3 d-flex  justify-content-between">

                    <div class="input-group w-100">
                        <label class="input-group-text" for="inputGroupFile01">Photo for preview</label>
                        <input type="file" class="form-control" id="inputGroupFile01">
                    </div>
                    <div class="input-group d-flex  justify-content-end  w-100">
                        <button type="button" class="btn btn-primary">Go to the article editor</button>
                    </div>
                </div>

                <hr>

                </div>
                <div class="col-1"></div>
            </div>
        </div>
    </div>
@endsection

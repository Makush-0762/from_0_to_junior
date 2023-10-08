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
                <h3>Create card</h3>

                <form action="{{route('table1.store')}}" method="post">
                    @csrf
                    <input type="text" name="name" placeholder="Name">
                    <input type="text" name="description" placeholder="Description">
                    <input type="text" name="price" placeholder="Price">
                    <input type="text" name="img" placeholder="Img">

                    <input type="submit" value="Create">
                </form>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
@endsection



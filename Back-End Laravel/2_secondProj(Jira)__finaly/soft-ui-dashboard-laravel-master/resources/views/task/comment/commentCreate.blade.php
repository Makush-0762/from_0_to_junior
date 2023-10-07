@extends('layouts.user_type.auth')

@section('content')

    <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12 ml-0 d-flex justify-content-center">
                    <div class="card mb-4 w-50">
                        <div class="card-body px-0 pt-0 pb-2 ">
                            <div class="table-responsive p-4">
                                <form action="{{route('comments.store')}}" method="post">
                                    @csrf
                                    <input type="text" class="form-control mb-3" name="description" id="name" placeholder="Description">
                                    <input type="text" class="form-control mb-3" name="user_id" id="name" placeholder="User_id">
                                    <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

@endsection

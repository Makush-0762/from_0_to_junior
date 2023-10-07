@extends('layouts.user_type.auth')

@section('content')

    <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <div class="card mb-4">
                        <div class="card-body px-0 pt-0 pb-2">
                            <div class="table-responsive p-0">
                                <form action="{{route('comments.update', ['id'=>$comments->id])}}" method="post">
                                    @csrf
                                    @method('put')
                                    <input type="text" class="form-control mb-3" name="description" id="description" value="{{$comments->description}}" placeholder="Description">
                                    <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">Edit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

@endsection

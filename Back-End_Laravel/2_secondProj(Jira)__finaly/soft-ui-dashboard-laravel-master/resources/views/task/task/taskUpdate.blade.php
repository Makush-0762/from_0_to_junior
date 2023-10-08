@extends('layouts.user_type.auth')

@section('content')

    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                  <form action="{{route('tasks.update', ['id'=>$tasks->id])}}" method="post">
                      @csrf
                      @method('put')
                      <input type="text" class="form-control mb-3" name="name" id="name" value="{{$tasks->name}}" placeholder="Name">
                      <input type="text" class="form-control mb-3" name="user_id" id="name" value="{{$tasks->user_id}}" placeholder="User_id">
                      <input type="text" class="form-control mb-3" name="status_id" id="status_id"  value="{{$tasks->status_id}}" placeholder="Status_id">
                      <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">Update</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  @endsection

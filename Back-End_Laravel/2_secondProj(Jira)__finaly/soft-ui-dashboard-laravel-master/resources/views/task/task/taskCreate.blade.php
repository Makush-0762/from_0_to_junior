@extends('layouts.user_type.auth')

@section('content')

  <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12 ml-0 d-flex justify-content-center">
          <div class="card mb-4 w-50">
            <div class="card-body px-0 pt-0 pb-2 ">
              <div class="table-responsive p-4">
                  <form action="{{route('tasks.store')}}" method="post">
                      @csrf
                      <input type="text" class="form-control mb-3" name="name" id="name" placeholder="Name">
                      <input type="text" class="form-control mb-3" name="user_id" id="user_id" placeholder="User_id">
                      <input type="text" class="form-control mb-3" name="status_id" id="status_id" placeholder="Status_id">
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

@extends('layouts.user_type.auth')

@section('content')

    <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12 ml-0 d-flex justify-content-center">
                    <div class="card mb-4 w-50">
                        <div class="card-body px-0 pt-0 pb-2 ">
                            <div class="table-responsive p-4">
                                <form action="{{route('taskUser.store')}}" method="post">
                                    @csrf
                                    <div style="display: flex; justify-content: space-between; align-items: center">
                                        <div style="display: flex; flex-direction: column; width: 45%">
                                            <label for="task_id">Task</label>
                                            <select name="task_id" id="task_id">
                                                @foreach($taskUsers as $taskUser)
                                                    <option value="{{$taskUser->id}}" {{ $taskUser->id == $selectedTaskId ? 'selected' : '' }}>{{$taskUser->id}} : {{$taskUser->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>

                                        <div style="display: flex; flex-direction: column; width: 45%">
                                            <label for="user_id">User</label>
                                            <select name="user_ids[]" id="user_ids" multiple style="height: 300px">
                                                @foreach($users as $user)
                                                    <option value="{{$user->id}}">{{$user->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">Add performens</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

  @endsection

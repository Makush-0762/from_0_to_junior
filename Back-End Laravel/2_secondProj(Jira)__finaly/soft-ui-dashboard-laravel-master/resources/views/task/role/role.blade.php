@extends('layouts.user_type.auth')

@section('content')

{{--    <form action="{{route('roles.store')}}" method="post">--}}
{{--        @csrf--}}
{{--        <select name="roles" id="roles">--}}
{{--            @foreach($roles as $role)--}}
{{--                <option>{{$role->id}}</option>--}}
{{--            @endforeach--}}
{{--        </select>--}}
{{--        <select name="users" id="users">--}}
{{--            @foreach($users as $user)--}}
{{--                <option>{{$user->id}}</option>--}}
{{--            @endforeach--}}
{{--        </select>--}}
        <table class="table align-items-center mb-0">
            <thead>
            <tr>
                <th class="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7">Id</th>
                <th class="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">User</th>
                <th class="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Role</th>
                <th class="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Update</th>
            </tr>
            </thead>
{{--            <tbody>--}}
{{--            @foreach($users as $user)--}}
{{--                    <tr>--}}
{{--                        <td style="text-align: center;">--}}
{{--                                {{$user->id}}--}}
{{--                        </td>--}}
{{--                        <td style="text-align: center;">--}}
{{--                            {{$user->name}}--}}
{{--                        </td>--}}
{{--                        <td style="text-align: center;">--}}
{{--                            @foreach($user->roles as $role)--}}
{{--                                {{$role->name}}--}}
{{--                            @endforeach--}}
{{--                        </td>--}}
{{--                        <td style="text-align: center;">--}}
{{--                            <form action="{{route('roles.store')}}" method="post" style="display: flex; justify-content: space-around;">--}}
{{--                                @csrf--}}
{{--                                <select name="role_id" id="role_id">--}}
{{--                                    @foreach($roles as $role)--}}
{{--                                        <option value="{{$role->id}}">{{$role->name}}</option>--}}
{{--                                    @endforeach--}}
{{--                                </select>--}}
{{--                                <button type="submit" name="role_id" value="{{$user->id}}">Change</button>--}}
{{--                            </form>--}}
{{--                        </td>--}}
{{--                    </tr>--}}
{{--                @endforeach--}}
{{--            </tbody>            --}}
            <tbody>
            @foreach($rolesUser as $roleUser)
                    <tr>
                        <td style="text-align: center;">
                                {{$roleUser->id}}
                        </td>
                        <td style="text-align: center;">
                            {{$roleUser->user->name}}
                        </td>
                        <td style="text-align: center;">
                                {{$roleUser->role->name}}
                        </td>
                        <td style="text-align: center;">
                            <form action="{{route('roles.update', ['id'=>$roleUser->id])}}" method="post" style="display: flex; justify-content: space-around;">
                                @csrf
                                @method('put')
                                <select class="form-select" name="role_id" id="role_id" style="width: 150px">
                                    @foreach($roles as $role)
                                        <option value="{{$role->id}}">{{$role->name}}</option>
                                    @endforeach
                                </select>
{{--                                <select name="role_id" id="role_id">--}}
{{--                                    @foreach($roles as $role)--}}
{{--                                        <option value="{{$role->id}}">{{$role->name}}</option>--}}
{{--                                    @endforeach--}}
{{--                                </select>--}}
                                <button type="submit" class="btn btn-secondary" style="margin-bottom: 0">Change</button>
{{--                                <button type="submit">Change</button>--}}
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
@endsection


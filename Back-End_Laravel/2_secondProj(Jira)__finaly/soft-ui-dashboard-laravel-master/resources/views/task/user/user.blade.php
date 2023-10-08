@extends('layouts.user_type.auth')

<style>
    .bodyTaskTitle{
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
    }
    .titleTableTask{
        font-size: 16px;
        font-weight: 600;
    }
    .table_accordionComment1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
    .pantry{
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .pantry_commentTask,.pantry_numberTask,.pantry_creatorTask,.pantry_nameTask,.pantry_statusTask{
        justify-content: start;
    }
    .pantry_userPhoto{
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        /*overflow: scroll;*/
        width: 200px;
    }
    .pantry_statusTask{
        justify-content: center;
    }
    .pantry_numberTask{
        width: 50px;
    }
    .pantry_creatorTask,.pantry_commentTask{
        margin: 0;
        width: 150px;
    }
    .pantry_nameTask{
        width: 350px;
    }
    .pantry_statusTask{
        width: 120px;
    }
    .btn_comment,.btn_destroy,.btn_updatea{
        display: inline-block;
        margin: 0;
    }
    .btn_destroy,.btn_update{
        width: 110px;
        text-align: center;
    }
    .btn_update{
        justify-content: center;
    }
    .accordionactive{
        list-style-type: none;
        background-color: rgba(242, 242, 242, 0.7);
        margin: 0;
        margin-bottom: 20px;
        padding: 10px;
    }
    .commenCRUD{
        display: flex;
        justify-content: space-between;
    }

</style>


@section('content')

    <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <div class="card mb-4">
                        <div class="card-body px-0 pt-0 pb-2">
                            <div class="table-responsive p-0">
                                <table class="table align-items-center mb-0">
                                    <thead>
                                    <tr>
                                        <th class="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7">Id</th>
                                        <th class="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Name</th>
                                        <th class="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Phone</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Photo_avatar</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Location</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">About me</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Remember token</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Created_at</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Updated_at</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($users as $user)
                                        <tr>
                                            <td style="text-align: center;">
                                                {{$user->id}}
                                            </td>
                                            <td style="text-align: center;">
                                                {{$user->name}}
                                            </td>
                                            <td style="text-align: center;">
                                                {{$user->email}}
                                            </td>
                                            <td style="text-align: center;">
                                                {!! $user->phone ? $user->phone : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span> ' !!}
                                            </td>
                                            <td style=" text-align: center; overflow-x: scroll">
                                                <div class="pantry pantry_userPhoto">
                                                    {!! $user->user_avatar ? $user->user_avatar : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px; ">Дані відсутні</span> ' !!}
                                                    <a class="btn btn-primary btn_comment" style="margin: 0; padding: 10px"  href="{{ route('user.edit', ['id' => $user->id]) }}" role="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill: white; width: 14px; height: 14px" version="1.1" id="Capa_1" x="0px" y="0px" width="401.994px" height="401.994px" viewBox="0 0 401.994 401.994" style="enable-background:new 0 0 401.994 401.994;" xml:space="preserve">
                                                            <g>
                                                                <path d="M394,154.175c-5.331-5.33-11.806-7.994-19.417-7.994H255.811V27.406c0-7.611-2.666-14.084-7.994-19.414   C242.488,2.666,236.02,0,228.398,0h-54.812c-7.612,0-14.084,2.663-19.414,7.993c-5.33,5.33-7.994,11.803-7.994,19.414v118.775   H27.407c-7.611,0-14.084,2.664-19.414,7.994S0,165.973,0,173.589v54.819c0,7.618,2.662,14.086,7.992,19.411   c5.33,5.332,11.803,7.994,19.414,7.994h118.771V374.59c0,7.611,2.664,14.089,7.994,19.417c5.33,5.325,11.802,7.987,19.414,7.987   h54.816c7.617,0,14.086-2.662,19.417-7.987c5.332-5.331,7.994-11.806,7.994-19.417V255.813h118.77   c7.618,0,14.089-2.662,19.417-7.994c5.329-5.325,7.994-11.793,7.994-19.411v-54.819C401.991,165.973,399.332,159.502,394,154.175z"/>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </td>
                                            <td style="text-align: center;">
                                                {!! $user->location ? $user->location : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span>' !!}
                                            </td>
                                            <td style="text-align: center;">
                                                {!! $user->about_me ? $user->about_me : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span>' !!}
                                            </td>
                                            <td style="text-align: center;">
                                                {!! $user->remember_token ? $user->remember_token : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span>' !!}
                                            </td>
                                            <td style="text-align: center;">
                                                {{$user->created_at}}
                                            </td>
                                            <td style="text-align: center;">
                                                {{$user->updated_at}}
                                            </td>
                                            <td style="text-align: center;">
                                                <form action="{{route('user.destroy', ['id'=>$user->id])}}" method="post">
                                                    @csrf
                                                    @method('delete')
                                                    <button type="submit" style="padding: 10px" class="btn btn-primary active mb-0 text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="137px" style="width: 24px; height: 24px; fill: white" version="1.1" viewBox="0 0 98 137" width="98px" xml:space="preserve"><style type="text/css">
                                                                <![CDATA[
                                                                .st0{fill:#EF3E42;}
                                                                .st1{fill:#FFFFFF;}
                                                                .st2{fill:none;}
                                                                .st3{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
                                                                ]]>
                                                            </style><defs/><path d="M75.6,44.8v73c0,3.4-2.8,6.2-6.2,6.2H21.3c-3.4,0-6.2-2.8-6.2-6.2v-73H75.6L75.6,44.8z M59.9,52.9v62.8h3.6V52.9H59.9  L59.9,52.9z M43.6,52.9v62.8h3.6V52.9H43.6L43.6,52.9z M27.3,52.9v62.8h3.6V52.9H27.3L27.3,52.9z M31.3,27.9v-5.2  c0-3.3,2.6-5.9,5.9-5.9h16.4c3.3,0,5.9,2.6,5.9,5.9v5.2h18.1c3.4,0,6.2,2.8,6.2,6.2v4.3H7V34c0-3.4,2.8-6.2,6.2-6.2H31.3L31.3,27.9z   M37.2,20.8c-1,0-1.8,0.8-1.8,1.8v5.2h20.1v-5.2c0-1-0.8-1.8-1.8-1.8H37.2L37.2,20.8z"/><rect class="st2" height="137" id="_x3C_Slice_x3E__100_" width="98"/></svg>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

@endsection





{{--                                <div class="card-body px-0 pt-0 pb-2">--}}
{{--                                    <div class="table-responsive p-0">--}}
{{--                                        <div class="table_accordionComment1 bodyTaskTitle" style="padding: 0 15px;">--}}
{{--                                            <div class="pantry pantry_numberTask titleTableTask">--}}
{{--                                                ID--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_creatorTask titleTableTask">--}}
{{--                                                Name--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_nameTask titleTableTask">--}}
{{--                                                Email--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_statusTask titleTableTask">--}}
{{--                                                Phone--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_userPhoto titleTableTask">--}}
{{--                                                Photo_avatar--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_updateTask btn_update titleTableTask">--}}
{{--                                                Location--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_deleteTask titleTableTask">--}}
{{--                                                About me--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_deleteTask titleTableTask">--}}
{{--                                                Remember token--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_deleteTask titleTableTask">--}}
{{--                                                Created_at--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_deleteTask titleTableTask">--}}
{{--                                                Updated_at--}}
{{--                                            </div>--}}
{{--                                            <div class="pantry pantry_deleteTask titleTableTask">--}}
{{--                                                Delete--}}
{{--                                            </div>--}}
{{--                                        </div>--}}
{{--                                        @foreach($users as $user)--}}
{{--                                            <div class="table_accordionComment1">--}}

{{--                                                <div class="pantry pantry_numberTask">--}}
{{--                                                    <span>{{$user->id}}</span>--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_creatorTask">--}}
{{--                                                    <span>{{$user->name}}</span>--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_nameTask">--}}
{{--                                                    <span> {{$user->email}}</span>--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_statusTask" style="fill: white">--}}
{{--                                                    {!! $user->phone ? $user->phone : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span> ' !!}--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_userPhoto">--}}
{{--                                                    {!! $user->user_avatar ? $user->user_avatar : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px; ">Дані відсутні</span> ' !!}--}}
{{--                                                    <a class="btn btn-primary btn_comment" style="margin: 0; padding: 10px"  href="{{ route('user.edit', ['id' => $user->id]) }}" role="button">--}}
{{--                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill: white; width: 14px; height: 14px" version="1.1" id="Capa_1" x="0px" y="0px" width="401.994px" height="401.994px" viewBox="0 0 401.994 401.994" style="enable-background:new 0 0 401.994 401.994;" xml:space="preserve">--}}
{{--                                                            <g>--}}
{{--                                                                <path d="M394,154.175c-5.331-5.33-11.806-7.994-19.417-7.994H255.811V27.406c0-7.611-2.666-14.084-7.994-19.414   C242.488,2.666,236.02,0,228.398,0h-54.812c-7.612,0-14.084,2.663-19.414,7.993c-5.33,5.33-7.994,11.803-7.994,19.414v118.775   H27.407c-7.611,0-14.084,2.664-19.414,7.994S0,165.973,0,173.589v54.819c0,7.618,2.662,14.086,7.992,19.411   c5.33,5.332,11.803,7.994,19.414,7.994h118.771V374.59c0,7.611,2.664,14.089,7.994,19.417c5.33,5.325,11.802,7.987,19.414,7.987   h54.816c7.617,0,14.086-2.662,19.417-7.987c5.332-5.331,7.994-11.806,7.994-19.417V255.813h118.77   c7.618,0,14.089-2.662,19.417-7.994c5.329-5.325,7.994-11.793,7.994-19.411v-54.819C401.991,165.973,399.332,159.502,394,154.175z"/>--}}
{{--                                                            </g>--}}
{{--                                                          </svg>--}}
{{--                                                    </a>--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_statusTask">--}}
{{--                                                    {!! $user->location ? $user->location : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span>' !!}--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_statusTask">--}}
{{--                                                    {!! $user->about_me ? $user->about_me : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span>' !!}--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_statusTask">--}}
{{--                                                    {!! $user->remember_token ? $user->remember_token : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span>' !!}--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_statusTask">--}}
{{--                                                    {{$user->created_at}}--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_statusTask">--}}
{{--                                                    {{$user->updated_at}}--}}
{{--                                                </div>--}}
{{--                                                <div class="pantry pantry_statusTask">--}}
{{--                                                    <form action="{{route('user.destroy', ['id'=>$user->id])}}" method="post">--}}
{{--                                                        @csrf--}}
{{--                                                        @method('delete')--}}
{{--                                                        <button type="submit" style="padding: 10px" class="btn btn-primary active mb-0 text-white">--}}
{{--                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="137px" style="width: 24px; height: 24px; fill: white" version="1.1" viewBox="0 0 98 137" width="98px" xml:space="preserve"><style type="text/css">--}}
{{--                                                                    <![CDATA[--}}
{{--                                                                    .st0{fill:#EF3E42;}--}}
{{--                                                                    .st1{fill:#FFFFFF;}--}}
{{--                                                                    .st2{fill:none;}--}}
{{--                                                                    .st3{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}--}}
{{--                                                                    ]]>--}}
{{--                                                                </style><defs/><path d="M75.6,44.8v73c0,3.4-2.8,6.2-6.2,6.2H21.3c-3.4,0-6.2-2.8-6.2-6.2v-73H75.6L75.6,44.8z M59.9,52.9v62.8h3.6V52.9H59.9  L59.9,52.9z M43.6,52.9v62.8h3.6V52.9H43.6L43.6,52.9z M27.3,52.9v62.8h3.6V52.9H27.3L27.3,52.9z M31.3,27.9v-5.2  c0-3.3,2.6-5.9,5.9-5.9h16.4c3.3,0,5.9,2.6,5.9,5.9v5.2h18.1c3.4,0,6.2,2.8,6.2,6.2v4.3H7V34c0-3.4,2.8-6.2,6.2-6.2H31.3L31.3,27.9z   M37.2,20.8c-1,0-1.8,0.8-1.8,1.8v5.2h20.1v-5.2c0-1-0.8-1.8-1.8-1.8H37.2L37.2,20.8z"/><rect class="st2" height="137" id="_x3C_Slice_x3E__100_" width="98"/></svg>--}}
{{--                                                        </button>--}}
{{--                                                    </form>--}}
{{--                                                </div>--}}
{{--                                        </div>--}}
{{--                                            <hr style="margin: 0; border: 1.5px solid rgba(176,176,176,0.3);">--}}
{{--                                            <div class="collapse accordionactive" id="collapseComments{{$user->id}}">--}}
{{--                                                <div class="card card-body accordionactive commenCRUD">--}}
{{--                                                    <form action="{{ route('user.upload', ['id' => $user->id]) }}" method="post" enctype="multipart/form-data">--}}
{{--                                                        @csrf--}}
{{--                                                        <div class="input-group">--}}
{{--                                                            <input type="file" name="image" class="form-control" style="height: auto; margin: 0" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">--}}
{{--                                                            <button class="btn btn-primary active mb-0 text-white" style="margin: 0" type="button" id="inputGroupFileAddon04">--}}
{{--                                                                <svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 98.371 98.371" style=" width: 16px; height: 16px; fill: white; enable-background:new 0 0 98.371 98.371;" xml:space="preserve">--}}
{{--                                                                    <g>--}}
{{--                                                                        <g>--}}
{{--                                                                            <path style="fill:white;" d="M26.834,98.371c-6.574,0-12.727-2.789-17.17-7.232C1.055,82.53-1.345,67.5,10.725,55.43    c7.072-7.072,35.4-35.398,49.541-49.542c5.02-5.02,11.41-6.958,17.527-5.319C83.801,2.178,88.725,7.1,90.334,13.107    c1.639,6.121-0.299,12.509-5.318,17.529L37.639,78.014c-2.705,2.705-5.76,4.306-8.832,4.631c-3.041,0.32-5.945-0.659-7.977-2.69    c-3.686-3.685-4.211-10.621,1.916-16.745l33.278-33.28c1.367-1.367,3.582-1.367,4.949,0s1.367,3.583,0,4.949L27.696,68.158    c-2.877,2.876-3.141,5.622-1.916,6.847c0.537,0.537,1.352,0.779,2.291,0.678c1.441-0.152,3.082-1.083,4.619-2.62l47.377-47.376    c3.25-3.25,4.496-7.074,3.506-10.766c-0.975-3.637-3.953-6.615-7.59-7.59c-3.691-0.99-7.516,0.256-10.768,3.507    c-14.14,14.141-42.469,42.471-49.541,49.541c-9.23,9.23-7.02,19.85-1.061,25.809s16.578,8.171,25.811-1.06l49.541-49.542    c1.367-1.367,3.582-1.367,4.949,0s1.367,3.583,0,4.949L45.373,90.078C39.534,95.919,32.998,98.371,26.834,98.371z"/>--}}
{{--                                                                        </g>--}}
{{--                                                                    </g>--}}
{{--                                                                </svg>--}}
{{--                                                            </button>--}}
{{--                                                        </div>--}}
{{--                                                    </form>--}}
{{--                                                </div>--}}
{{--                                            </div>--}}
{{--                                        @endforeach--}}
{{--                                </div>--}}
{{--                            </div>--}}



















{{--                                <table class="table align-items-center mb-0">--}}
{{--                                    <thead>--}}
{{--                                    <tr>--}}
{{--                                        <th class="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7">Id</th>--}}
{{--                                        <th class="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Name</th>--}}
{{--                                        <th class="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>--}}
{{--                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Phone</th>--}}
{{--                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Photo_avatar</th>--}}
{{--                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Location</th>--}}
{{--                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">About me</th>--}}
{{--                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Remember token</th>--}}
{{--                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Created_at</th>--}}
{{--                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Updated_at</th>--}}
{{--                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Delete</th>--}}
{{--                                    </tr>--}}
{{--                                    </thead>--}}
{{--                                    <tbody>--}}
{{--                                    @foreach($users as $user)--}}
{{--                                        <tr>--}}
{{--                                            <td style="text-align: center;">--}}
{{--                                                {{$user->id}}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: start;">--}}
{{--                                                {{$user->name}}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: start;">--}}
{{--                                                {{$user->email}}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: center;">--}}
{{--                                                {!! $user->phone ? $user->phone : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span> ' !!}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: center;">--}}
{{--                                                {!! $user->user_avatar ? $user->user_avatar : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Фото відсутнє</span>' !!}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: center;">--}}
{{--                                                {!! $user->location ? $user->location : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span>' !!}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: center;">--}}
{{--                                                {!! $user->about_me ? $user->about_me : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span>' !!}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: center;">--}}
{{--                                                {!! $user->remember_token ? $user->remember_token : '<span style="color: rgba(168, 168, 168, 0.7); font-size: 12px;">Дані відсутні</span>' !!}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: center;">--}}
{{--                                                {{$user->created_at}}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: center;">--}}
{{--                                                {{$user->updated_at}}--}}
{{--                                            </td>--}}
{{--                                            <td style="text-align: center;">--}}
{{--                                                <form action="{{route('user.destroy', ['id'=>$user->id])}}" method="post">--}}
{{--                                                    @csrf--}}
{{--                                                    @method('delete')--}}
{{--                                                    <button type="submit" style="padding: 10px" class="btn btn-primary active mb-0 text-white">--}}
{{--                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="137px" style="width: 24px; height: 24px; fill: white" version="1.1" viewBox="0 0 98 137" width="98px" xml:space="preserve"><style type="text/css">--}}
{{--                                                                <![CDATA[--}}
{{--                                                                .st0{fill:#EF3E42;}--}}
{{--                                                                .st1{fill:#FFFFFF;}--}}
{{--                                                                .st2{fill:none;}--}}
{{--                                                                .st3{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}--}}
{{--                                                                ]]>--}}
{{--                                                            </style><defs/><path d="M75.6,44.8v73c0,3.4-2.8,6.2-6.2,6.2H21.3c-3.4,0-6.2-2.8-6.2-6.2v-73H75.6L75.6,44.8z M59.9,52.9v62.8h3.6V52.9H59.9  L59.9,52.9z M43.6,52.9v62.8h3.6V52.9H43.6L43.6,52.9z M27.3,52.9v62.8h3.6V52.9H27.3L27.3,52.9z M31.3,27.9v-5.2  c0-3.3,2.6-5.9,5.9-5.9h16.4c3.3,0,5.9,2.6,5.9,5.9v5.2h18.1c3.4,0,6.2,2.8,6.2,6.2v4.3H7V34c0-3.4,2.8-6.2,6.2-6.2H31.3L31.3,27.9z   M37.2,20.8c-1,0-1.8,0.8-1.8,1.8v5.2h20.1v-5.2c0-1-0.8-1.8-1.8-1.8H37.2L37.2,20.8z"/><rect class="st2" height="137" id="_x3C_Slice_x3E__100_" width="98"/></svg>--}}
{{--                                                    </button>--}}
{{--                                                </form>--}}
{{--                                            </td>--}}
{{--                                        </tr>--}}
{{--                                    @endforeach--}}
{{--                                    </tbody>--}}
{{--                                </table>--}}

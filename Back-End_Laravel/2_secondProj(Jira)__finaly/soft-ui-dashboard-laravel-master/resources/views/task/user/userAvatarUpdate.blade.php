@extends('layouts.user_type.auth')



@section('content')

    <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <form action="{{ route('user.update', ['id' => $user->id]) }}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('put')
                        <div class="input-group">
                            <input type="hidden" name="user_id" value="{{$user->id}}">
                            <input type="file" name="image" class="form-control" style="height: auto; margin: 0" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" value="{{$user->user_avatar}}" />
                            <button class="btn btn-primary active mb-0 text-white" style="margin: 0" type="submit" id="inputGroupFileAddon04">
                                <svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 98.371 98.371" style=" width: 16px; height: 16px; fill: white; enable-background:new 0 0 98.371 98.371;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path style="fill:white;" d="M26.834,98.371c-6.574,0-12.727-2.789-17.17-7.232C1.055,82.53-1.345,67.5,10.725,55.43    c7.072-7.072,35.4-35.398,49.541-49.542c5.02-5.02,11.41-6.958,17.527-5.319C83.801,2.178,88.725,7.1,90.334,13.107    c1.639,6.121-0.299,12.509-5.318,17.529L37.639,78.014c-2.705,2.705-5.76,4.306-8.832,4.631c-3.041,0.32-5.945-0.659-7.977-2.69    c-3.686-3.685-4.211-10.621,1.916-16.745l33.278-33.28c1.367-1.367,3.582-1.367,4.949,0s1.367,3.583,0,4.949L27.696,68.158    c-2.877,2.876-3.141,5.622-1.916,6.847c0.537,0.537,1.352,0.779,2.291,0.678c1.441-0.152,3.082-1.083,4.619-2.62l47.377-47.376    c3.25-3.25,4.496-7.074,3.506-10.766c-0.975-3.637-3.953-6.615-7.59-7.59c-3.691-0.99-7.516,0.256-10.768,3.507    c-14.14,14.141-42.469,42.471-49.541,49.541c-9.23,9.23-7.02,19.85-1.061,25.809s16.578,8.171,25.811-1.06l49.541-49.542    c1.367-1.367,3.582-1.367,4.949,0s1.367,3.583,0,4.949L45.373,90.078C39.534,95.919,32.998,98.371,26.834,98.371z"/>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>

@endsection
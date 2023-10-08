<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="hight:100%;">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])

    <style>
    </style>
</head>
<body style="hight:100%; position: relative; background: rgb(255,145,35); background: linear-gradient(90deg, rgba(255,165,68,0.3) 0%, rgba(1,30,65,0.3) 49%, rgba(0,255,244,0.3) 100%);">
    <div id="app" style="min-height: 100vh; display: flex; flex-direction: column;">
        <header>
            <nav class="navbar navbar-expand-lg bg-secondary px-2 ">
                <div class="container-fluid ">
                    <a class="navbar-brand text-white fs-2" href="{{ url('/') }}">
                        HowDoThis
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                        <ul class="nav justify-content-around w-75 fs-4">
                            <li class="nav-item">
                                <a class="nav-link text-white" aria-current="page" href="{{ url('/') }}">Main</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="{{ url('/posts') }}">Posts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="{{ url('/category') }}">Category</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="{{ url('/about-us') }}">About Us</a>
                            </li>
                                @if (Route::has('homeAdmin'))
                                    @auth
                                        <li>
                                            <a class="nav-link text-white" href="{{ url('/__roleAdmin') }}">Role</a>
                                        </li>
                                   @endif
                                @endif
                        </ul>
                    </div>
                </div>
                <div class="" style="width: 15%">
                    @if (Route::has('login'))
                        <div class="d-flex align-items-center justify-content-around fs-4">
                            @auth
                                <a href="{{ url('/home') }}" class="text-decoration-none text-white  hover:text-gray-600 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Admin</a>
                                &nbsp;
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        PRACTIC TABLE
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="{{url('/table1')}}">Table 1</a></li>
                                        <li><a class="dropdown-item" href="#">Table 2</a></li>
                                        <li><a class="dropdown-item" href="#">Table 3</a></li>
                                    </ul>
                                </div>
                            @else
                                <a href="{{ route('login') }}" class="text-white  hover:text-gray-600 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>

                                @if (Route::has('register'))
                                    <a href="{{ route('register') }}" class="ml-4 text-white dark:hover:text-white-600 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
                                @endif
                            @endauth
                        </div>
                    @endif
                </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        @guest
{{--                            @if (Route::has('login'))--}}
{{--                                <li class="nav-item">--}}
{{--                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>--}}
{{--                                </li>--}}
{{--                            @endif--}}

{{--                            @if (Route::has('register'))--}}
{{--                                <li class="nav-item">--}}
{{--                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>--}}
{{--                                </li>--}}
{{--                            @endif--}}
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link text-white fs-5 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item fs-5" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
    </nav>
    </header>
        <main class="py-4" style="flex: 1 1 auto">
            <div class="px-5 position-absolute" style="width: auto;right: 0; z-index: 0; text-align: end">
                @if (Route::has('login'))
                    <div class="d-flex align-items-center justify-content-end fs-4">
                        @auth
                            <div class="d-flex flex-column text-black">
                                <a href="{{ url('/home') }}" class="text-decoration-none text-black  hover:text-gray-600 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">User</a>
                                <a href="{{ url('/homeModer') }}" class="text-decoration-none text-black  hover:text-gray-600 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Moder</a>
                                <a href="{{ url('/homeAdmin') }}" class="text-decoration-none text-black  hover:text-gray-600 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Admin</a>
                            </div>
                        @endauth
                    </div>
                @endif
            </div>

            @yield('content')
        </main>
        <footer class="py-4 bg-white fs-5" style="position: relative; bottom: 0">
            <div class="container">
                <div class="row d-flex  justify-content-around">
                    <div class="col-4 d-flex justify-content-center">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4 d-flex justify-content-center">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4 d-flex justify-content-center">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>

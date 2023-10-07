@extends('layouts.app')

@section('content')
    <div class="container text-center w-100 position-relative">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <div className="bodyFon" style="width: 100%; height: 650px; overflow: hidden; margin: 0; padding: 0; position: relative;">
                    <div className="opasity"></div>
                    <img style="border-radius:20%; width: 100%; height: 100%; object-fit: cover;" src="https://img.freepik.com/free-vector/gradient-technological-background_23-2148884155.jpg?w=1380&t=st=1685020225~exp=1685020825~hmac=41b3e09e3358c07f70e676f8402d89a86a59d04fa9e71063e0c8ecd1cb2f3ad6" alt="fon" className="fonImg"/>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row text-white w-100" style="position: absolute; left: 20px; top: 35%; margin: 0 auto">
            <div class="col-2"></div>
            <div class="col-8"><div style="text-align: center; font-family: Montserrat, sans-serif;">
                    <h2 class="fs-3">Forgot something?</h2>
                    <p style="font-size: 20px;">Enter the keywords or topic you would like to view</p>
                </div>
                <form class="d-flex">
                    <input placeholder="Search" aria-label="Search" type="search" class="me-2 form-control">
                    <button type="button" class="btn btn-outline-success">Search</button>
                </form>
                <div class="col-2"></div>
            </div>
        </div>
@endsection


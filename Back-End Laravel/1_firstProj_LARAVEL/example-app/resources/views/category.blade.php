@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10 bg-white  p-5 ">
                <h3 class="fs-1 text-center pb-5 mb-5">Category</h3>
                <div class="row">
                    <div class="col-6 d-flex justify-content-center">
                        <a href="/tutorial/html"  class="d-flex justify-center d-flex justify-content-center"><img src="https://img.icons8.com/?size=512&id=10246&format=png" style="width: 30%" alt="html"></a>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <a href="/tutorial/css" class="d-flex justify-center d-flex justify-content-center"><img src="https://img.icons8.com/?size=512&id=10236&format=png" style="width: 30%" alt="css" class="imgLanBlock"></a>
                    </div>
                </div>
                <div class="row pt-5 mt-5">
                    <div class="col-3"></div>
                    <div class="col d-flex justify-content-center ">
                        <a href="/tutorial/javascript" class="d-flex justify-center d-flex justify-content-center"><img src="https://img.icons8.com/?size=512&id=10263&format=png" style="width: 30%" alt="js" class="imgLanBlock"></a>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
@endsection

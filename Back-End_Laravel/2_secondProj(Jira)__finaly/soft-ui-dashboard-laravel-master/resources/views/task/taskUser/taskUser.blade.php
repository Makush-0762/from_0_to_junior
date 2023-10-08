@extends('layouts.user_type.auth')

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
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Name</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Performers</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                      @foreach($taskUsers as $taskUser)
                          <tr>
                              <td style="text-align: center;">
                                  {{$taskUser->id}}
                              </td>
                              <td>
                                  {{$taskUser->name}}
                              </td>
                              <td>
                                  <ul style="list-style-type: none; padding: 0">
                                      @foreach($taskUser->assigneds as $assigned)
                                            <li>{{$assigned->name}}</li>
                                      @endforeach
                                  </ul>
                              </td>
                              <td style="text-align: center;">
                                  <a href="{{route('taskUser.create', ['task_id' => $taskUser->id])}}" class="btn btn-primary btn_updatea active mb-0 text-white" style="padding: 10px">
                                      <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="155.724px" height="155.723px" viewBox="0 0 155.724 155.723" style="width: 24px; height: 24px; fill: white">
                                          <g>
                                              <g id="_x33_50._Repeat">
                                                  <g>
                                                      <path d="M42.735,121.521c-12.77-10.273-20.942-26.025-20.942-43.691c0-26.114,17.882-47.992,42.051-54.23V9.154     C31.854,15.646,7.776,43.927,7.776,77.83c0,20.951,9.199,39.738,23.767,52.578C42.819,140.911,49.827,126.894,42.735,121.521z      M123.589,24.746c-7.18-6.485-17.693,4.028-10.801,9.236c12.888,10.27,21.143,26.097,21.143,43.848     c0,26.118-17.885,48-42.052,54.234v14.449c31.99-6.499,56.068-34.776,56.068-68.684     C147.947,56.602,138.502,37.596,123.589,24.746z M70.037,35.707l22.813-13.661c3.319-1.988,3.326-5.226,0.018-7.228L69.844,0.883     c-3.312-1.999-5.985-0.49-5.969,3.381l0.124,28.035C64.009,36.168,66.714,37.695,70.037,35.707z M85.883,120.029l-23.027,13.935     c-3.311,2.002-3.304,5.239,0.019,7.228l22.811,13.662c3.319,1.984,6.03,0.462,6.047-3.412l0.12-28.034     C91.865,119.54,89.188,118.03,85.883,120.029z"/>
                                                  </g>
                                              </g>
                                      </svg>
                                  </a>
{{--                                  <form action="{{route('taskUser.update', ['id'=>$taskUser->id])}}" method="post">--}}
{{--                                      @csrf--}}
{{--                                      @method('put')--}}
{{--                                      <button type="submit" style="padding: 10px" class="btn btn-primary active mb-0 text-white">--}}
{{--                                          <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="155.724px" height="155.723px" viewBox="0 0 155.724 155.723" style="width: 24px; height: 24px; fill: white">--}}
{{--                                              <g>--}}
{{--                                                  <g id="_x33_50._Repeat">--}}
{{--                                                      <g>--}}
{{--                                                          <path d="M42.735,121.521c-12.77-10.273-20.942-26.025-20.942-43.691c0-26.114,17.882-47.992,42.051-54.23V9.154     C31.854,15.646,7.776,43.927,7.776,77.83c0,20.951,9.199,39.738,23.767,52.578C42.819,140.911,49.827,126.894,42.735,121.521z      M123.589,24.746c-7.18-6.485-17.693,4.028-10.801,9.236c12.888,10.27,21.143,26.097,21.143,43.848     c0,26.118-17.885,48-42.052,54.234v14.449c31.99-6.499,56.068-34.776,56.068-68.684     C147.947,56.602,138.502,37.596,123.589,24.746z M70.037,35.707l22.813-13.661c3.319-1.988,3.326-5.226,0.018-7.228L69.844,0.883     c-3.312-1.999-5.985-0.49-5.969,3.381l0.124,28.035C64.009,36.168,66.714,37.695,70.037,35.707z M85.883,120.029l-23.027,13.935     c-3.311,2.002-3.304,5.239,0.019,7.228l22.811,13.662c3.319,1.984,6.03,0.462,6.047-3.412l0.12-28.034     C91.865,119.54,89.188,118.03,85.883,120.029z"/>--}}
{{--                                                      </g>--}}
{{--                                                  </g>--}}
{{--                                          </svg>--}}
{{--                                      </button>--}}
{{--                                  </form>--}}
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
    </div>
  </main>

  @endsection

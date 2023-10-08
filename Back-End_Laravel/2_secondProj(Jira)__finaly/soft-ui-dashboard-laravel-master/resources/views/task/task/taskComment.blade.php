@extends('layouts.user_type.auth')

@section('content')

  <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0" style="display: flex; justify-content:space-between;">
              <h6 style="display: inline-block">Authors table</h6>
                <a href="{{route('tasks.create')}}"class="btn btn-primary active mb-0 text-white">
                    Create
                </a>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Сreator</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Name</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Comment</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Edit</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                      @foreach($tasks as $task)
                          <tr>
                              <td style="text-align: center;">
                                  {{$task->id}}
                              </td>
                              <td style="text-align: center;">
                                  {{$task->user->name}}
                              </td>
                              <td>
                                  {{$task->name}}
                              </td>
                              <td style="text-align: center;">
                                  {{$task->status->name}}
                              </td>
                              <td style="text-align: center;">
                                  <a href="{{route('tasks.edit', ['id'=>$task->id])}}" class="btn btn-primary active mb-0 text-white" style="padding: 10px">
                                      Comment
                                  </a>
                              </td>
                              <td style="text-align: center;">
                                  <a href="{{route('tasks.edit', ['id'=>$task->id])}}" class="btn btn-primary active mb-0 text-white" style="padding: 10px">
                                      <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="155.724px" height="155.723px" viewBox="0 0 155.724 155.723" style="width: 24px; height: 24px; fill: white">
                                    <g>
                                        <g id="_x33_50._Repeat">
                                            <g>
                                                <path d="M42.735,121.521c-12.77-10.273-20.942-26.025-20.942-43.691c0-26.114,17.882-47.992,42.051-54.23V9.154     C31.854,15.646,7.776,43.927,7.776,77.83c0,20.951,9.199,39.738,23.767,52.578C42.819,140.911,49.827,126.894,42.735,121.521z      M123.589,24.746c-7.18-6.485-17.693,4.028-10.801,9.236c12.888,10.27,21.143,26.097,21.143,43.848     c0,26.118-17.885,48-42.052,54.234v14.449c31.99-6.499,56.068-34.776,56.068-68.684     C147.947,56.602,138.502,37.596,123.589,24.746z M70.037,35.707l22.813-13.661c3.319-1.988,3.326-5.226,0.018-7.228L69.844,0.883     c-3.312-1.999-5.985-0.49-5.969,3.381l0.124,28.035C64.009,36.168,66.714,37.695,70.037,35.707z M85.883,120.029l-23.027,13.935     c-3.311,2.002-3.304,5.239,0.019,7.228l22.811,13.662c3.319,1.984,6.03,0.462,6.047-3.412l0.12-28.034     C91.865,119.54,89.188,118.03,85.883,120.029z"/>
                                            </g>
                                        </g>
                                    </svg>
                                  </a>
                              </td>
                              <td style="text-align: center;">
                                  <form action="{{route('tasks.destroy', ['id'=>$task->id])}}" method="post">
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
    </div>
  </main>

  @endsection

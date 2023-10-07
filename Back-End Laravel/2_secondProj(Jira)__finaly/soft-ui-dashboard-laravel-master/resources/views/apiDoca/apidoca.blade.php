<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

    <title>Document</title>
    <style>
        pre{
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            padding: 15px;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            font-size: 15px;
        }
        body {
            /*background: rgb(150,148,62);*/
            /*background: linear-gradient(32deg, rgba(150,148,62,1) 0%, rgba(92,90,156,1) 50%, rgba(48,128,46,1) 100%) fixed;*/
            background: linear-gradient(140deg, #bd5f42 0, #b65646 8.33%, #ab4c47 16.67%, #9b4146 25%, #883642 33.33%, #722b3c 41.67%, #591f32 50%, #411427 58.33%, #2d0b1d 66.67%, #1f0013 75%, #110007 83.33%, #000000 91.67%, #000000 100%) fixed;
        }

        .navNav, .tab-content{
            background-color:  rgba(255, 255, 255, 0.5);
            border-radius: 5px;
        }
    </style>
</head>
<body>

<div class="d-flex align-items-start p-5">

    <div class="nav col-3  text-start nav-pills me-3 p-5 navNav d-flex flex-column justify-content-start" id="v-pills-tab" role="tablist" aria-orientation="vertical">

        <button class="nav-link active mb-2 text-black" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Налаштування</button>

        <button class="nav-link mb-2 text-black" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile users</button>

        <p class="text-center">
            <a class="btn text-primary dropdown-toggle text-black" data-bs-toggle="collapse" href="#collapseStatus" role="button" aria-expanded="false" aria-controls="collapseExample">
                Status
            </a>
        </p>

        <div class="collapse text-start" id="collapseStatus">
            <div class="card card-body ml-0 text-start">
                <button class="nav-link mb-2 text-black" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" >Show all Status</button>
                <button class="nav-link mb-2 text-black" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Create Status</button>
                <button class="nav-link mb-2 text-black" id="v-pills-updateStatus-tab" data-bs-toggle="pill" data-bs-target="#v-pills-updateStatus" type="button" role="tab" aria-controls="v-pills-updateStatus" aria-selected="false">Update Status</button>
                <button class="nav-link mb-2 text-black" id="v-pills-deleteStatus-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deleteStatus" type="button" role="tab" aria-controls="v-pills-deleteStatus" aria-selected="false">Delete Status</button>
            </div>
        </div>

        <p class="text-center">
            <a class="btn text-primary dropdown-toggle text-black" data-bs-toggle="collapse" href="#collapseComment" role="button" aria-expanded="false" aria-controls="collapseExample">
                Comment
            </a>
        </p>
        <div class="collapse text-start" id="collapseComment">
            <div class="card card-body ml-0 text-start">
                <button class="nav-link mb-2 text-black" id="v-pills-viewComment-tab" data-bs-toggle="pill" data-bs-target="#v-pills-viewComment" type="button" role="tab" aria-controls="v-pills-viewComment" aria-selected="false" >Show all Comment</button>
                <button class="nav-link mb-2 text-black" id="v-pills-createComment-tab" data-bs-toggle="pill" data-bs-target="#v-pills-createComment" type="button" role="tab" aria-controls="v-pills-createComment" aria-selected="false">Create Comment</button>
                <button class="nav-link mb-2 text-black" id="v-pills-updateComment-tab" data-bs-toggle="pill" data-bs-target="#v-pills-updateComment" type="button" role="tab" aria-controls="v-pills-updateComment" aria-selected="false">Update Comment</button>
                <button class="nav-link mb-2 text-black" id="v-pills-deleteComment-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deleteComment" type="button" role="tab" aria-controls="v-pills-deleteComment" aria-selected="false">Delete Status</button>
            </div>
        </div>

        <p class="text-center ">
            <a class="btn text-primary dropdown-toggle text-black" data-bs-toggle="collapse" href="#collapseTask" role="button" aria-expanded="false" aria-controls="collapseExample">
                Tasks
            </a>
        </p>
        <div class="collapse text-start" id="collapseTask">
            <div class="card card-body ml-0 text-start">
                <button class="nav-link mb-2 text-black" id="v-pills-viewTask-tab" data-bs-toggle="pill" data-bs-target="#v-pills-viewTask" type="button" role="tab" aria-controls="v-pills-viewTask" aria-selected="false" >Show all Task</button>
                <button class="nav-link mb-2 text-black" id="v-pills-createTask-tab" data-bs-toggle="pill" data-bs-target="#v-pills-createTask" type="button" role="tab" aria-controls="v-pills-createTask" aria-selected="false">Create Task</button>
                <button class="nav-link mb-2 text-black" id="v-pills-updateTask-tab" data-bs-toggle="pill" data-bs-target="#v-pills-updateTask" type="button" role="tab" aria-controls="v-pills-updateTask" aria-selected="false">Update Task</button>
                <button class="nav-link mb-2 text-black" id="v-pills-deleteTask-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deleteTask" type="button" role="tab" aria-controls="v-pills-deleteTask" aria-selected="false">Delete Task</button>
            </div>
        </div>

        <p class="text-center ">
            <a class="btn text-primary dropdown-toggle text-black" data-bs-toggle="collapse" href="#collapseProject" role="button" aria-expanded="false" aria-controls="collapseExample">
                Projects
            </a>
        </p>
        <div class="collapse text-start" id="collapseProject">
            <div class="card card-body ml-0 text-start">
                <button class="nav-link mb-2 text-black" id="v-pills-viewProject-tab" data-bs-toggle="pill" data-bs-target="#v-pills-viewProject" type="button" role="tab" aria-controls="v-pills-viewProject" aria-selected="false" >Show all Projects</button>
                <button class="nav-link mb-2 text-black" id="v-pills-createProject-tab" data-bs-toggle="pill" data-bs-target="#v-pills-createProject" type="button" role="tab" aria-controls="v-pills-createProject" aria-selected="false">Create Project</button>
                <button class="nav-link mb-2 text-black" id="v-pills-updateProject-tab" data-bs-toggle="pill" data-bs-target="#v-pills-updateProject" type="button" role="tab" aria-controls="v-pills-updateProject" aria-selected="false">Update Project</button>
                <button class="nav-link mb-2 text-black" id="v-pills-deleteProject-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deleteProject" type="button" role="tab" aria-controls="v-pills-deleteProject" aria-selected="false">Delete Project</button>
            </div>
        </div>

{{--        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>--}}

    </div>
    <div class="tab-content col-9 p-5 " id="v-pills-tabContent">

        <div class="tab-pane fade show active"  id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <h3>Основний домен</h3>
            </div>
            <pre>
                    http://127.0.0.1:8000/api
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-success">GET</button> Запит всіх користвувачів
            </div>
            <pre>
                http://127.0.0.1:8000/api/users
            </pre>
            <pre>
                {
                    "response": {
                        "success": true,
                        "users": {
                            "data": [
                                {
                                    "id": 1,
                                    "name": "admin",
                                    "email": "admin@softui.com",
                                    "phone": null,
                                    "location": null,
                                    "about_me": null,
                                    "created_at": "2023-06-05T17:31:00.000000Z",
                                    "updated_at": "2023-06-05T17:31:00.000000Z"
                                }
                            ]
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-success">GET</button> Запит всіх статусів
            </div>
            <pre>
                http://127.0.0.1:8000/api/status
            </pre>
            <pre>
                {
                    "response": {
                        "success": true,
                        "status": {
                            "data": [
                                {
                                    "id": 1,
                                    "name": "TO DO",
                                    "is_active": 1,
                                    "created_at": "2023-06-12T06:16:06.000000Z",
                                    "updated_at": "2023-06-12T06:16:06.000000Z"
                                },
                                {
                                    "id": 2,
                                    "name": "TESTING",
                                    "is_active": 1,
                                    "created_at": "2023-06-12T06:16:22.000000Z",
                                    "updated_at": "2023-06-12T06:16:22.000000Z"
                                },
                                {
                                    "id": 3,
                                    "name": "WORKING",
                                    "is_active": 1,
                                    "created_at": "2023-06-12T06:16:36.000000Z",
                                    "updated_at": "2023-06-12T06:16:36.000000Z"
                                }
                            ]
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит створення статусів
            </div>
            <pre>
                http://127.0.0.1:8000/api/status
            </pre>
           <p class="alert alert-info d-block w-100">Набір параметрів</p>
            <pre>
                {
                    "name": "Procassing",
                    "id_active": 1
                }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "status": {
                            "data": {
                                "name": "Procassing",
                                "is_active": 1,
                                "updated_at": "2023-06-12T17:41:10.000000Z",
                                "created_at": "2023-06-12T17:41:10.000000Z",
                                "id": 6
                            }
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-updateStatus" role="tabpanel" aria-labelledby="v-pills-updateStatus-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на редагування статусів
            </div>
            <pre>
                http://127.0.0.1:8000/api/status?id={number ID}
            </pre>
           <p class="alert alert-info d-block w-100">Набір параметрів</p>
            <pre>
                {
                    "name": "Formate",
                    "is_active": 1
                }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "status": {
                            "data": {
                                "id": 6,
                                "name": "Formate",
                                "is_active": 1,
                                "created_at": "2023-06-12T17:41:10.000000Z",
                                "updated_at": "2023-06-15T00:19:55.000000Z"
                            }
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-deleteStatus" role="tabpanel" aria-labelledby="v-pills-deleteStatus-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на редагування статусів
            </div>
            <pre>
                http://127.0.0.1:8000/api/status?<strong>deleteId</strong>={number ID}
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                "delete status"
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-viewComment" role="tabpanel" aria-labelledby="v-pills-viewComment-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-success">GET</button> Запит на вивід всіх коментарів
            </div>
            <pre>
                http://127.0.0.1:8000/api/comment
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "comment": {
                            "data": [
                                {
                                    "id": 1,
                                    "description": "Було б круто почати вже працювати e CJas]",
                                    "user_id": 1,
                                    "created_at": "2023-06-10T23:09:45.000000Z",
                                    "updated_at": "2023-06-12T03:01:25.000000Z"
                                },
                                {
                                    "id": 2,
                                    "description": "ТЗ прочитав, перехрестився, але всерівно нічого не поняв",
                                    "user_id": 1,
                                    "created_at": "2023-06-10T23:11:09.000000Z",
                                    "updated_at": "2023-06-10T23:11:09.000000Z"
                                },
                                {
                                    "id": 4,
                                    "description": "zmfbnopfnbl;cnbv ; esdxo[mnvoa n02j-94j e0opr",
                                    "user_id": 1,
                                    "created_at": "2023-06-14T08:42:08.000000Z",
                                    "updated_at": "2023-06-14T08:42:22.000000Z"
                                }
                            ]
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-createComment" role="tabpanel" aria-labelledby="v-pills-createComment-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на редагування статусів
            </div>
            <pre>
                http://127.0.0.1:8000/api/comment
            </pre>
            <p class="alert alert-info d-block w-100">Набір параметрів</p>
            <pre>
                {
                    "description": "Було б круто почати вже працювати5646546545654651",
                    "user_id": 1
                }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "comment": {
                            "data": {
                                "description": "Було б круто почати вже працювати5646546545654651",
                                "user_id": 1,
                                "updated_at": "2023-06-15T01:59:30.000000Z",
                                "created_at": "2023-06-15T01:59:30.000000Z",
                                "id": 5
                            }
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-updateComment" role="tabpanel" aria-labelledby="v-pills-updateComment-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на редагування статусів
            </div>
            <pre>
                http://127.0.0.1:8000/api/comment?id={ number id }
            </pre>
            <p class="alert alert-info d-block w-100">Набір параметрів</p>
            <pre>
                {
                    "description": " працювати5646546545654651",
                    "user_id": 1
                }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "comment": {
                            "data": {
                                "id": 5,
                                "description": "працювати5646546545654651",
                                "user_id": 1,
                                "created_at": "2023-06-15T01:59:30.000000Z",
                                "updated_at": "2023-06-15T02:24:44.000000Z"
                            }
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-deleteComment" role="tabpanel" aria-labelledby="v-pills-deleteComment-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на редагування статусів
            </div>
            <pre>
                http://127.0.0.1:8000/api/comment?deleteId={ number id }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                "delete comment"
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-viewTask" role="tabpanel" aria-labelledby="v-pills-viewTask-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-success">GET</button> Запит на виведення тасків
            </div>
            <pre>
                http://127.0.0.1:8000/api/task
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "task": {
                            "data": [
                                {
                                    "id": 1,
                                    "name": "Прийми те шо ти нічого не знаєш",
                                    "user_id": 1,
                                    "status_id": 3,
                                    "created_at": "2023-06-10T23:07:14.000000Z",
                                    "updated_at": "2023-06-10T23:07:14.000000Z"
                                },
                                {
                                    "id": 2,
                                    "name": "Перечитати ТЗ і перехреститись",
                                    "user_id": 1,
                                    "status_id": 2,
                                    "created_at": "2023-06-11T00:48:47.000000Z",
                                    "updated_at": "2023-06-11T00:48:47.000000Z"
                                }
                            ]
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-createTask" role="tabpanel" aria-labelledby="v-pills-createTask-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на створення тасків
            </div>
            <pre>
                http://127.0.0.1:8000/api/task
            </pre>
            <p class="alert alert-info d-block w-100">Набір параметрів</p>
            <pre>
                {
                    "name": "Зробити дз і відпочити",
                    "user_id": 1,
                    "status_id": 2
                }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "task": {
                            "data": {
                                "name": "Зробити дз і відпочити",
                                "user_id": 1,
                                "status_id": 2,
                                "updated_at": "2023-06-15T03:01:41.000000Z",
                                "created_at": "2023-06-15T03:01:41.000000Z",
                                "id": 5
                            }
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-updateTask" role="tabpanel" aria-labelledby="v-pills-updateTask-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на редагування тасків
            </div>
            <pre>
                http://127.0.0.1:8000/api/task?id= { number id }
            </pre>
            <p class="alert alert-info d-block w-100">Набір параметрів</p>
            <pre>
                {
                    "name": "Зробити дз і відпочити, і не забувати про їжу",
                    "user_id": 1,
                    "status_id": 2
                }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "task": {
                            "data": {
                                "id": 5,
                                "name": "Зробити дз і відпочити, і не забувати про їжу",
                                "user_id": 1,
                                "status_id": 2,
                                "created_at": "2023-06-15T03:01:41.000000Z",
                                "updated_at": "2023-06-15T03:09:40.000000Z"
                            }
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-deleteTask" role="tabpanel" aria-labelledby="v-pills-deleteTask-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на видалення тасків
            </div>
            <pre>
                http://127.0.0.1:8000/api/task?deleteId= { number id }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                "delete task"
            </pre>
        </div>






        <div class="tab-pane fade" id="v-pills-viewProject" role="tabpanel" aria-labelledby="v-pills-viewProject-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-success">GET</button> Запит на виведення проектів
            </div>
            <pre>
                http://127.0.0.1:8000/api/project
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "statues": {
                            "data": [
                                {
                                    "id": 1,
                                    "name": "Jira",
                                    "description": "Робимо доки не впадем, а зп на пенсії потратим)",
                                    "user_id": 1,
                                    "created_at": "2023-07-03T13:20:04.000000Z",
                                    "updated_at": "2023-07-03T13:20:04.000000Z"
                                },
                                {
                                    "id": 2,
                                    "name": "Блог (Перший проект лара)",
                                    "description": "Не забуваємо про перший проект, бо за ж*пу потім кусати буде!) ",
                                    "user_id": 1,
                                    "created_at": "2023-07-03T13:22:16.000000Z",
                                    "updated_at": "2023-07-03T13:22:16.000000Z"
                                },
                                {
                                    "id": 3,
                                    "name": "OpenCard",
                                    "description": "ХЗ шо тут буде, скоро розкажуть",
                                    "user_id": 1,
                                    "created_at": "2023-07-03T13:22:16.000000Z",
                                    "updated_at": "2023-07-03T13:22:16.000000Z"
                                },
                                {
                                    "id": 4,
                                    "name": "Bla-Bla-Bla-Bla-Bla-Bla-Bla",
                                    "description": "Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla",
                                    "user_id": 1,
                                    "created_at": "2023-07-03T14:42:35.000000Z",
                                    "updated_at": "2023-07-03T14:42:35.000000Z"
                                }
                            ]
                        }
                    }
                }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-createProject" role="tabpanel" aria-labelledby="v-pills-createProject-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на створення проектів
            </div>
            <pre>
                http://127.0.0.1:8000/api/project
            </pre>
            <p class="alert alert-info d-block w-100">Набір параметрів</p>
            <pre>
                {
                    "name": "TestProj",
                    "description": "TestProj Postman",
                    "user_id": 1
                }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "statues": {
                            "data": {
                                   "id": 5,
                                   "name": "TestProj",
                                   "description": "TestProj Postman",
                                   "user_id": 1,
                                   "created_at": "2023-07-03T13:20:04.000000Z",
                                   "updated_at": "2023-07-03T13:20:04.000000Z"
                               }
                            }
                        }
                    }

            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-updateProject" role="tabpanel" aria-labelledby="v-pills-updateProject-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на редагування проектів
            </div>
            <pre>
                http://127.0.0.1:8000/api/project?id= { number id }
            </pre>
            <p class="alert alert-info d-block w-100">Набір параметрів <br> <strong>user_id</strong> не передається, так як в БД це поле має значення за замовчуванням 1. А під новером 1 в юзерах юзер із роллю admin, бо тільки адмін має право створити проєкт.</p>
            <pre>
                {
                    "name": "TestProj_vjpdvp;fd",
                    "description": "TestProj Postman sdsd",
                }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                {
                    "response": {
                        "success": true,
                        "statues": {
                            "data": {
                                   "id": 5,
                                   "name": "TestProj_vjpdvp;fd",
                                   "description": "TestProj Postman sdsd",
                                   "user_id": 1,
                                   "created_at": "2023-07-03T13:20:04.000000Z",
                                   "updated_at": "2023-07-03T13:20:04.000000Z"
                               }
                            }
                        }
                    }
            </pre>
        </div>

        <div class="tab-pane fade" id="v-pills-deleteProject" role="tabpanel" aria-labelledby="v-pills-deleteProject-tab" tabindex="0">
            <div class="alert alert-info d-block w-100" style="display: block; width: 100%" role="alert">
                <button type="button" class="btn btn-warning">POST</button> Запит на видалення тасків
            </div>
            <pre>
                http://127.0.0.1:8000/api/project?deleteId= { number id }
            </pre>
            <p class="alert alert-info d-block w-100">Response</p>
            <pre>
                'Project is delete'
            </pre>
        </div>

    </div>
</div>




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>
</html>

<?php

use App\Http\Controllers\AssignetController;
use App\Http\Controllers\ChangePasswordController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InfoUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SessionsController;
use App\Http\Controllers\TaskCommentController;
use App\Http\Controllers\TaskUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\CommentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('apidoca', function () {
    return view('apiDoca.apidoca');
})->name('apidoca');

Route::group(['middleware' => 'auth'], function () {

    Route::get('/', [HomeController::class, 'home']);
	Route::get('dashboard', function () {
		return view('dashboard');
	})->name('dashboard');


    Route::get('billing', function () {
		return view('billing');
	})->name('billing');

    Route::get('profile', function () {
		return view('profile');
	})->name('profile');

	Route::get('rtl', function () {
		return view('rtl');
	})->name('rtl');

	Route::get('user-management', function () {
		return view('laravel-examples/user-management');
	})->name('user-management');

//	Route::get('tables', function () {
//		return view('tables');
//	})->name('tables');

    Route::get('projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('projects/create', [ProjectController::class, 'create'])->name('projects.create');
    Route::post('projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('projects/{id}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
    Route::put('projects/{id}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('projects/{id}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    Route::get('projects/{id}/tasks', [ProjectController::class, 'ProjectController@getTasks'])->name('projects.tasks');
    Route::get('projects/{id}/comments', [ProjectController::class, 'ProjectController@getComments'])->name('projects.comments');


    Route::get('tasks', [TaskController::class, 'index'])->name('tasks.index');
    Route::get('tasks/create', [TaskController::class, 'create'])->name('tasks.create');
    Route::post('tasks', [TaskController::class, 'store'])->name('tasks.store');
    Route::get('tasks/{id}', [TaskController::class, 'show'])->name('tasks.show');
    Route::get('tasks/{id}/edit', [TaskController::class, 'edit'])->name('tasks.edit');
    Route::put('tasks/{id}', [TaskController::class, 'update'])->name('tasks.update');
    Route::delete('tasks/{id}', [TaskController::class, 'destroy'])->name('tasks.destroy');
    Route::get('/tasks/{id}/comments', 'TaskController@getComments')->name('tasks.comments');


    Route::get('taskUser', [AssignetController::class, 'index'])->name('taskUser.index');
    Route::get('taskUser/create', [AssignetController::class, 'create'])->name('taskUser.create');
    Route::post('taskUser', [AssignetController::class, 'store'])->name('taskUser.store');
    Route::get('taskUser/{id}/edit', [AssignetController::class, 'edit'])->name('taskUser.edit');
    Route::put('taskUser/{id}', [AssignetController::class, 'update'])->name('taskUser.update');



    Route::get('user', [ProfileController::class, 'index'])->name('user.index');
    Route::get('/user/{id}/edit', [ProfileController::class, 'edit'])->name('user.edit');
    Route::put('/user/{id}', [ProfileController::class, 'update'])->name('user.update');
    Route::delete('user/{id}', [ProfileController::class, 'destroy'])->name('user.destroy');
//    Route::get('/user/{id}/photo', 'ProfileController@getAddPhoto')->name('user.photo');
//    Route::post('/user/{id}', 'ProfileController@upload')->name('user.upload');



    Route::get('status', [StatusController::class, 'index'])->name('status.index');
    Route::get('status/create', [StatusController::class, 'create'])->name('status.create');
    Route::post('status', [StatusController::class, 'store'])->name('status.store');
    Route::get('status/{id}', [StatusController::class, 'show'])->name('status.show');
    Route::get('status/{id}/edit', [StatusController::class, 'edit'])->name('status.edit');
    Route::put('status/{id}', [StatusController::class, 'update'])->name('status.update');
    Route::delete('status/{id}', [StatusController::class, 'destroy'])->name('status.destroy');



    Route::get('comments', [CommentController::class, 'index'])->name('comments.index');
    Route::get('comments/create', [CommentController::class, 'create'])->name('comments.create');
    Route::post('comments', [CommentController::class, 'store'])->name('comments.store');
    Route::get('comments/{id}', [CommentController::class, 'show'])->name('comments.show');
    Route::get('comments/{id}/edit', [CommentController::class, 'edit'])->name('comments.edit');
    Route::put('comments/{id}', [CommentController::class, 'update'])->name('comments.update');
    Route::delete('comments/{id}', [CommentController::class, 'destroy'])->name('comments.destroy');


//    Route::get('comments/query', [CommentController::class, 'query'])->name('comments.query');     // тре
// протестити живий пошук


    Route::get('roles', [RoleController::class, 'index'])->name('roles.index');
    Route::post('roles', [RoleController::class, 'store'])->name('roles.store');
    Route::put('roles/{id}', [RoleController::class, 'update'])->name('roles.update');

//    Route::get('taskUser', [RoleController::class, 'index'])->name('taskUser.index');




    Route::get('virtual-reality', function () {
		return view('virtual-reality');
	})->name('virtual-reality');

    Route::get('static-sign-in', function () {
		return view('static-sign-in');
	})->name('sign-in');

    Route::get('static-sign-up', function () {
		return view('static-sign-up');
	})->name('sign-up');

    Route::get('/logout', [SessionsController::class, 'destroy']);
	Route::get('/user-profile', [InfoUserController::class, 'create']);
	Route::post('/user-profile', [InfoUserController::class, 'store']);
    Route::get('/login', function () {
		return view('dashboard');
	})->name('sign-up');
});



Route::group(['middleware' => 'guest'], function () {
    Route::get('/register', [RegisterController::class, 'create']);
    Route::post('/register', [RegisterController::class, 'store']);
    Route::get('/login', [SessionsController::class, 'create']);
    Route::post('/session', [SessionsController::class, 'store']);
	Route::get('/login/forgot-password', [ResetController::class, 'create']);
	Route::post('/forgot-password', [ResetController::class, 'sendEmail']);
	Route::get('/reset-password/{token}', [ResetController::class, 'resetPass'])->name('password.reset');
	Route::post('/reset-password', [ChangePasswordController::class, 'changePassword'])->name('password.update');

});

Route::get('/login', function () {
    return view('session/login-session');
})->name('login');

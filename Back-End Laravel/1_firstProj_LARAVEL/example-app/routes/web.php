<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryAdminController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PostAdminController;
use App\Http\Controllers\UserAdminController;
use App\Http\Controllers\Practic\Table1Controller;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/admin', function () {
    return view('admin');
});
Route::get('/posts', function () {
    return view('posts');
});
Route::get('/category', function () {
    return view('category');
});
Route::get('/about-us', function () {
    return view('aboutUs');
});
Route::get('/homeAdmin', function () {
    return view('homeAdmin');
});

Route::get('/__categoryAdmin', [CategoryAdminController::class, 'index'])->name('__categoryAdmin.index');
Route::get('/__categoryAdmin/create', [CategoryAdminController::class, 'create'])->name('__categoryAdmin.create');
Route::post('/__categoryAdmin', [CategoryAdminController::class, 'store'])->name('__categoryAdmin.store');
//Route::get('/__categoryAdmin/{id}', [CategoryAdminController::class, 'show'])->name('__categoryAdmin.show');
Route::get('/__categoryAdmin/{id}/edit', [CategoryAdminController::class, 'edit'])->name('__categoryAdmin.edit');
Route::put('/__categoryAdmin/{id}/update', [CategoryAdminController::class, 'update'])->name('__categoryAdmin.update');
Route::delete('/__categoryAdmin/{id}/destroy', [CategoryAdminController::class, 'destroy'])->name('__categoryAdmin.destroy');


Route::get('/__roleAdmin', [RoleController::class, 'index'])->name('role.index');
//Route::get('/__roleAdmin/{id}', [RoleController::class, 'show'])->name('role.show');
Route::get('/__roleAdmin/{id}/edit', [RoleController::class, 'edit'])->name('role.edit');
Route::put('/__roleAdmin/{id}/', [RoleController::class, 'update'])->name('role.update');


Route::get('/__postsAdmin', [PostAdminController::class, 'index'])->name('post.index');
//Route::get('/__postsAdmin/{id}', [PostAdminController::class, 'show'])->name('post.show');
Route::get('/__postsAdmin/{id}/edit', [PostAdminController::class, 'edit'])->name('post.edit');
Route::put('/__postsAdmin/{id}', [PostAdminController::class, 'update'])->name('post.update');
Route::delete('/__postsAdmin/{id}', [PostAdminController::class, 'destroy'])->name('post.destroy');


Route::get('/usersAdmin', [UserAdminController::class, 'index'])->name('user.index');
Route::get('/usersAdmin/{id}/edit', [UserAdminController::class, 'edit'])->name('user.edit');
Route::put('/usersAdmin/{id}', [UserAdminController::class, 'update'])->name('user.update');
Route::delete('/usersAdmin/{id}', [UserAdminController::class, 'destroy'])->name('user.destroy');




Route::get('/table1', [Table1Controller::class, 'index'])->name('table1.index');
Route::get('/table1/create', [Table1Controller::class, 'create'])->name('table1.create');
Route::post('/table1', [Table1Controller::class, 'store'])->name('table1.store');
//Route::get('/table1{id}', [Table1Controller::class, 'show'])->name('table1.show');
Route::get('/table1/{id}/edit', [Table1Controller::class, 'edit'])->name('table1.edit');
Route::put('/table1/{id}', [Table1Controller::class, 'update'])->name('table1.update');
Route::delete('/table1/{id}', [Table1Controller::class, 'destroy'])->name('table1.destroy');











Auth::routes(); //Все що нижче цього рядочка ввідкривається
                // тільки для авторизованих користувачів

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Auth::routes();
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

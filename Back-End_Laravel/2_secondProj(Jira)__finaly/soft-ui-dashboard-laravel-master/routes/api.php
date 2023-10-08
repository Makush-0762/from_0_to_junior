<?php

use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\StatusController;
use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\AssignetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/users', [ProfileController::class, 'index']);
Route::apiResource('/status', StatusController::class);
Route::apiResource('/comment', CommentController::class);
Route::apiResource('/task', TaskController::class);
Route::apiResource('/assigneds', AssignetController::class);
Route::apiResource('/project', ProjectController::class);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

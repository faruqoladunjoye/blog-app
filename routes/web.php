<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\UserCommentController;
use App\Http\Controllers\ContactUsFormController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Frontend\RatingController;
use App\Http\Controllers\Frontend\CommentController;
use App\Http\Controllers\Frontend\FrontendController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [FrontendController::class, 'index']);
Route::get('blogs', [FrontendController::class, 'blogs']);
Route::get('blog-post/{slug}', [FrontendController::class, 'individualBlog']);
Route::get('/contact-form', [ContactController::class, 'contact']);
Route::post('/send-message', [ContactController::class, 'sendEmail'])->name(
    'contact.send'
);
// Route::get('contact', [FrontendController::class, 'contact']);

Auth::routes();

Route::get('/home', [
    App\Http\Controllers\HomeController::class,
    'index',
])->name('home');

Route::middleware(['auth'])->group(function () {
    Route::post('add-rating', [RatingController::class, 'add']);
    Route::post('add-comment', [CommentController::class, 'create']);
    Route::get('delete-comment/{id}', [CommentController::class, 'destroy']);
});

Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/dashboard', [PostController::class, 'index']);
    Route::get('category', [CategoryController::class, 'index']);
    Route::get('add-category', [CategoryController::class, 'add']);
    Route::post('insert-category', [CategoryController::class, 'insert']);
    Route::get('edit-category/{id}', [CategoryController::class, 'edit']);
    Route::put('update-category/{id}', [CategoryController::class, 'update']);
    Route::delete('delete-category/{id}', [
        CategoryController::class,
        'destroy',
    ]);

    Route::get('create-post', [PostController::class, 'create']);
    Route::post('insert-post', [PostController::class, 'insert']);
    Route::get('edit/{id}', [PostController::class, 'edit']);
    Route::put('update/{id}', [PostController::class, 'update']);
    Route::delete('delete/{id}', [PostController::class, 'destroy']);
    Route::get('users-comment', [UserCommentController::class, 'show']);
    Route::delete('delete-usercomment/{id}', [
        UserCommentController::class,
        'destroy',
    ]);
});
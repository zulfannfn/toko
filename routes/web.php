<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProdukAdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Models\Admin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/product', [ProdukController::class, 'index'])->name('product');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


Route::get('/admin/product', [ProdukAdminController::class, 'index'])->name('admin.product');

Route::get('/admin/dashboard', function () {
    return inertia::render('Admin/Dashboard');
})->middleware(['auth:admin', 'verified'])->name('admin/dashboard');

Route::middleware('auth:admin')->group(function () {
    Route::get('/admin/profile', [AdminController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('/admin/profile', [AdminController::class, 'update'])->name('admin.profile.update');
    Route::delete('/admin/profile', [AdminController::class, 'destroy'])->name('admin.profile.destroy');
});

require __DIR__ . '/adminauth.php';

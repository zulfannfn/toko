<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProdukAdminController;
use App\Http\Controllers\PelangganAdminController;
use App\Http\Controllers\PenjualanAdminController;
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
//     return Inertia::render('home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/', function () {
//     return Inertia::render('home')->with([
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => app()->version(),
//         'phpVersion' => phpversion(),
//     ]);
// })->name('home')->uses([HomeController::class, 'index']);

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/product', [ProdukController::class, 'index'])->name('product');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


Route::post('/admin/product', [ProdukAdminController::class, 'store'])->middleware(['auth:admin', 'verified']);
Route::get('/admin/product', [ProdukAdminController::class, 'show'])->name('admin.product');

Route::post('/admin/pelanggan', [PelangganAdminController::class, 'store'])->middleware(['auth:admin', 'verified']);
Route::get('/admin/pelanggan', [PelangganAdminController::class, 'show'])->name('admin.pelanggan');

Route::post('/admin/penjualan', [PenjualanAdminController::class, 'store'])->middleware(['auth:admin', 'verified']);
Route::get('/admin/penjualan', [PenjualanAdminController::class, 'show'])->name('admin.penjualan');

Route::get('/admin/dashboard', function () {
    return inertia::render('Admin/Dashboard');
})->middleware(['auth:admin', 'verified'])->name('admin/dashboard');

Route::middleware('auth:admin')->group(function () {
    Route::get('/admin/profile', [AdminController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('/admin/profile', [AdminController::class, 'update'])->name('admin.profile.update');
    Route::delete('/admin/profile', [AdminController::class, 'destroy'])->name('admin.profile.destroy');
});

require __DIR__ . '/adminauth.php';

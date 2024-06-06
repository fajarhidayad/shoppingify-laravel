<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductController::class, 'index'])->name('index');
Route::post('/items/create', [ProductController::class, 'store'])->name('index.create');
Route::get('/items/{id}', [ProductController::class, 'show'])->name('index.detail');

Route::get('/history', function () {
    return Inertia::render('History');
});

Route::get('/statistics', function () {
    return Inertia::render('Statistics');
});

// Shorter code & much simpler same as above
// Route::inertia('/', 'Home');

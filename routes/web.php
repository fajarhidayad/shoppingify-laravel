<?php

use App\Http\Controllers\ItemListController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductController::class, 'index'])->name('index');
Route::post('/items/create', [ProductController::class, 'store'])->name('items.create');
Route::delete('/items/{id}', [ProductController::class, 'delete'])->name('items.delete');

Route::post('/item-list', [ItemListController::class, 'store'])->name('item_list.create');

Route::get('/history', function () {
    return Inertia::render('History');
});

Route::get('/statistics', function () {
    return Inertia::render('Statistics');
});

// Shorter code & much simpler same as above
// Route::inertia('/', 'Home');

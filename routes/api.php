<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroSlideController;

Route::post('/hero-slides', [HeroSlideController::class, 'store']);
Route::get('/hero-slides', [HeroSlideController::class, 'index']);

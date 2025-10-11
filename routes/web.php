<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\HomeController;

use App\Http\Controllers\Admin\HeroSlideController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/admin/edit-home', function () {
    return Inertia::render('Admin/EditHome');
    })->name('editHome');

    Route::get('admin/edit-about', function () {
        return Inertia::render('Admin/EditAbout');
    })->name('editAbout');

});

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about'); // ✅ new route for your About page

Route::get('/room', function () {
    return Inertia::render('room');
})->name('room'); // ✅ new route for your Room page


Route::get('/services', function () {
    return Inertia::render('services');
})->name('services'); // ✅ Add this here, outside auth middleware


Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog'); // ✅ new route for your Blog page


Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact'); // ✅ new route for your Contact page


//***Activities */
Route::get('spa', function () {
    return Inertia::render('spa');
})->name('spa'); // ✅ new route for your Spa page

Route::get('gym', function () {
    return Inertia::render('gym');
})->name('gym'); // ✅ new route for your Gym page

Route::get('diving', function () {
    return Inertia::render('diving');
})->name('diving'); // ✅ new route for your Diving page


//***Dining */
Route::get('dining', function () {
    return Inertia::render('dining');
})->name('dining'); // ✅ new route for your Dining page

Route::get('bar', function () {
    return Inertia::render('bar');
})->name('bar'); // ✅ new route for your Bar page

Route::get('restaurant', function () {
    return Inertia::render('restaurant');
})->name('restaurant'); // ✅ new route for your Restaurant page

//******Room     */
Route::get('honeymoon', function () {
    return Inertia::render('hotelrooms/honeymoon');
})->name('honeymoon');

Route::get('suite', function () {
    return Inertia::render('hotelrooms/suite');
})->name('suite');

Route::get('deluxe', function () {
    return Inertia::render('hotelrooms/deluxe');
})->name('deluxe');

Route::get('family_room_dolphin', function () {
    return Inertia::render('hotelrooms/family_room_dolphin');
})->name('family_room_dolphin');

Route::get('family_room_octopus', function () {
    return Inertia::render('hotelrooms/family_room_octopus');
})->name('family_room_octopus');

Route::get('garden_rooms', function () {
    return Inertia::render('hotelrooms/garden_rooms');
})->name('garden_rooms');

Route::get('deluxe_rooms', function () {
    return Inertia::render('hotelrooms/deluxe_rooms');
})->name('deluxe_rooms');


// Route::get('/hero-slides', [HeroSlideController::class, 'index']);
// Route::post('/hero-slides', [HeroSlideController::class, 'store']);
// Route::put('/hero-slides/{heroSlide}', [HeroSlideController::class, 'update']);
// Route::delete('/hero-slides/{heroSlide}', [HeroSlideController::class, 'destroy']);





require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

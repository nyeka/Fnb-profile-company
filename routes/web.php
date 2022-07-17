<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
$url = asset('./public/assets');
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

Route::get('/', function () {

    $data = [
        [
           "title" => "Tips For Choosing Organic fresh Vegetables",
           "desc" => "Lorem Ipsum sidulur amet, consectur adipiscing elit",
           "img" => "assets/makan.png",
           "arrow" => "assets/left.png",
           "date" => "September, 11 2021",
           "line" => "assets/garis.png", 
        ],
        [
           "title" => "Tips For Choosing Organic fresh Vegetables",
           "desc" => "Lorem Ipsum sidulur amet, consectur adipiscing elit",
           "img" => "assets/cabe.png",
           "arrow" => "assets/left.png",
           "date" => "September, 11 2021",
           "line" => "assets/garis.png", 
        ],
        [
           "title" => "Tips For Choosing Organic fresh Vegetables",
           "desc" => "Lorem Ipsum sidulur amet, consectur adipiscing elit",
           "img" => "assets/buncis.png",
           "arrow" => "assets/left.png",
           "date" => "September, 11 2021",
           "line" => "assets/garis.png", 
        ],
    ];

    $section_data = [
        [
            "img" => "assets/eat.png",
            "title" => "Premium Quality",
            "desc" => "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas quae assumenda tempora perferendis"
        ],
        [
            "img" => "assets/apple.png",
            "title" => "Fresh Fruit",
            "desc" => "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas quae assumenda tempora perferendis"
        ],
        [
            "img" => "assets/coffe.png",
            "title" => "Seasonal Vegetables",
            "desc" => "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas quae assumenda tempora perferendis"
        ],

    ];

    return Inertia::render('App', [
        'title' => 'Home',
        "data" => $data,
        "section" => $section_data,
        "lin" => "assets/white.png", 
        "fb" => "assets/fb.png",
        "ig" => "assets/ig.png",
        "in" => "assets/in.png",

    ]);
});





Route::any('/{any}', function () {
    return Inertia::render('Any', [
        'title' => 'Wrong'
    ]);
})->where('any', '.*');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// require __DIR__.'/auth.php';

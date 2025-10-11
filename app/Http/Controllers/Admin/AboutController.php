<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AboutController extends Controller
{
            public function edit()
    {
        return Inertia::render('Admin/AboutHome');
    }
}

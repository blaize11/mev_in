<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HeroSlide;

class HeroSlideController extends Controller
{
    public function index()
    {
        return response()->json(HeroSlide::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|string',
        ]);

        $slide = HeroSlide::create($validated);

        return response()->json([
            'message' => 'Hero slide created successfully!',
            'data' => $slide,
        ]);
    }
}

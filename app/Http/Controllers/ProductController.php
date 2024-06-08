<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::select('categories.name as category_name', 'products.*')
            ->join('categories', 'products.category_id', '=', 'categories.id')
            ->orderBy('categories.name')
            ->orderBy('products.name')
            ->get()
            ->groupBy('category_name');
        return Inertia::render('Items', ['products' => $products]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'note' => 'nullable|string',
            'image' => 'nullable|string',
            'category_name' => 'required|string|max:50'
        ]);

        $category = Category::firstOrCreate(['name' => $request->input('category_name')]);

        Product::create([
            'name' => $request->input('name'),
            'note' => $request->input('note'),
            'image' => $request->input('image'),
            'category_id' => $category->id,
        ]);
    }

    public function delete($id)
    {
        Product::where('id', $id)->forceDelete();
        return to_route('index');
    }
}

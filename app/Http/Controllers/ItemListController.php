<?php

namespace App\Http\Controllers;

use App\Models\ItemList;
use Illuminate\Http\Request;

class ItemListController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['itemListName' => 'required|string']);

        ItemList::create(['name' => $request->itemListName]);

        return to_route('index');
    }
}

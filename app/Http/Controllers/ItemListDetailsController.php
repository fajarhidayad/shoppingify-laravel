<?php

namespace App\Http\Controllers;

use App\Models\ItemListDetail;
use Illuminate\Http\Request;

class ItemListDetailsController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'item_id' => 'required',
            'item_list_id' => 'required',
            'quantity' => 'required|number'
        ]);

        ItemListDetail::create([
            'item_id' => $request->item_id,
            'item_list_id' => $request->item_list_id,
            'quantity' => $request->quantity,
        ]);

        return to_route('index');
    }
}

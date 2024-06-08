<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ItemListDetail extends Model
{
    use HasFactory;

    protected $fillable = ['item_id', 'item_list_id', 'quantity'];

    public function item_list(): BelongsTo
    {
        return $this->belongsTo(ItemList::class);
    }
}

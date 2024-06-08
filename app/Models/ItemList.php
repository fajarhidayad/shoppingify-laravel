<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ItemList extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'status'];

    public function item_list_detail(): HasMany
    {
        return $this->hasMany(ItemListDetail::class);
    }
}

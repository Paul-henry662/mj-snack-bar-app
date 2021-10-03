<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Command extends Model
{
    use HasFactory;

    public function drinks(){
        return $this->belongsToMany(Drink::class)
                ->withPivot('quantity')
                ->withTimeStamps();
    }

    protected $fillable = [
        'amount',
        'user_id',
        'state',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drink extends Model
{
    use HasFactory;

    public function commands(){
        return $this->belongsToMany(Command::class)
                ->withPivot('quantity')
                ->withTimeStamps();
    }

    protected $fillable = [
        'name',
    ];
}

<?php

namespace App\Models\Practic;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table1 extends Model
{
    use HasFactory;

    protected $table = 'table1';

    protected $fillable = [
        'id',
        'name',
        'description',
        'price',
        'img',
        'updated_at',
        'created_at'
    ];

}

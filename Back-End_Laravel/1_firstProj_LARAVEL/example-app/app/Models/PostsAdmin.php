<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostsAdmin extends Model
{
    use HasFactory;

    protected $table = 'posts';
    protected $fillable = [
        'category_id',
        'name',
        'description'
    ];
}

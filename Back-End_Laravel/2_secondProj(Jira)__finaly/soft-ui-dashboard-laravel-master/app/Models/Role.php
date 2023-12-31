<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $table = "roles";

    protected $fillable = ([
        "name",
        "status"
    ]);

    public function user ()
    {
        return $this->belongsToMany(User::class, 'roles_users', 'user_id', "role_id");
    }
}

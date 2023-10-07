<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $table = 'tasks';

    protected $fillable = [
        'name',
        'user_id',
        'status_id'
    ];

//    public function comments ()
//    {
//        return $this->belongsToMany(Comment::class, 'task_comment', 'task_id', "comment_id");
//    }
    public function comments ()
    {
        return $this->belongsTo(Comment::class);
    }

    public function assigneds ()
    {
        return $this->belongsToMany(User::class, 'task_user', 'task_id', "user_id");
    }

//    public function roles ()
//    {
//        return $this->belongsToMany( Role::class, 'roles_users', 'role_id', 'user_id');
//    }
//

    public function user ()
    {
        return $this->belongsTo(User::class);
    }

    public function users ()
    {
        return $this->belongsToMany(User::class, 'task_user', 'task_id', 'user_id');
    }

    public function status ()
    {
        return $this->belongsTo(Status::class);
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $fillable = [
        'name',
        'description',
        'user_id',
        'created_at',
        'updated_at'
    ];


    public function tasks()
    {
        return $this->belongsToMany(Task::class,'project_task', 'project_id', 'task_id');
    }

    public function comments()
    {
        return $this->belongsToMany(Comment::class,'project_comment',  'project_id','comment_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }


}

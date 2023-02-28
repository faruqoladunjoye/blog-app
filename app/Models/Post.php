<?php

namespace App\Models;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;
    use Sluggable;

    protected $table = 'posts';

    protected $fillable = [
        'cate_id',
        'title',
        'slug',
        'description',
        'trending',
        'image',
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title',
            ],
        ];
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'cate_id', 'id');
    }
}
<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Post;
use App\Models\User;
use App\Models\Rating;
use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class FrontendController extends Controller
{
    public function index()
    {
        $trending_posts = Post::where('trending', '1')
            ->take(10)
            ->orderBy('updated_at', 'DESC')
            ->get();
        return view('frontend.index', compact('trending_posts'));
    }

    public function blogs()
    {
        $posts = Post::orderBy('updated_at', 'DESC')->get();
        $user = User::where('id', '1')->firstOrFail();
        return view('frontend.blogs', compact('posts', 'user'));
    }

    public function individualBlog(Request $request, $slug)
    {
        $user = User::where('id', '1')->firstOrFail();
        $posts = Post::where('slug', $slug)->first();
        $ratings = Rating::where('post_id', $posts->id)->get();
        $comment = Comment::where('post_id', $posts->id)->get();
        $rating_sum = Rating::where('post_id', $posts->id)->sum('stars_rated');
        $user_rating = Rating::where('post_id', $posts->id)
            ->where('user_id', Auth::id())
            ->first();

        if ($ratings->count() > 0) {
            $rating_value = $rating_sum / $ratings->count();
        } else {
            $rating_value = 0;
        }
        return view(
            'frontend.blog-post',
            compact(
                'user',
                'posts',
                'ratings',
                'comment',
                'rating_value',
                'user_rating'
            )
        );
    }

    public function contact()
    {
        return view('frontend.contact');
    }
}
<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Post;
use App\Models\Rating;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class RatingController extends Controller
{
    public function add(Request $request)
    {
        $stars_rated = $request->input('product_rating');
        $post_id = $request->input('post_id');

        $post_check = Post::where('id', $post_id)->first();

        if ($post_check) {
            $existing_rating = Rating::where('user_id', Auth::id())
                ->where('post_id', $post_id)
                ->exists();
            if ($existing_rating) {
                $existing_rating->stars_rated = $stars_rated;
                $existing_rating->update();
            } else {
                Rating::create([
                    'user_id' => Auth::id(),
                    'post_id' => $post_id,
                    'stars_rated' => $stars_rated,
                ]);
            }
            return redirect()
                ->back()
                ->with('status', 'Thank you for rating this post.');
        } else {
            return redirect()
                ->back()
                ->with(
                    'status',
                    addslashes("You can't rate this post. Log in!")
                );
        }
    }
}
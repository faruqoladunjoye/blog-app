<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function create(Request $request)
    {
        $post_id = $request->input('post_id');
        $post = Post::where('id', $post_id)->first();

        if ($post) {
            $comment = $request->input('comment');

            $new_comment = Comment::create([
                'user_id' => Auth::id(),
                'post_id' => $post_id,
                'comment' => $comment,
            ]);

            $post_slug = $post->slug;
            if ($new_comment) {
                return redirect('blog-post/' . $post_slug);
            }
        } else {
            return redirect()
                ->back()
                ->with('status', 'The link you followed was broken');
        }
    }

    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->delete();

        return redirect()->back();
    }
}
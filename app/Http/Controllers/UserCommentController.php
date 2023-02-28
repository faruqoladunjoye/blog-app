<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
use Illuminate\Http\Request;

class UserCommentController extends Controller
{
    public function show()
    {
        $comments = Comment::all();

        return view('admin.comment', compact('comments'));
    }

    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->delete();

        return response()->json(['status' => 'Comment Deleted Successfully']);
    }
}
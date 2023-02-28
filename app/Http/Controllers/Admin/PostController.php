<?php

namespace App\Http\Controllers\Admin;

use App\Models\Post;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Cviebrock\EloquentSluggable\Services\SlugService;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return view('admin.index', compact('posts'))->with(
            'posts',
            Post::orderBy('updated_at', 'DESC')->get()
        );
    }

    public function create()
    {
        $category = Category::all();
        return view('admin.create', compact('category'));
    }

    public function insert(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'cate_id' => 'required',
            'description' => 'required',
            // 'image' => 'required|mimes:jpg,png,jpeg|max:5048',
        ]);

        $post = new Post();
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $ext = $file->getClientOriginalExtension();
            $filename = time() . '.' . $ext;
            $file->move('images/', $filename);
            $post->image = $filename;
        }

        $post->title = $request->input('title');
        $post->slug = SlugService::createSlug(
            Post::class,
            'slug',
            $request->title
        );
        $post->cate_id = $request->input('cate_id');
        $post->description = $request->input('description');
        $post->trending = $request->input('trending') == true ? '1' : '0';
        $post->save();

        return redirect('/dashboard')->with(
            'status',
            'Post Created Successfully'
        );
    }

    public function edit($id)
    {
        $post = Post::find($id);
        return view('admin.edit', compact('post'));
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);

        if ($request->hasFile('image')) {
            $path = 'images/' . $post->image;
            if (File::exists($path)) {
                File::delete($path);
            }
            $file = $request->file('image');
            $ext = $file->getClientOriginalExtension();
            $filename = time() . '.' . $ext;
            $file->move('images/', $filename);
            $post->image = $filename;
        }

        $post->title = $request->input('title');
        $post->slug = SlugService::createSlug(
            Post::class,
            'slug',
            $request->title
        );
        $post->description = $request->input('description');
        $post->trending = $request->input('trending') == true ? '1' : '0';
        $post->update();

        return redirect('dashboard')->with(
            'status',
            'Your post has been updated!'
        );
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $path = 'images/' . $post->image;
        if (File::exists($path)) {
            File::delete($path);
        }
        $post->delete();

        return response()->json(['status' => 'Post Deleted Successfully']);
    }
}
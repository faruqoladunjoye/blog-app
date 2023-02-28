@extends('layouts.front')

@section('title')
    Blogs    
@endsection

@section('content')
<section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
      <div class="row">
        <div class="col-md-7 col-lg-6 col-xl-5 mx-auto">
          <h1 class="display-1 mb-3">Blog Posts</h1>
          <p class="lead px-lg-5 px-xxl-8">Welcome to The Puzzle Blog. Here you can find the latest news and business articles.</p>
        </div>
      </div>
    </div>
</section>

<section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="blog classic-view mt-n17">
              @foreach ($posts as $post)
              <article class="post">
                <div class="card">
                  <figure class="card-img-top overlay overlay1 hover-scale"><a class="link-dark" href="{{ url('blog-post/'.$post->slug) }}"><img src="{{ asset('images/'.$post->image) }}" alt="" /></a>
                    <figcaption>
                      <h5 class="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>

                  <div class="card-body">
                    <div class="post-header">
                      <div class="post-category text-line">
                        <a href="{{ url('blog-post/'.$post->slug) }}" class="hover" rel="category">{{ $post->category->name }}</a>
                      </div>
                      <h2 class="post-title mt-1 mb-0"><a class="link-dark" href="{{ url('blog-post/'.$post->slug) }}">{{ $post->title }}</a></h2>
                    </div>
                    <div class="post-content">
                      <p class="text">{{ $post->description }}</p>
                    </div>
                  </div>

                  <div class="card-footer">
                    <ul class="post-meta d-flex mb-0">
                      <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{ date('jS M Y', strtotime($post->updated_at)) }}</span></li>
                      <li class="post-author"><i class="uil uil-user"></i><span>By {{ $user->name }}</span></li>
                    </ul>
                  </div>
                </div>
              </article>
              @endforeach
          </div>
      </div>
    </div>
</section>

@include('layouts.inc.footer')
@include('layouts.inc.progresswrap')
@endsection
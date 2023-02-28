@extends('layouts.front')

@section('title')
    Welcome to The Puzzle Blog    
@endsection

@section('content')
<section class="wrapper bg-gray">
    <div class="container pt-12 pt-md-14 pb-14 pb-md-16">
      <div class="row gy-10 gy-md-13 gy-lg-0 align-items-center">
        <div
          class="col-md-8 col-lg-5 d-flex position-relative mx-auto" data-cues="slideInDown" data-group="header">
          <div class="">
            <img src="{{ asset('frontend/img/puz.jpg') }}" alt=""/>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 col-xxl-5 text-center text-lg-start" data-cues="slideInDown" data-group="page-title" data-delay="600">
          <h1 class="display-1 mb-5">
            The Puzzle Blog.
          </h1>
          <p class="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0">
            We provide varieties of information and make available latest news to the users.
          </p>
          <div class="d-flex justify-content-center justify-content-lg-start" data-cues="slideInDown" data-group="page-title-buttons" data-delay="900">
            <span><a href="{{ url('contact-form') }}" class="btn btn-lg btn-outline-primary rounded-pill">Contact</a></span>
          </div>
        </div>
      </div>
    </div>
</section>

<section class="wrapper bg-light wrapper-border">
    <div class="container py-14 py-md-18">
      <div class="row gx-lg-8 gx-xl-12 gy-6 mb-10">
        <div class="col-lg-6 order-lg-2">
          <ul class="progress-list">
            <li>
              <p>Accuracy</p>
              <div class="progressbar line soft-violet" data-value="100"></div>
            </li>
            <li>
              <p>Balance</p>
              <div class="progressbar line soft-blue" data-value="90"></div>
            </li>
            <li>
              <p>Current</p>
              <div class="progressbar line soft-leaf" data-value="100"></div>
            </li>
            <li>
              <p>Informative</p>
              <div class="progressbar line soft-pink" data-value="94"></div>
            </li>
          </ul>
        </div>

        <div class="col-lg-6">
          <h2 class="display-4 mb-3">What We Do?</h2>
          <p class="lead fs-20 mb-5">
            The Puzzle Blog offers luctus nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Nullam quis risus eget urna mollis
            ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent
            commodo cursus magna, vel scelerisque nisl.
          </p>
        </div>
      </div>

      <div class="row gx-lg-8 gx-xl-12 gy-6 text-center">
        <div class="col-md-6 col-lg-3">
          <img src="{{ asset('icons/accuracy.png') }}" class="svg-inject icon-svg icon-svg-md text-violet mb-3" alt="" />
          <h4>Accuracy</h4>
          <p class="mb-2">
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque
            magnis.
          </p>
        </div>

        <div class="col-md-6 col-lg-3">
          <img src="{{ asset('icons/law.png') }}" class="svg-inject icon-svg icon-svg-md text-blue mb-3" alt=""/>
          <h4>Balance</h4>
          <p class="mb-2">
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque
            magnis.
          </p>
        </div>

        <div class="col-md-6 col-lg-3">
          <img src="{{ asset('icons/stopwatch.png') }}" class="svg-inject icon-svg icon-svg-md text-leaf mb-3" alt="" />
          <h4>Current</h4>
          <p class="mb-2">
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque
            magnis.
          </p>
        </div>

        <div class="col-md-6 col-lg-3">
          <img src="{{ asset('icons/informative.png') }}" class="svg-inject icon-svg icon-svg-md text-pink mb-3" alt="" />
          <h4>Informative</h4>
          <p class="mb-2">
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque
            magnis.
          </p>
        </div>
      </div>
    </div>
</section>

<section class="wrapper bg-light wrapper-border">
  <div class="container py-14 pt-md-18 pb-md-16">
    <div class="row align-items-center mb-10">
      <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
        <h2 class="display-4 mb-3">Trending Posts</h2>
        <p class="lead fs-20 mb-0">
          Check out all the blog posts.
        </p>
      </div>

      <div class="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
        <a href="{{ url('blogs') }}" class="btn btn-outline-primary rounded-pill mb-0">See All Posts</a>
      </div>
    </div>

    @foreach ($trending_posts as $post)
      <div class="card bg-soft-blue mb-10">
        <div class="card-body p-12 pb-0">
          <div class="row">
              <div class="col-lg-4 pb-12 align-self-center">
                <div class="post-category mb-3 text-violet">{{ $post->category->name }}</div>
                <h3 class="h1 post-title mb-3">{{ $post->title }}</h3>
                <p class="text">
                  {{ $post->description }}
                </p>
                <a href="{{ url('blog-post/'.$post->slug) }}" class="more hover link-violet">Read More</a>
              </div>
              <div class="col-lg-7 offset-lg-1 align-self-end">
                <figure>
                  <img
                    class="img-fluid"
                    src="{{ asset('images/'.$post->image) }}"
                    alt=""/>
                </figure>
              </div>
          </div>
        </div>
      </div>
    @endforeach
  </div>
</section>

@include('layouts.inc.footer')
@include('layouts.inc.progresswrap')

@endsection
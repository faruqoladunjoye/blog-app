@extends('layouts.front')

@section('title')
    {{ $posts->title }}    
@endsection

@section('content')
<div class="modal fade" id="exampleModalCenter" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content text-center">
      <form action="{{ url('add-rating') }}" method="POST">
        @csrf
        <input type="hidden" name="post_id" value="{{ $posts->id }}">
        <div class="modal-body">
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          <h3 class="mb-4">Rate this Blog Post</h3>
          <div class="rating-css">
            <div class="star-icon">
              @if($user_rating)
                  @for ($i = 1; $i <= $user_rating->stars_rated; $i++)
                    <input type="radio" value="{{ $i }}" name="product_rating" checked id="rating{{ $i }}">
                    <label for="rating{{ $i }}" class="fa fa-star"></label>
                  @endfor
                  @for($j = $user_rating->stars_rated+1; $j <= 5; $j++ )
                      <input type="radio" value="{{ $j }}" name="product_rating" id="rating{{ $j }}">
                      <label for="rating{{ $j }}" class="fa fa-star"></label>
                  @endfor
              @else
                <input type="radio" value="1" name="product_rating" checked id="rating1">
                <label for="rating1" class="fa fa-star"></label>
                <input type="radio" value="2" name="product_rating" id="rating2">
                <label for="rating2" class="fa fa-star"></label>
                <input type="radio" value="3" name="product_rating" id="rating3">
                <label for="rating3" class="fa fa-star"></label>
                <input type="radio" value="4" name="product_rating" id="rating4">
                <label for="rating4" class="fa fa-star"></label>
                <input type="radio" value="5" name="product_rating" id="rating5">
                <label for="rating5" class="fa fa-star"></label>
              @endif
            </div>
          </div>
          <div class="modal-footer bg-whitesmoke br">
            <button type="submit" class="btn btn-primary">Done</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </form>
    </div>
  </div>    
</div>

<div class="modal fade" id="formModalCenter" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content text-center">
      <div class="modal-body">
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
        <h3 class="mb-4">Comment</h3>
        <p class="mb-7">Add a comment</p>
        <form action="{{ url('add-comment') }}" method="POST">
          @csrf

          <input type="hidden" name="post_id" value="{{ $posts->id }}">

          <div class="form-label-group mb-4">
            <textarea name="comment" class="form-control" rows="5" placeholder="Comment" required></textarea>
            <label>Comment</label>
          </div>
                  
          <button type="submit" class="btn btn-primary rounded-pill mb-0">Submit</button>
        </form>
      </div>
    </div>
  </div>    
</div>

<section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
      <div class="row">
        <div class="col-md-10 col-xl-8 mx-auto">
          <div class="post-header">
            <div class="post-category text-line">
              <a class="hover" rel="category">{{ $posts->category->name }}</a>
            </div>
            <h1 class="display-1 mb-4">{{ $posts->title }}</h1>
            <ul class="post-meta mb-5">
              <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{ date('jS M Y', strtotime($posts->updated_at)) }}</span></li>
              <li class="post-author"><i class="uil uil-user"></i><span>By {{ $user->name }}</span></li>
              <li class="post-comments"><i class="uil uil-comment"></i>{{ $comment->count() }}<span> Comments</span></li>
            </ul>
            @php $ratenum = number_format($rating_value) @endphp
            <div class="rating">
              @for ($i = 1; $i <= $ratenum; $i++)
                <i class="fa fa-star checked"></i>
              @endfor
              @for($j = $ratenum+1; $j <= 5; $j++ )
                <i class="fa fa-star"></i>
              @endfor
              <span>
                @if($ratings->count() > 0)
                  {{ $ratings->count() }} Rating(s)
                @else
                  No Ratings
                @endif
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

<section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto">
            <div class="blog single mt-n17">
              <div class="card">
                <figure class="card-img-top"><img src="{{ asset('images/'.$posts->image) }}" alt="" /></figure>
                <div class="card-body">
                  <div class="classic-view">
                    <article class="post">
                      <div class="post-content mb-5">
                        <h2 class="h1 mb-4">{{ $posts->title }}</h2>
                        {{-- <blockquote class="fs-lg my-8"> --}}
                          <p>{{ $posts->description }}</p>
                          <footer class="blockquote-footer">{{ $user->name }}</footer>
                        {{-- </blockquote> --}}
                      </div>

                      <div class="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                        <div class="mb-0 mb-md-2">
                          <ul class="post-meta mb-5">
                              <li>
                                <button type="button" class="btn btn-primary btn-sm rounded-pill mb-0 me-0" data-toggle="modal" data-target="#exampleModalCenter"><i class="uil uil-star"></i><span> Rate</span></button>
                              </li>
                              <li>
                                <button type="button" class="btn btn-soft-ash btn-sm rounded-pill mb-0 me-0" data-toggle="modal" data-target="#formModalCenter"><i class="uil uil-comment"></i><span> Comment</span></button>
                              </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                  </div>

                  <hr />
                  <div id="comments">
                    @foreach ( $comment as $item )
                      <h3 class="mb-6">{{ $comment->count() }} Comment(s)</h3>
                      <ol id="singlecomments" class="commentlist">
                        <li class="comment">
                          <div class="comment-header d-md-flex align-items-center">
                            <div class="d-flex align-items-center">
                              <div>
                                <h6 class="comment-author" class="link-dark">{{ $item->user->name.' '.$item->user->lname }}</h6>
                                <ul class="post-meta">
                                  <li><i class="uil uil-calendar-alt"></i>{{ $item->created_at->format('d M Y') }}</li>
                                </ul>
                              </div>
                            </div>
                            @if($item->user_id == Auth::id())
                              <div class="mt-3 mt-md-0 ms-auto">
                                <a href="{{ url('delete-comment/'.$item->id) }}" class="btn btn-danger btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i class="uil uil-trash"></i> Delete</a>
                              </div>
                            @endif
                          </div>
                          <p>{{ $item->comment }}</p>
                        </li>
                      @endforeach
                    </ol>
                  </div>

                  <hr />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
</section>

@include('layouts.inc.footer')
@include('layouts.inc.progresswrap')
@endsection
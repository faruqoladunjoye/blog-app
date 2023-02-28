<header class="wrapper bg-gray pb-4">
    <nav class="navbar fancy navbar-expand-lg navbar-light navbar-bg-light">
      <div class="container">

        <div class="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
          <div class="navbar-brand w-100">
            <a href="/"><img src="{{ asset('frontend/img/puzzle.png') }}" alt="logo"/></a>
          </div>

          <div class="navbar-collapse offcanvas-nav d-lg-flex mx-lg-auto">
            <div class="offcanvas-header d-lg-none d-xl-none">
              <a href="/"><img src="frontend/img/puzzle.png" alt="logo"/></a>
              <button type="button" class="btn-close btn-close-white offcanvas-close offcanvas-nav-close" aria-label="Close"></button>
            </div>

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="{{ url('/') }}">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="{{ url('blogs') }}">Blogs</a>
              </li>

                @guest
                @if (Route::has('login'))
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                    </li>
                @endif
      
                @if (Route::has('register'))
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}">{{ __('Sign Up') }}</a>
                    </li>
                @endif

                @else
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ Auth::user()->name }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {{-- <li><a class="dropdown-item" href="#">My Profile</a></li> --}}
                  <li><a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </li>
                </ul>
                </li>
                @endguest
            </ul>
          </div>

          <div class="navbar-other w-100 d-flex ms-auto">
            <ul class="navbar-nav flex-row align-items-center ms-auto" data-sm-skip="true">
              <li class="nav-item d-none d-md-block">
                <a href="{{ url('contact-form') }}" class="btn btn-sm btn-primary rounded-pill">Contact</a>
              </li>
              <li class="nav-item d-lg-none">
                <div class="navbar-hamburger"><button class="hamburger animate plain" data-toggle="offcanvas-nav"><span></span></button></div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
</header>
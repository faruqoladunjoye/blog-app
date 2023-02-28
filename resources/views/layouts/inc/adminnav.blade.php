<nav class="navbar navbar-expand-lg main-navbar sticky">
  <div class="form-inline mr-auto">
    <ul class="navbar-nav mr-3">
      <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg
            collapse-btn"> <i data-feather="align-justify"></i></a></li>
      <li><a href="#" class="nav-link nav-link-lg fullscreen-btn">
          <i data-feather="maximize"></i>
        </a></li>
      <li>
        {{-- <form class="form-inline mr-auto">
          <div class="search-element">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200">
            <button class="btn" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form> --}}
      </li>
    </ul>
  </div>
  <ul class="navbar-nav navbar-right">
    <li class="dropdown">
          <a href="{{ url('/') }}" class="nav-link nav-link-lg"><i data-feather="home"></i></a>
    </li>
    
    <li class="dropdown"><a href="" data-toggle="dropdown" class="nav-link nav-link-lg"><i data-feather="user"></i> </a>
      <div class="dropdown-menu dropdown-menu-right pullDown">
        <div class="dropdown-title">{{ Auth::user()->name }}</div>
        {{-- <a href="#" class="dropdown-item has-icon"> <i class="far
              fa-user"></i> Profile
        </a> 
        <a href="#" class="dropdown-item has-icon"> <i class="fas fa-cog"></i>
          Settings
        </a> --}}
        <div class="dropdown-divider"></div>
        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="dropdown-item has-icon text-danger"> <i class="fas fa-sign-out-alt"></i>
          {{ __('Logout') }}</a>
          <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
            @csrf
          </form>
      </div>
    </li>
  </ul>
</nav>
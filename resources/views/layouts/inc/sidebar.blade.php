<div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href=""> <img alt="image" src="{{ asset('admin/img/jigsaw.png') }}" class="header-logo" /> <span
            class="logo-name">Puzzle Blog</span>
        </a>
      </div>
      <ul class="sidebar-menu">
        <li class="menu-header">Main</li>
        <li class="dropdown {{ Request::Is('dashboard') ? 'active':'' }}">
          <a href="{{ url('dashboard') }}" class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></a>
        </li>
        <li class="dropdown {{ Request::Is('category') ? 'active':'' }}">
          <a href="{{ url('category') }}" class="nav-link"><i data-feather="hash"></i><span>Category</span></a>
        </li>
        <li class="dropdown {{ Request::Is('add-category') ? 'active':'' }}">
          <a href="{{ url('add-category') }}" class="nav-link"><i data-feather="plus"></i><span>Add Category</span></a>
        </li>
        <li class="dropdown {{ Request::Is('create-post') ? 'active':'' }}">
          <a href="{{ url('create-post') }}" class="nav-link"><i data-feather="command"></i><span>Create Blog Post</span></a>
        </li>
        <li class="dropdown {{ Request::Is('users-comment') ? 'active':'' }}">
          <a href="{{ url('users-comment') }}" class="nav-link"><i data-feather="message-square"></i><span>Comments</span></a>
        </li>
      </ul>
    </aside>
  </div>
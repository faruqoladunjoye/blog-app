<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Icon -->
    <link rel='shortcut icon' type='image/x-icon' href="{{ asset('admin/img/jigsaw.png') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- <title>{{ config('app.name', 'Laravel') }}</title> --}}
    <title>Puzzle Blog</title>

    <!-- General CSS Files -->
    <link rel="stylesheet" href="{{ asset('admin/css/app.min.css') }}">

    <link rel="stylesheet" href="{{ asset('admin/css/plugins.css') }}">
    {{-- <link rel="stylesheet" href="{{ asset('admin/css/blue.css') }}"> --}}
    
    <!-- Template CSS -->
    <link rel="stylesheet" href="{{ asset('admin/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/css/components.css') }}">
    
    <!-- Custom style CSS -->
    <link rel="stylesheet" href="{{ asset('admin/css/custom.css') }}">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
    <div class="loader"></div>
        <div id="app">
            <div class="main-wrapper main-wrapper-1">
                <div class="navbar-bg"></div>
                    @include('layouts.inc.adminnav')

                <div class="main-sidebar sidebar-style-2">
                    @include('layouts.inc.sidebar')
                </div>

                <div class="main-content">
                    @yield('content')
                </div>

                @include('layouts.inc.adminfooter')

            </div>
        </div>
    </div>
    
    <!-- General JS Scripts -->
    <script src="{{ asset('admin/js/app.min.js') }}"></script>
    <!-- JS Libraies -->

    <script src="{{ asset('admin/js/alert.js') }}"></script>
    <!-- Template JS File -->
    <script src="{{ asset('admin/js/scripts.js') }}"></script>
    <!-- Custom JS File -->
    <script src="{{ asset('admin/js/custom.js') }}"></script>

    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
    @if (session('status'))
        <script>
            swal("{{ session('status') }}")
        </script>
    @endif
    @yield('scripts')

</body>
</html>

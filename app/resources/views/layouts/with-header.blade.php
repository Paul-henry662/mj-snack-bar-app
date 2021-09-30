@extends('layouts.app')

@section('body_content')
    <header>
        <img src="./" alt="Logo du snack bar Mike & Julia">
    </header>

    <main>
        <h1>@yield('page_title')</h1>
        @yield('page_content')
    </main>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    @yield('scripts')
@endsection
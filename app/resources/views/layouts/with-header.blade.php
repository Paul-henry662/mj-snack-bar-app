@extends('layouts.app')

@section('body_content')
    <header>
        <img src="./" alt="Logo du snack bar Mike & Julia">
    </header>

    <main>
        <h1>@yield('page_title')</h1>
        @yield('page_content')
    </main>

    <script src="{{ asset('js/jquery.min.js') }}"></script>
    @yield('scripts')
@endsection
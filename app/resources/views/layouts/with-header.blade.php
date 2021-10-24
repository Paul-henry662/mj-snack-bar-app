@extends('layouts.app')

@section('body_content')
    <header class="header">
        <img src="{{ asset('./images/logo.svg') }}" alt="Logo du snack bar Mike & Julia">
        <div style="color:white;">
            {{ Auth::user()->first_name }}
        </div>
    </header>

    <main>
        <h1>@yield('page_title')</h1>
        @yield('page_content')
    </main>

    <script src="{{ asset('js/jquery.min.js') }}"></script>
    @yield('scripts')
@endsection
@extends('layouts.app')

@section('body_content')
    <main>
        <img src="" alt="Bar's logo">

        <h1>@yield('page_title')</h1>

        @if ($errors->any())
            <div>
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="POST" class="form">
            @csrf
            @yield('form')
        </form>

        <div class="redirection">
            @yield('redirection')
        </div>
    </main>
@endsection
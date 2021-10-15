@extends('layouts.app')

@section('body_content')
    <main>
        <img src="{{ asset('./img/logo.svg') }}" alt="Bar's logo">

        @yield('page_title')

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
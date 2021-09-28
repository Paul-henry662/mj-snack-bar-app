@extends('layouts.app')

@section('content')
    <main>
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

        <form method="POST">
            @csrf
            @yield('form')
        </form>
    </main>
@endsection
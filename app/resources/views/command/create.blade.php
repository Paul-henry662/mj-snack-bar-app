@extends('layouts.with-header')

@section('head_title', 'Composer une commande')

@section('page_title', 'Créer une commande')

@section('page_content')
    <div class="command">
        <ul class="command__list">
        </ul>

        <div class="command__pricing">
            <span class="pricing__cost">0</span> FCFA
        </div>

        <button class="command__btn">Envoyer</button>
    </div>

    <div class="catalog">
        <input type="search" class="catalog__search">

        <div class="catalog__grid">
            @foreach($drinks as $drink)
                <figure class="grid__card">
                    <img src="./" alt = "{{ $drink->name }} Bottles">

                    <figcaption class="card__caption">
                        <h2 class="caption__name">{{ $drink->name }}</h2>
                        <small class="caption__pricing">{{ $drink->price }} FCFA</small>
                        <button class="caption__btn">&plus;</button>
                    </figcaption>
                </figure>
            @endforeach
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        localStorage.setItem("token", "{{ csrf_token() }}");
    </script>
    <script src="/js/command.js"></script>
@endsection
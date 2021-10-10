@extends('layouts.with-header')

@section('head_title', 'Commandes actives')

@section('page_title', 'Commandes actives')

@section('page_content')
    <div>
        <section class="card__section">
            <h2 class="section__title">Imprimer les factures</h2>

            <ul class="section__list" id="to-print-list"></ul>
        </section>

        <section class="card__section">
            <h2 class="section__title">Valider les paiements</h2>

            <ul class="section__list" id="to-validate-list"></ul>
        </section>
    </div>
@endsection

@section('scripts')
    <script>
        localStorage.setItem("token", "{{ csrf_token() }}");
    </script>
    <script src="{{ asset('js/cashier.js') }}"></script>
@endsection
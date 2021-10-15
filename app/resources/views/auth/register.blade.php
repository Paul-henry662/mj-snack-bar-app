@extends('layouts.auth')

@section('title', 'Créer un compte')

@section('page_title')
    <h1 class="main__title">Créer un <br> compte</h1>
@endsection

@section('form')
    <input type="text" name="first_name" placeholder="Prénom" class="form__input">
    <input type="text" name="last_name" placeholder="Nom" class="form__input">
    <input type="phone" name="phone_number" placeholder="Numéro de téléphone" class="form__input">
    <select name="role" class="form__input">
        <option value="waiter">Serveur / Serveuse</option>
        <option value="cashier">Caissier / Caissière</option>
    </select>
    <input type="password" name="password" placeholder="Mot de passe" class="form__input">
    <input type="password" name="password_confirmation" placeholder="Confirmer le mot de passe" class="form__input">

    <button type="submit" class="btn btn--long btn--margin-top">Créer</button>
@endsection

@section('redirection')
    Déjà inscrit? <a href="{{ route('login') }}">Connectez-vous</a>
@endsection
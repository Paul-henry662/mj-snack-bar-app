@extends('layouts.auth')

@section('title', 'Se connecter')

@section('page_title', 'Se connecter')

@section('form')
    <input type="phone" name="phone_number" placeholder="Numéro de téléphone" class="form__input">
    <input type="password" name="password" placeholder="Mot de passe" class="form__input">

    <button type="submit" class="btn">Connexion</button>
@endsection

@section('redirection')
    Pas encore inscrit? <a href="{{ route('register') }}">Créez un compte</a>
@endsection
@extends('layouts.auth')

@section('title', 'Se connecter')

@section('page_title', 'Se connecter')

@section('form')
    <input type="phone" name="phone_number" placeholder="Numéro de téléphone">
    <input type="password" name="password" placeholder="Mot de passe">

    <button type="submit">Connexion</button>
@endsection
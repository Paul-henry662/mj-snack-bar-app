@extends('layouts.auth')

@section('title', 'Créer un compte')

@section('page_title', 'Créer un compte')

@section('form')
    <input type="text" name="first_name" placeholder="Prénom">
    <input type="text" name="last_name" placeholder="Nom">
    <input type="phone" name="phone_number" placeholder="Numéro de téléphone">
    <select name="role">
        <option value="waiter">Serveur / Serveuse</option>
        <option value="cashier">Caissier / Caissière</option>
    </select>
    <input type="password" name="password" placeholder="Mot de passe">
    <input type="password" name="password_confirmation" placeholder="Confirmer le mot de passe">

    <button type="submit">Créer</button>
@endsection
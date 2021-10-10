<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\CommandController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if(Auth::user()){
        $user_role = Auth::user()->roles()->first()->name;
        $destination = "";

        switch($user_role){
            case 'owner':
                $destination = route('cashier');
                break;
            case 'waiter':
                $destination = route('waiter');
                break;
            case 'cashier':
                $destination = route('cashier');
                break;
            default:
                $destination = route('waiter');
        }

        return redirect($destination);
    }
    else{
        return redirect(route('login'));
    }
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/waiter', [CommandController::class, 'create'])
    ->middleware(['auth'])->name('waiter');

Route::get('/cashier', [CommandController::class, 'index'])
    ->middleware(['auth'])->name('cashier');

//API
Route::post('/command/create', [CommandController::class, 'store'])->middleware(['auth'])
    ->middleware(['auth']);

Route::get('/commands/new', [CommandController::class, 'getNew'])
    ->middleware(['auth']);

Route::get('/commands/printed', [CommandController::class, 'getPrinted'])
    ->middleware(['auth']);

Route::post('/command/updateState/{id}', [CommandController::class, 'updateState'])
    ->middleware(['auth']);

require __DIR__.'/auth.php';

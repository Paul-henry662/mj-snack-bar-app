<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Command;
use App\Models\Drink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class CommandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newCommands = Command::where('state', 0)->get();
        $printedCommands = Command::where('state', 1)->get();

        return view('command.cashier', ['newCommands' => $newCommands, 'printedCommands' => $printedCommands]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $drinks = Drink::all();
        return view('command.waiter', ['drinks' => $drinks]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $amount = 0;

        foreach($request->all() as $drink => $quantity){
            $drinkPrice = Drink::where('name', $drink)->first()->price;

            $amount += $quantity * $drinkPrice;
        }
        
        $command = Command::create([
            'amount' => $amount,
            'user_id' => Auth::id(),
            'state' => 0,
        ]);

        foreach($request->all() as $drink => $quantity){
            DB::table('command_drink')->insert([
                'drink_id' => Drink::where('name', $drink)->first()->id,
                'command_id' => $command->id,
                'quantity' => $quantity,
                'created_at' =>  \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Command  $command
     * @return \Illuminate\Http\Response
     */
    public function show(Command $command)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Command  $command
     * @return \Illuminate\Http\Response
     */
    public function edit(Command $command)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Command  $command
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Command $command)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Command  $command
     * @return \Illuminate\Http\Response
     */
    public function destroy(Command $command)
    {
        //
    }

    public function getNew(){
        $drinks = [];
        $waiters = [];

        $newCommands = Command::where('state', 0)->get();

        foreach($newCommands as $command){
            $quantities = [];

            foreach($command->drinks()->get() as $drink){
                $quantities[$drink->name] = $drink->pivot->quantity;
            }

            $drinks[$command->id] = $quantities;

            $waiters[$command->id] = User::find($command->user_id);
        }

        return [
            'commands' => $newCommands,
            'quantities' => $drinks,
            'waiters' => $waiters,
        ];
    }

    public function getPrinted(){
        $drinks = [];
        $waiters = [];

        $printedCommands = Command::where('state', 1)->get();

        foreach($printedCommands as $command){
            $quantities = [];

            foreach($command->drinks()->get() as $drink){
                $quantities[$drink->name] = $drink->pivot->quantity;
            }

            $drinks[$command->id] = $quantities;

            $waiters[$command->id] = User::find($command->user_id);
        }

        return [
            'commands' => $printedCommands,
            'quantities' => $drinks,
            'waiters' => $waiters,
        ];
    }

    public function updateState($commandId){
        $command = Command::find($commandId);

        $command->update([
            'state' => $command->state + 1,
        ]);
    }
}

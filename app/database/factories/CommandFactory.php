<?php

namespace Database\Factories;

use App\Models\Command;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommandFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Command::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'amount' => rand(900, 50000),
            'user_id' => User::factory(),
        ];
    }
}

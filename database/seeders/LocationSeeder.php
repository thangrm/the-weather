<?php

namespace Database\Seeders;

use Exception;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $timeStart = microtime(true);
        $strJsonFileContents = file_get_contents(base_path('city.list.json'));
        $locations = json_decode($strJsonFileContents, true);

        DB::beginTransaction();
        try {
            foreach ($locations as $location) {
                DB::table('locations')->insert([
                    'id' => $location['id'],
                    'name' => $location['name'],
                    'state' => $location['name'],
                    'country' => $location['name'],
                    'lon' => $location['coord']['lon'],
                    'lat' => $location['coord']['lat'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
            DB::commit();
        } catch (Exception $ex) {
            DB::rollback();
        }

        $exeTime = microtime(true) - $timeStart;
        $this->command->info("Execution time LocationSeeder: " . $exeTime);
    }
}

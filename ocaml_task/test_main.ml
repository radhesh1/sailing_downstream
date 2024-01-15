(* test_guessing_game.ml *)
open Alcotest
open Guessing_game

let test_generate_random_number () =
  let min = 1 in
  let max = 100 in
  let random_number = generate_random_number min max in
  check (int_range min max) "Generated number in range" random_number

let suite = [
  "Guessing Game", [
    test_case "generate_random_number" `Quick test_generate_random_number;
  ];
]

let () =
  run "Guessing Game Tests" [
    "Suite", suite;
  ]

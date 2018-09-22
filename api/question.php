<?php 
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    
include "crud.php";
    
    $questionData = json_decode(file_get_contents("php://input"),true);
    $question = $questionData['question'];
    $opt1 = $questionData['opt1'];
    $opt2 = $questionData['opt2'];
    $opt3 = $questionData['opt3'];
    $opt4 = $questionData['opt4'];
    $answer = $questionData['answer'];
    echo $question . " meow";

    if($question!=""){   
        $query = "insert into question (question, opt1, opt2, opt3, opt4, answer) value ('$question', '$opt1', '$opt2', '$opt3', '$opt4', '$answer');";

        $crud = new Crud();

        $res = $crud->execute($query);
    }
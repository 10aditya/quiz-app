<?php 
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    
include "crud.php";
    
    $questionData = json_decode(file_get_contents("php://input"),true);
    $type = $questionData['type'];
    $crud = new Crud();
    if($type==0){
        $id = $questionData['id'];
        $question = $questionData['question'];
        $opt1 = $questionData['opt1'];
        $opt2 = $questionData['opt2'];
        $opt3 = $questionData['opt3'];
        $opt4 = $questionData['opt4'];
        $answer = $questionData['answer'];
        //echo $question . " meow";

        if($question!=""){   
            $query = "insert into question (id, question, opt1, opt2, opt3, opt4, answer) values($id, '$question', '$opt1', '$opt2', '$opt3', '$opt4', $answer);";
            //echo "<br> $query";


            $res = $crud->execute($query);
        }
        
    } else if($type==1){
        $id = $questionData['id'];
        $query = "select * from question where id=$id;";
        $data = $crud->getData($query);
        echo json_encode($data[0]);
    }  
    
?>
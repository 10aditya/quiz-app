<?php 
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    
include "crud.php";
    
    $data = json_decode(file_get_contents("php://input"),true);
    $type = $data['type'];
    $crud = new Crud();
    if($type==1){
        $tid = $data['tid'];
        $query = "select count(*) from quiz where tid=$tid;";
        $data = $crud->getData($query);
        echo json_encode($data[0]);
    } else if($type==2){
        $tid = $data['tid'];
        $query = "update teacher set quizzes=quizzes+1 where id=$tid;";
        echo $crud->execute($query);
    } else if($type==3){
        $tid = $data['tid'];
        $query = "select name from teacher where id=$tid;";
        //echo $query;
        $data = $crud->getData($query);
        echo json_encode($data[0]);
    }
?>
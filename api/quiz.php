<?php 
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    
include "crud.php";
    
    $data = json_decode(file_get_contents("php://input"),true);
    $id = $data['id'];
    $type = $data['type'];
    if($type==1){
        $query = "select count(tid) from quiz where tid = $id;";
    } else if($type==0){
        $query = "select count(*) from quiz;";
    } else if ($type==3){
        $query = "select count(*) from question;";
    } else if ($type==2){
        $id=$data['id'];
        $tid=$data['tid'];
        $questions=$data['questions'];
        $subject=$data['subject'];
        $topic=$data['topic'];
        $timelimit=$data['timelimit'];

        $query = "insert into quiz(id,tid,questions,subject,topic,timelimit) 
        values($id,$tid,'$questions','$subject','$topic',$timelimit);";
    }
    //hecho $query;
    $crud = new Crud();
    $data = $crud->getData($query);
    echo json_encode($data[0]);
?>
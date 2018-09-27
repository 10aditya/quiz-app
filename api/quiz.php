<?php 
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    
include "crud.php";
    
    $data = json_decode(file_get_contents("php://input"),true);
    $id = $data['id'];
    $type = $data['type'];
    $crud = new Crud();
    if($type==1){
        $query = "select count(tid) from quiz where tid = $id;";
        $data = $crud->getData($query);
        echo json_encode($data[0]);
    } else if($type==0){
        $query = "select count(*) from quiz;";
        $data = $crud->getData($query);
        echo json_encode($data[0]);
    } else if ($type==3){
        $query = "select count(*) from question;";
        $data = $crud->getData($query);
        echo json_encode($data[0]);
    } else if ($type==2){
        $id=$data['id'];
        $tid=$data['tid'];
        $questions=$data['questions'];
        $subject=$data['subject'];
        $topic=$data['topic'];
        $timelimit=$data['timelimit'];

        $query = "insert into quiz(id,tid,questions,subject,topic,timelimit) 
        value($id,$tid,'$questions','$subject','$topic',$timelimit);";
        
        echo $crud->execute($query);
    }
    //hecho $query;
?>
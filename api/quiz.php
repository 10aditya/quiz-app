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
        $id = $data['id'];
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
    } else if($type==4){
        $tid=$data['tid'];
        $query = "select * from quiz where tid=$tid order by timestamp desc;";
        //echo $query . " <br>";
        $data = $crud->getData($query);
        $a = array();
        foreach($data as $d){
            $a[]=$d;
        }
        echo json_encode($a);
    } else if($type==5){
        $id = $data['id'];
        $query = "select * from quiz where id=$id;";
        //echo $query;
        $data = $crud->getData($query);
        echo json_encode($data[0]);
    }
    //hecho $query;
?>
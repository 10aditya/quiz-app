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
        $query = "insert into submission(qid,sid,tid,score,answers) values(".$data['qid'].",".$data['sid'].",".$data['tid'].",".$data['score'].",'".$data['answers']."');";
        //echo $query;
        echo $crud->insertData($query);
    } else if($type==2){
        $query = "select * from submission where sid=".$data['id'].";";
        $list = $crud->getData($query);
        $a = array();
        foreach($list as $data){
            $a[]=$data;
        }
        echo json_encode($a);
    } else if($type==3){
        $query = "select * from submission where tid=".$data['id']." order by timestamp desc;";
    
        $list = $crud->getData($query);
        $a = array();
        foreach($list as $data){
            $a[]=$data;
        }
        echo json_encode($a);
    }
?>
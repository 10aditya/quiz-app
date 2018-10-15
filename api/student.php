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
        $query = "select * from student;";
        $list = $crud->getData($query);
        $a = array();
        foreach($list as $data){
            $a[]=$data;
        }
        echo json_encode($a);
    } else if($type==2){
        $query = "select * from teacher;";
        $list=$crud->getData($query);
        $a = array();
        foreach($list as $data){
            $a[]=$data;
        }   
        echo json_encode($a);
    } else if($type==3){
        $query = "select * from quiz order by timestamp desc;";
        $list=$crud->getData($query);
        $a = array();
        foreach($list as $data){
            $a[]=$data;
        }
        echo json_encode($a);
    } else if($type==4){
        $id = $data['id'];
        $query = "select qid from submission where sid=$id;";
        $list = $crud->getData($query);
    } else if($type==5){
        $query = "select name from student where id=".$data['id'].";";
        $a = $crud->getData($query);
        echo json_encode($a[0]);
    } else if($type==6){
        $query = "select count(*) from submission where sid=".$data['id'].";";
        $a = $crud->getData($query);
        echo json_encode($a[0]);
    } else if($type==7){
        $query = "select * from student where id=".$data['id'].";";
        $a = $crud->getData($query);
        echo json_encode($a[0]);
    }
    

?>
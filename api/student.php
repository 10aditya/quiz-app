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
    }

?>
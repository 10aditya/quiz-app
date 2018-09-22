<?php 
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    
include "crud.php";
    
    $data = json_decode(file_get_contents("php://input"),true);
    $id = $data['id'];

    $query = "select count(tid) from quiz where tid = $id;";

    //echo $query;
    $crud = new Crud();
    $data = $crud->getData($query);
    echo json_encode($data[0]);
?>
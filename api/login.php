<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    
include "crud.php";
    
    $loginData = json_decode(file_get_contents("php://input"),true);   
    $error="";
    $emailid = $loginData['email'];
    $passwrd = $loginData['password'];
    $type = $loginData['type'];
    
    $crud = new Crud();
    
    $query = "select * from $type where email='$emailid';";

    $data = $crud->getData($query);
    
    if($data[0]["password"]==$passwrd){
        echo json_encode($data[0]);
    }
 ?>
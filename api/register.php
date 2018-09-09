<?php
    session_start();
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
        
    include "crud.php";
        
        $registerData = json_decode(file_get_contents("php://input"),true);   
        $error="";
        $name = $registerData['name'];
        $emailid = $registerData['email'];
        $passwrd = $registerData['password'];
        $type = $registerData['type'];
        
        $crud = new Crud();
        
        $query = "insert into $type (name,email,password) values ('$name','$emailid','$passwrd');";
    
        $data = $crud->insertData($query);
?>
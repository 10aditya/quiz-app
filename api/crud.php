<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

include_once 'dbconfig.php';

class Crud extends dbconfig{
     public function __construct(){
        parent::__construct();
     }

     public function getData($query){
         $result=$this->connection->query($query);
         if($result==false){
            return false;
         }
         $rows=array();
         while ($row=$result->fetch_assoc()){
             $rows[]=$row;
         }
         return $rows;
     }

    public function insertData($query){
        $result = $this->connection->query($query);
        if($result==false){
            echo $this->connection->error;
            return false;
        } else {
            return true;
        }
     }

     public function execute($query){
        $result=$this->connection->query($query);
        if($result==false){
            echo 'Cannot execute query';
            return false;
        }
        return true;
     }
 }
?>
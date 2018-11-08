<?php
/**
 * 
 */
class dbconfig{
	private $_host = 'localhost';
	private $_username = 'id7603059_aditya';
	private $_password = 'WMXtKswzSZBhM4G';
	private $_database = 'id7603059_quizapp';

	protected $connection;

	public function __construct(){
		if (!isset($this->connection)) {
			$this->connection=new mysqli($this->_host,$this->_username,$this->_password, $this->_database);
			if($this->connection->connect_error){
				echo 'Cannot connect to database right now: '.$this->connection->connect_error;
				exit;
			}
		}
		return $this->connection;
	}

}
?>
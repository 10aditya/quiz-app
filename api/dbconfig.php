<?php
/**
 * 
 */
class dbconfig{
	private $_host = '127.0.0.1';
	private $_username = 'root';
	private $_password = '';
	private $_database = 'quizapp';

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
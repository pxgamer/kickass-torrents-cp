<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	private $_user;

	function __construct() {
		parent::__construct();
		
		$this->_user = $this->u->getUserFromSession();
		// printDie($this->_user);

		$this->_is_ajax = isset($_POST['is_ajax']);
	}

	public function index() {
		$torrents = new stdClass;
		
		$view = $this->load->view('main/home', array('torrents'=>$torrents), true);
		$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
	}
}

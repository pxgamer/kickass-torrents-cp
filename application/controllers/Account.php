<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Account extends CI_Controller {

	private $_user;

	function __construct() {
		parent::__construct();
		
		$this->_user = $this->u->getUserFromSession($this->_user);
		// printDie($this->_user);
		// $this->_user = $this->session->get_userdata('user') ? (object)$this->session->userdata() : null;
		// $this->_user = $this->_user->user;
		// $this->session->unset_userdata('user');
		// $this->session->set_userdata('user', $this->u->getUserData($this->_user->id));

		$this->_is_ajax = isset($_POST['is_ajax']);
	}

	public function index()	{
		die('index');
	}

	public function show() {
		$username = $this->uri->segment(2);

		$data = $this->u->getUserByName($username, true);

		// $user_data = $this->session->get_userdata();
		// printDie($this->_user);


		$view = $this->load->view('account/profile', array('user'=>$data, '_user'=>$this->_user), true);
		$this->load->view('include/template', array('view'=>$view));
	}
}

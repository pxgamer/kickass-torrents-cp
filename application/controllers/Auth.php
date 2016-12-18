<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

	private $_user;

	function __construct() {
		parent::__construct();

		$this->_user = $this->u->getUserFromSession();
		// printDie($this->_user);
		$this->_is_ajax = isset($_POST['is_ajax']);
	}
	
	public function index()	{
		die('index');
	}

	public function login() { 
		if ($this->_user->acl) redirectDie('/');
		$data = new stdClass;
		$data->tab = 'login';
		if ($_POST) {
			$email = $_POST['email'] ? $_POST['email'] : '';
			$password = $_POST['password'] ? $_POST['password'] : '';
			if ($id_hash = $this->u->attemptLogin($email, $password)) {
				$this->u->loginUser($id_hash);
				redirect('/');
			}else{
				$data->email = $email;
			}
		}
		// printDie($data);
		$view = $this->load->view('auth/login', array('data'=>$data), true);
		if ($this->_is_ajax) {
			$this->o->json('show', $view);
		}else{
			$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
		}
	}
	public function register() {
		if ($this->_user->acl) redirectDie('/');
		if ($_POST) {
			$data = new stdClass;
			$email = $_POST['email'] ? $_POST['email'] : '';
			$nickname = $_POST['nickname'] ? $_POST['nickname'] : '';
			$password = $_POST['password'] ? $_POST['password'] : '';
			$register = $this->u->attemptRegister($email, $nickname, $password);
			if ($register->successful) {
				$this->u->loginUser($register->id_hash);
				// printDie('It should have logged in....');
				redirectDie('/user/'.$nickname.'/');
			}else{
				printDie('Fuck off');
				$data->tab = 'register';
				$data->email = $email;
				$data->nickname = $nickname;
				$data->error = $register->error;
			}
			$view = $this->load->view('auth/login', array($data), true);
			$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
		}else{
			redirect('/auth/login/');
		}
	}
	public function logout() {
		$this->u->logoutUser();
	}
	public function check() {
		if ($this->is_ajax) {
			
		}
		die('ded');
	}
}

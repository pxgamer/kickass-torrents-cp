<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class faq extends CI_Controller {

	private $_user;

	function __construct() {
		parent::__construct();

		$this->_user = $this->u->getUserFromSession();
		$this->_is_ajax = isset($_POST['is_ajax']);
	}
	
	public function index()	{
		/*
		$faqs = new stdClass;
		$sub_faqs = new stdClass;
		$faqs = $this->c->getParentForums();
		$sub_faqs = $this->c->getSubForums();
		foreach ($faqs as $forum) {
			$subs = array();
			foreach ($sub_faqs as $sub_faq) {
				// printDie($sub_faq);
				if ($sub_faq->parent_forum == $forum->forum_id)
					array_push($subs, $sub_faq);
			}
			$forum->sub_faqs = (object)$subs;
		}
		*/
		// printDie($faqs);
		$view = $this->load->view('faq/index', array(), true);
		$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
	}

	public function show() {
		$entry_url = $this->uri->segment(3);
		$page_num = $this->uri->segment(4)!==null ? (int)$this->uri->segment(4) : 1;
		if ($page_num==0)$page_num=1;
		// printDie($page_num);
		if (preg_match("/^(.*)$/", $entry_url, $m)) {
			//$thread_id = $m[2];
			//if ($entry = $this->c->getThread(4)) {
				$view = $this->load->view('faq/show_entry', array('_user'=>$this->_user), true);
			//}else{
			//	$view = $this->load->view('404/faq', null, true);
			//}
		}else{
			$view = '<div>FAQ entry not Found</div>';
		}
		
		$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
	}
	
}

<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Community extends CI_Controller {

	private $_user;

	function __construct() {
		parent::__construct();

		$this->_user = $this->u->getUserFromSession();
		$this->_is_ajax = isset($_POST['is_ajax']);
	}
	
	public function index()	{
		$forums = new stdClass;
		$sub_forums = new stdClass;
		$forums = $this->c->getParentForums();
		$sub_forums = $this->c->getSubForums();
		foreach ($forums as $forum) {
			$subs = array();
			foreach ($sub_forums as $sub_forum) {
				// printDie($sub_forum);
				if ($sub_forum->parent_forum == $forum->forum_id)
					array_push($subs, $sub_forum);
			}
			$forum->sub_forums = (object)$subs;
		}
		// printDie($forums);
		$view = $this->load->view('community/index', array('forums'=>$forums), true);
		$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
	}

	public function forum() {
		$forums = new stdClass; $view;
		$forum_name = $this->uri->segment(3);
		if ($forum_name) {
			$type = $this->c->checkForum($forum_name);
			if ($type=='parent') {
				$forum = new stdClass;
				$sub_forums = new stdClass;
				$forum = $this->c->getParentForums($forum_name);
				$sub_forums = $this->c->getSubForums($forum->forum_id);
				
				
				$forum->sub_forums = $sub_forums;


				$view = $this->load->view('community/forum_display', array('forum'=>$forum, '_user'=>$this->_user), true);
			}elseif ($type=='child'){
				$forum = new stdClass;
				$forum = $this->c->getForumThreads($forum_name);
				// printDie($forum);
				$view = $this->load->view('community/sub_forum_display', array('forum'=>$forum, '_user'=>$this->_user), true);
			}else{
				redirect('/community/');
			}
			

			
			$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
		}else{
			redirect('/community/');
		}
	}

	public function show() {
		$thread_url = $this->uri->segment(3);
		$page_num = $this->uri->segment(4)!==null ? (int)$this->uri->segment(4) : 1;
		if ($page_num==0)$page_num=1;
		// printDie($page_num);
		if (preg_match("/^(.*)-(\d+)$/", $thread_url, $m)) {
			$thread_id = $m[2];
			if ($thread = $this->c->getThread($thread_id)) {
				$posts = $this->c->getThreadPosts($thread_id, $this->_user, $thread->post_id, $page_num, $thread_url);
				// printDie($posts);
				$this->paginator->initialize(array('base_url'=>'/community/show/'.$thread_url.'/',
													'per_page'=>10,
													'total_rows'=>$posts->count,
													'cur_page'=>$page_num));
				$posts = $posts->posts;
				// printDie($posts);
				$view = $this->load->view('community/show_thread', array('thread'=>$thread, 'posts'=>$posts, '_user'=>$this->_user), true);
			}else{
				$view = $this->load->view('404/community', null, true);
			}
		}else{
			$view = '<div>Thread not Found</div>';
		}
		
		$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
	}

	public function create() {
		if (!$this->_user->acl) redirectDie('/auth/login/');
		$forum_id = $this->uri->segment(3);
		if ($forum_id) {
			if ($forum = $this->c->canWriteInForum($forum_id, $this->_user)) {
				// printDie($forum);
				if ($_POST) {
					$thread = new stdClass;
					$thread->title = clean_input($_POST['title']);
					$thread->url = makeURL($thread->title);
					$thread->content = clean_input($_POST['content']);
					$thread->is_sticky = isset($_POST['is_sticky'])&&$_POST['is_sticky'] ? 1 : 0;
					$thread->forum_id = $forum_id;
					$thread_id = $this->c->writeThread($thread, $this->_user);

					if ($thread_id) {
						redirectDie('/community/show/'.$thread->url.'-'.$thread_id.'/');
					}else{
						redirectDie('/community/');
					}
				}
				$view = $this->load->view('community/create_thread', array('forum'=>$forum, '_user'=>$this->_user), true);
				$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
			}else{
				redirectDie('/community/?error=1');
			}
		}else{
			redirect('/community/?error=2');
		}
	}

	public function thread() {
		$action = $this->uri->segment(3);
		$id = $this->uri->segment(4);
		$view = '';
		if ($action=='edit' && $this->c->canEditThread($id, $this->_user)) {
			if ($_POST) {
				$thread = new stdClass;
				$thread->id = $id;
				$thread->title = isset($_POST['title']) ? $_POST['title'] : null;
				$thread->content = isset($_POST['content']) ? $_POST['content'] : null;
				$thread->is_sticky = isset($_POST['is_sticky']) ? $_POST['is_sticky'] : null;
				$thread->forum_id = isset($_POST['forum_id']) ? $_POST['forum_id'] : null;
				if ($url = $this->c->editThread($thread, $this->_user)) {
					redirectDie($url);
				}
			}else{
				$thread = $this->c->getThread($id);
				$view = $this->load->view('community/edit_thread', array('thread'=>$thread,'_user'=>$this->_user), true);
			}
		}elseif ($action=='delete' && $this->c->canEditThread($id, $this->_user)) {
			if ($_POST) {

			}else{
				
			}
		}elseif ($action=='undelete' && $this->_user->acl>10) {
			if ($_POST) {

			}else{
				$view = $this->load->view('include/confirm_action', array('action'=>"/community/thread/undelete/$id/", 'data'=>null, 'return_uri'=>'/community/'), true);
			}
		}elseif ($action=='stick' && $this->_user->acl>10) {
			if ($_POST) {

			}else{
				$view = $this->load->view('include/confirm_action', array('action'=>"/community/thread/stick/$id/", 'data'=>null, 'return_uri'=>'/community/'), true);
			}
		}elseif ($action=='unstick' && $this->_user->acl>10) {
			if ($_POST) {

			}else{
				$view = $this->load->view('include/confirm_action', array('action'=>"/community/thread/unstick/$id/", 'data'=>null, 'return_uri'=>'/community/'), true);
			}
		}elseif ($action=='lock' && $this->_user->acl>10) {
			if ($_POST) {

			}else{
				$view = $this->load->view('include/confirm_action', array('action'=>"/community/thread/lock/$id/", 'data'=>null, 'return_uri'=>'/community/'), true);
			}
		}elseif ($action=='unlock' && $this->_user->acl>10) {
			if ($_POST) {

			}else{
				$view = $this->load->view('include/confirm_action', array('action'=>"/community/thread/unlock/$id/", 'data'=>null, 'return_uri'=>'/community/'), true);
			}
		}elseif ($action=='move' && $this->_user->acl>10) {

		}elseif ($action=='assign' && $this->_user->acl>16) {

		}elseif ($action=='e') {

		}else{
			if ($this->_is_ajax) {
				$this->o->json('error', 'Unable to perform action.');
				exit();
			}else{
				redirectDie('/community/');
			}	
		}
		$this->load->view('include/template', array('view'=>$view, '_user'=>$this->_user));
	}

	function post() {
		$action = $this->uri->segment(3);
		$id = $this->uri->segment(4);
		$content = isset($_POST['content']) ? clean_input($_POST['content']) : null;
		$reply_id = isset($_POST['pid']) ? (int)$_POST['pid'] : null;
		// printDie(($action=='like'||$action=='dislike')?'T':'F');
		if ($action=='create' && $forum = $this->c->canWriteInThread($id, $this->_user)) {
			printDie('C');
			if (!$content) redirectDie('/community/show/'.$forum->url.'-'.$forum->id.'/');
			$post_id = $this->c->writePost($id, $content, $reply_id, $this->_user);
			redirectDie('/community/post/go_to/'.$post_id);
		}elseif (($action=='edit'||$action=='delete'||$action=='undelete') && $this->c->canEditPost($id, $this->_user)){
			if ($action == 'edit') {
				if ($content) {
					$content = $this->c->editPost($id, $content, $this->_user);
					$this->o->json('ok', $content);
				}else{
					$post = $this->c->getEditPost($id);
					if (!$post) redirectDie('/community/');
					$this->o->json('ok', $this->load->view('community/edit_post', array('post'=>$post), true));
				}
			}elseif($action=='undo_rating') {
				if ($this->c->unratePost($id, $this->_user)) {

				}else{
					
				}
			}elseif ($action=='delete') {
				$this->c->deletePost($id, $this->_user);
				$this->o->json('hide', 'post'.$id);
			}elseif ($action=='undelete') {
				$this->c->undeletePost($id, $this->_user);
				$this->o->json('show', 'post'.$id);
			}
		}elseif($action=='like'||$action=='dislike') {
			$like = $action=='like'?1:0;
			if ($this->c->ratePost($id, $like, $this->_user)) {
				$this->o->json('show', 'post'.$id);
			}else{
				$this->o->json('error', 'An error occurred');
			}
			// printDie('');
		}elseif($action='go_to') {
			$thread = $this->c->go_to($id, $this->_user);
			redirectDie('/community/show/'.$thread->url.'-'.$thread->id.'/'.($thread->page?$thread->page:'').'/#post'.$id);
		}else{
			if ($this->_is_ajax) {
				$this->o->json('error', 'Unable to perform action.');
			}else{
				redirectDie('/community/');
			}
		}
	}
	
}

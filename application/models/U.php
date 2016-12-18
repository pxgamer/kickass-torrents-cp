<?php 
	class U extends CI_Model {

	
	
	function __construct() {
		parent::__construct();
		

	}


	// function advanced_search($input = null, $page = 1, $sort = 'title', $order = 'asc') {
	// 	if (!$input) return false;
	// 	$input = preg_replace_callback('#\"([^"]*)\"#', function($m){
	// 		return('"'. str_replace(' ', '%20', $m[1]) .'"');
	// 	}, $input);
	// 	$input = preg_replace_callback('#\"([^"]*)\"#', function($m){
	// 		return('"'. str_replace('|', '%7B', $m[1]) .'"');
	// 	}, $input);
	// 	$input = str_replace('"|"', '"|"', str_replace('| ', ' ', $input));
	// 	$parts = explode(' ', $input);
	// 	$i=0;
	// 	foreach ($parts as $part) {
	// 		$partsb[$i] = explode('|', $part);
	// 		$i++;
	// 	}

	// 	$match = 'genre|year|id|rating|director|writer|cast|plot';
	// 	$match = '/^(-*)('.$match.'):(.*)/i';
		
	// 	$this->db->select('*')->from('movies');
	// 	foreach ($partsb as $part) {
	// 		$this->db->group_start();
	// 		$or_index=false;
	// 		foreach($part as $subPart) {
	// 			$field_to_search = 'title';
	// 			$value_to_match = $subPart;
	// 			$not_to_match = false;
	// 			if (preg_match($match, $subPart)) {
	// 				preg_match($match, $subPart, $m);
	// 				$not_to_match = $m[1]?true:false;
	// 				$field_to_search = $m[2];
	// 				$value_to_match = $m[3];
	// 			}
	// 			$this->query_template($field_to_search, $value_to_match, $or_index, $not_to_match);
	// 			$or_index = true;
	// 		}
	// 		$this->db->group_end();
	// 	}
	// 	$this->db->order_by($sort, $order);
	// 	$this->db->limit(10, ($page-1)*10);
	// 	$result = $this->db->get()->result();
	// 	print '<div style="margin-left:15px;"><a class="btn btn-default" style="margin-bottom:5px;" onclick="$(this).next().toggle();">Toggle pre element</a><pre style="display:none;">Last:'.$this->db->last_query().'</pre></div>';
	// 	return $result;
	// }

	// function query_template($field = null, $value = null, $or = false, $not = false) {
	// 	$field = rtrim($field, 's');
	// 	if ($field=='director') $field = 'directors';
	// 	if ($field=='writer') $field = 'writers';
		
	// 	$value = str_replace('%20', ' ', ltrim(rtrim($value, '"'), '"'));

		
	// 	if ($or) {
	// 		$this->db->or_group_start();
	// 	} else {
	// 		$this->db->group_start();
	// 	}
	// 	switch($field) {
	// 		case 'genre':
	// 		case 'cast':
	// 		case 'writers':
	// 		case 'directors':
	// 			if ($not) {
	// 				$this->db->not_like($field, $value, 'none');
	// 				$this->db->not_like($field, $value.'|', 'after');
	// 				$this->db->not_like($field, '|'.$value, 'before');
	// 				$this->db->not_like($field, '|'.$value.'|');
	// 			}else{
	// 				$this->db->like($field, $value, 'none');
	// 				$this->db->or_like($field, $value.'|', 'after');
	// 				$this->db->or_like($field, '|'.$value, 'before');
	// 				$this->db->or_like($field, '|'.$value.'|');
	// 			}
	// 			break;
	// 		case 'year':
	// 		case 'rating':
	// 			$value = (int) $value;
	// 			$this->db->where($field, $value);
	// 			break;
	// 		case 'plot':
	// 			$this->db->like($field, $value);
	// 			break;
	// 		case 'title':
	// 		default:
	// 			$this->db->like('title', $value);
	// 			$this->db->or_like('year', $value);
	// 	}
	// 	$this->db->group_end();
	// }

	function getUserByName($username = '', $everything = false) {
		$user = new stdClass;
		if ($everything) {
			$user = $this->db->query("SELECT * FROM `users`".
								(true?"LEFT JOIN `users_sensitive`
								ON users_sensitive.id_hash = users.id_hash ":"").
								"LEFT JOIN `users_info`
								ON users_info.id_hash = users.id_hash
								LEFT JOIN `ranks`
								ON ranks.acl = users.acl AND ranks.uploader_status = users.uploader_status
								WHERE users.username = ?", array($username))->row();
		}else{
			$user = $this->db->query("SELECT * FROM `users`".
								(true?"LEFT JOIN `users_sensitive`
								ON users_sensitive.id_hash = users.id_hash ":"").
								"LEFT JOIN `ranks`
								ON ranks.acl = users.acl AND ranks.uploader_status = users.uploader_status
								WHERE users.username = ?", array($username))->row();
		}
		if ($everything && $user->id_hash) {
			$user->stats = $this->db->query("SELECT * FROM users_stats WHERE id_hash = ?", array($user->id_hash))->row();
		}

		$user->online_status = $user->online_status ? 'online' : 'offline';

		return $user;
	}
	function getUserByIdHash($id_hash = '') {
		return $this->db->query("SELECT * FROM users WHERE username = ?", array($id_hash))->row();
	}
	function attemptLogin($email = '', $password = '') {
		$account = $this->db->query("SELECT * FROM users_sensitive WHERE email = ?", array($email))->row();
		if ($account->password) {
			if (password_verify($password, $account->password)) {
				// print 'password_verify true';
				// printDie($account);
				return $account->id_hash;
			}else{
				// print '<p>Password: '.$password;
				// print '<p>Password: '.password_hash($password, PASSWORD_BCRYPT);
				// print '<p>Password: '.$account->password;
				// print '<p>Password: '.password_verify($password, $account->password);
				// printDie($account);
				return false;
			}
		}else{
			print 'account->password false';
			return false;
		}
	}
	function attemptRegister($email = '', $username = '', $password = '') {
		$data = new stdClass;
		$username_in_use = $this->db->query("SELECT * FROM users WHERE username = ?", array($username))->num_rows();
		$email_in_use = $this->db->query("SELECT * FROM users_sensitive WHERE email = ?", array($email))->num_rows();
		if ($username_in_use || $email_in_use) {
			$data->successful = false;
			$data->error = $email_in_use ? 'Email in use' : ($username_in_use ? 'Username in use' : 'Error');
		}else{
			$password = password_hash($password, PASSWORD_BCRYPT);
			$insert_users = $this->db->query("INSERT INTO users 
										(id, id_hash, is_deleted, online_status, username, reputation, acl, uploader_status, custom_title) VALUES 
										(NULL, NULL, 0, 1, ?, 0, 1, 0, '')",
										array($username));
			if ($insert_users) {
				$id = $this->db->query("SELECT id FROM users WHERE username = ?", array($username))->row()->id;
				if (is_nan($id)) return false;

				$id_hash = md5('id_'.$id);

				$update_hash = $this->db->query("UPDATE users SET id_hash = ? WHERE id = ?", array($id_hash, $id));

				$user_hash = $this->generateUserHash($id_hash, true);
				$insert_info = $this->db->query("INSERT INTO users_info
											(id_hash, sex, country, join_date, last_active, avatar, signature, status_message) VALUES 
											(?, 'Unspecified', '', ".time().", ".time().", '/assets/images/commentlogo.png', '', '')",
											array($id_hash));
				$insert_sensitive = $this->db->query("INSERT INTO users_sensitive
											(id_hash, user_hash, email, password) VALUES 
											(?, ?, ?, ?)",
											array($id_hash, $user_hash, $email, $password));
				$insert_stats = $this->db->query("INSERT INTO users_stats
											(id_hash, torrents_uploaded, dmca_count, ideas_count, comments_left, comments_liked, torrents_downloaded, days_active, deleted_users, muted_users, deleted_torrents, restored_torrents, status_updates, comment_updates, torrents_bookmarked, searches_made, reported_users, reported_torrents, reported_threads, posts_left, post_updates, posts_liked, threads_written, blogs_written, ideas_written, ideas_approved, ideas_completed, uploaders_made, vuls_made, av_ratings_made, questions_asked, avatar_changed, friends, torrents_moved, threads_moved, signature_updates, liked_torrents, liked_comments, threads_liked, liked_threads) VALUES
											(?, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)", array($id_hash));
				
				
			}

			$data->successful = $insert_users ? true : false;
			$data->error = !$insert_users ? 'An unexpected error occurred' : null;
			$data->id_hash = $id_hash;
		}
		return $data;
	}
	function generateUserHash($id_hash, $return = false) {
		// check id hash is user
		$user_hash = md5('user_'.$id_hash.time());
		if ($return) return $user_hash;
	}
	function setCustomTitle($id_hash, $title) {
		$title = preg_replace("/^[,./?;':\"\[\]\\\{\}\|`~!@#$%^&*\(\)_\+=\-\w ]+$/", '', $title);
		$title = preg_replace("\s+", "\s", $title);
		if (!$title || $title==" ") return false;
		return $this->db->query("UPDATE users SET custom_title = ? WHERE id_hash = ?", array($title, $id_hash));
	}

	function getUserData($id_hash) {
		$user = $this->db->query("SELECT users.id_hash as id, users.acl, is_deleted, username, reputation, users.uploader_status, ranks.title as default_title, ranks.acl_class, custom_title, users_info.avatar as avatar FROM users LEFT JOIN ranks ON users.acl = ranks.acl AND users.uploader_status = ranks.uploader_status LEFT JOIN users_info ON users.id_hash = users_info.id_hash WHERE users.id_hash = ?", array($id_hash))->row();
		return $user;
	}

	function getUserBadgeData($id_hash) {
		$user = $this->db->query("SELECT users.id_hash as id, users.acl, is_deleted, username, reputation, users.uploader_status, users_info.join_date, ranks.title as default_title, ranks.acl_class, custom_title, users_info.avatar as avatar, users.online_status FROM users LEFT JOIN ranks ON users.acl = ranks.acl AND users.uploader_status = ranks.uploader_status LEFT JOIN users_info ON users.id_hash = users_info.id_hash WHERE users.id_hash = ?", array($id_hash))->row();
		if ($user) {
			$user->online_status = $user->online_status ? 'online' : 'offline';
		}
		return $user;
	}

	function loginUser($id_hash) {
		$this->session->set_userdata('user', $this->getUserData($id_hash));
		// print '<p>loginUser():<br>';
		// printDie($this->session);
	}

	function logoutUser() {
		$this->session->unset_userdata('user');
		$this->session->set_userdata('user', (object)array('acl'=>0, 'username'=>'Anonymous'));
		redirect('/auth/login/');
	}

	function getUserFromSession() {
		// print '<p>getUserFromSession():<br>';
		// printDie($this->session);
		if ($this->session->userdata('user') == null) {
			$this->session->set_userdata('user', (object)array('acl'=>0, 'username'=>'Anonymous'));
		}
		return $this->session->userdata('user');
	}

	function adjustReputation($_user, $amount = 1){
		if (isset($_user->acl) && !$_user->acl) return false;
		$this->db->set('reputation', 'reputation + '.$amount, FALSE);
		$this->db->where('id_hash', $_user->id);
		$this->db->update('users');
	}

}
<?php

class C extends CI_Model {

	function __construct() {
		parent::__construct();
	}
	function getParentForums($forum_url = null) {
		if ($forum_url) {
			return $this->db->query("SELECT * FROM forums_parents WHERE url = ?", array($forum_url))->row();
		}else{
			return $this->db->query("SELECT * FROM forums_parents")->result();
		}
	}
	function getSubForums($forum_id = null) {
		$forums = new stdClass;
		if ($forum_id) {
			$forums = $this->db->query("SELECT * FROM forums LEFT JOIN posts ON forums.latest_post = posts.post_id WHERE forums.parent_forum = ?", array($forum_id))->result();
		}else{
			$forums = $this->db->query("SELECT * FROM forums LEFT JOIN posts ON forums.latest_post = posts.post_id")->result();
		}
		$thread_ids = array();
		$user_ids = array();
		foreach ($forums as $forum) {
			if ($forum->user_id && !in_array($forum->user_id, $user_ids))
				array_push($user_ids, $forum->user_id);
			if ($forum->thread_id)
				array_push($thread_ids, (int)$forum->thread_id);
		};
		$threads = $this->db->query("SELECT * FROM threads WHERE thread_id IN (".implode(',', $thread_ids).")")->result();

		$users = $this->db->query("SELECT users.id_hash as id, users.acl, is_deleted, username, reputation, users.uploader_status, users_info.join_date, ranks.title as default_title, ranks.acl_class, custom_title, users_info.avatar as avatar, users.online_status FROM users LEFT JOIN ranks ON users.acl = ranks.acl AND users.uploader_status = ranks.uploader_status LEFT JOIN users_info ON users.id_hash = users_info.id_hash WHERE users.id_hash IN (?)", array(implode(',', $user_ids)))->result();
		foreach ($users as $user) {
			$user->online_status = $user->online_status ? 'online' : 'offline';
		}
		foreach ($forums as $forum) {
			if (isset($forum->user_id)) {
				foreach ($users as $user) {
					if ($forum->user_id = $user->id)
						$forum->user = $user;
				}
			}
		}
		
		foreach ($forums as $forum) {
			if (isset($forum->latest_post)) {
				foreach ($threads as $thread) {
					if ($forum->thread_id == $thread->thread_id)
						$forum->thread = $thread;
				}
			}
		}




		return $forums;
	}

	function checkForum($url) {
		$parent = $this->db->query("SELECT * FROM forums_parents WHERE url = ?", array($url))->row();
		$child = $this->db->query("SELECT * FROM forums WHERE url = ?", array($url))->row();
		return $parent ? 'parent' : ($child ? 'child' : '');
	}

	// function getForumThreads($url) {
	// 	$child = $this->db->query("SELECT * FROM forums WHERE url = ?", array($url))->row();
	// 	$parent = $this->db->query("SELECT * FROM forums_parents WHERE forum_id = ?", array($child->parent_forum))->row();
	// 	$threads = $this->db->query("SELECT thread_id, user_id, forum_id, is_sticky, threads.title, post_id, threads.url as url, last_post, rating, view_count, poll_id, id as user_id, id_hash, is_deleted, online_status, username, reputation, users.acl, users.uploader_status, acl_class, users.custom_title, ranks.title as default_title FROM threads LEFT JOIN users ON threads.user_id = users.id_hash LEFT JOIN ranks ON ranks.acl = users.acl AND ranks.uploader_status = users.uploader_status WHERE forum_id = ?", array($child->id))->result();
	// 	if (!$threads)
	// 		$threads = new stdClass;
	// 	foreach ($threads as $thread) {
	// 		$thread->online_status = $thread->online_status ? 'online' : 'offline';
	// 	}
	// 	$parent->child = new stdClass; $parent->child->threads = new stdClass;
	// 	$parent->child = $child;
	// 	$parent->child->threads = $threads;
	// 	// printDie($parent);
	// 	return $parent;
		
	// }

	function getForumThreads($url) {
		$child = $this->db->query("SELECT * FROM forums WHERE url = ?", array($url))->row();
		$parent = $this->db->query("SELECT * FROM forums_parents WHERE forum_id = ?", array($child->parent_forum))->row();
		$threads = $this->db->query("SELECT * FROM threads WHERE forum_id = ?", array($child->id))->result();
		if (!$threads)
			$threads = new stdClass;

		$user_ids = array();
		foreach ($threads as $thread) {
			if (!in_array($thread->user_id, $user_ids))
				array_push($user_ids, $thread->user_id);
			if ($thread->last_post_user_id && !in_array($thread->last_post_user_id, $user_ids))
				array_push($user_ids, $thread->last_post_user_id);
		}

		$users = $this->db->query("SELECT users.id_hash as id, users.acl, is_deleted, username, reputation, users.uploader_status, users_info.join_date, ranks.title as default_title, ranks.acl_class, custom_title, users_info.avatar as avatar, users.online_status FROM users LEFT JOIN ranks ON users.acl = ranks.acl AND users.uploader_status = ranks.uploader_status LEFT JOIN users_info ON users.id_hash = users_info.id_hash WHERE users.id_hash IN (?)", array(implode(',', $user_ids)))->result();
		foreach ($users as $user) {
			$user->online_status = $user->online_status ? 'online' : 'offline';
		}
		foreach ($threads as $thread) {
			foreach ($users as $user) {
				if ($thread->user_id == $user->id) {
					$thread->user = $user;
				}
				if ($thread->last_post_user_id == $user->id) {
					$thread->last_post_user = $user;
				}
			}
		}

		$parent->child = new stdClass; $parent->child->threads = new stdClass;
		$parent->child = $child;
		$parent->child->threads = $threads;
		// printDie($parent);
		return $parent;
		
	}

	function getThread($thread_id) {
		$thread = $this->db->query("SELECT * FROM threads LEFT JOIN posts ON threads.post_id = posts.post_id WHERE threads.thread_id = ?", array($thread_id))->row();
		if ($thread && isset($thread->content)) {
			$forum = $this->db->query("SELECT * FROM forums WHERE id = ?", $thread->forum_id)->row();
			if (!$forum) return null; //not sure this would ever happen tho
			$thread->forum = $forum;
			$user = $this->u->getUserBadgeData($thread->user_id);
			if (!$user) return null;
			if ($thread->edited_user_id) {
				$thread->edited_user = $this->u->getUserBadgeData($thread->user_id);
			}
			$thread->user = $user;
			$thread->content = $this->o->parse_bbcode($thread->content);
			// printDie($thread);
			return $thread;
		}else{
			return null;
		}
	}
	function getThreadPosts($thread_id, $_user, $thread_post, $page_num = 1, $thread_url) {
		if ($_user->acl >= 10) {
			$count = $this->db->query("SELECT COUNT(post_id) as count FROM posts WHERE thread_id = ? AND post_id != ?", array($thread_id, $thread_post))->row()->count;
		}else{
			$count = $this->db->query("SELECT COUNT(post_id) as count FROM posts WHERE thread_id = ? AND post_id != ? AND is_deleted = 0", array($thread_id, $thread_post))->row()->count;
		}
		if ($count) {
			if ($page_num > ceil($count/10)) {
				$page_num = ceil($count/10);	
				redirectDie('/community/show/'.$thread_url.'/'.$page_num.'/');
			}
		}else{
			$page_num=1;
		}

		$limit = ($page_num-1)*10;
		$limit = $limit == 0 ? 'LIMIT 10' : "LIMIT $limit, 10";

		$posts = new stdClass;
		if ($_user->acl >= 10) {
			$posts = $this->db->query("SELECT * FROM posts WHERE thread_id = ? AND post_id != ? $limit", array($thread_id, $thread_post))->result();
		}else{
			$posts = $this->db->query("SELECT * FROM posts WHERE thread_id = ? AND post_id != ? AND is_deleted = 0 $limit", array($thread_id, $thread_post))->result();
		}
		// printDie($this->db->last_query());
		$user_ids = array();
		$reply_ids = array();
		$ratings = array();
		foreach ($posts as $post) {
				if (!in_array($post->user_id, $user_ids))
					array_push($user_ids, $post->user_id); // user_id => $user_ids;
				if ($post->edited_user_id && !in_array($post->edited_user_id, $user_ids))
					array_push($user_ids, $post->edited_user_id); // edited_user_id => $user_ids;
				if ($post->reply_user_id && !in_array($post->reply_user_id, $user_ids))
					array_push($user_ids, $post->reply_user_id); // reply_user_id => $user_ids;
				if ($post->reply_id && !in_array($post->reply_id, $reply_ids))
					array_push($reply_ids, $post->reply_id); // reply_id => $reply_ids
				if ($post->user_id != $_user->id)
					array_push($ratings, $post->post_id);
		}
		$ratings = $this->db->query("SELECT post_id, like_or_dislike, date_performed FROM rated_posts WHERE post_id IN ('".implode("','", $ratings)."')")->result();
		$replies = $this->db->query("SELECT * FROM posts WHERE thread_id = ? AND post_id IN (?)", array($thread_id, implode(',', $reply_ids)))->result();
		$users = $this->db->query("SELECT users.id_hash as id, users.acl, is_deleted, username, reputation, users.uploader_status, users_info.join_date, ranks.title as default_title, ranks.acl_class, custom_title, users_info.avatar as avatar, users.online_status FROM users LEFT JOIN ranks ON users.acl = ranks.acl AND users.uploader_status = ranks.uploader_status LEFT JOIN users_info ON users.id_hash = users_info.id_hash WHERE users.id_hash IN ('".implode("','", $user_ids)."')")->result();

		
		foreach ($users as $user) {
			$user->online_status = $user->online_status ? 'online' : 'offline';
		}
		foreach ($posts as $post) { // cycle each post
			$post->content = $this->o->parse_bbcode($post->content);
			if ($post->reply_id) { // is it a reply
				foreach ($replies as $reply) { // look for its reply post 
					if ($reply->post_id == $post->reply_id) { // found reply post
						$post->reply = $reply; // set reply object
						$post->reply->content = $this->o->parse_bbcode($post->reply->content);
					}
				}
			}
			foreach ($users as $user) {
				if ($post->user_id == $user->id) {
					$post->user = $user;
				}
				if ($post->edited_user_id == $user->id) {
					$post->edited_user = $user;
				}
				if ($post->reply_user_id == $user->id) {
					if ($post->reply)
						$post->reply->user = $user;
				}
			}
			foreach ($ratings as $rating) {
				if ($rating->post_id == $post->post_id)
					$post->ratings = $rating;
			}
		}
		$return = new stdClass;
		$return->count = $count;
		$return->posts = $posts;
		return $return;
	}

	function canReadForum($forum_id, $_user) {
		$forum = $this->db->query("SELECT * FROM forums WHERE id = ?", array($forum_id))->row();
		if ($forum) {
			if ($_user->acl >= $forum->read_acl) {
				$parent = $this->db->query("SELECT * FROM forums_parents WHERE forum_id = ?", array($forum->id))->row();
				if ($parent) {
					$forum->parent = $parent;
					return $forum;
				}
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	function canWriteInForum($forum_id, $_user) {

		$forum = $this->db->query("SELECT * FROM forums WHERE id = ?", array($forum_id))->row();
		if ($forum) {
			if ($_user->acl && $_user->acl >= $forum->write_acl) {
				$parent = $this->db->query("SELECT * FROM forums_parents WHERE forum_id = ?", array($forum->id))->row();
				if ($parent) {
					$forum->parent = $parent;
					return $forum;
				}
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	function canWriteInThread($thread_id, $_user) {
		$thread = $this->db->query("SELECT * FROM threads WHERE thread_id = ?", array($thread_id))->row();
		if ($thread) {
			if ($forum = $this->canWriteInForum($thread->forum_id, $_user)) {
				$forum->thread = $thread;
				return $forum;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}

	function writeThread($thread, $_user) {
		$thread->is_sticky = $_user->acl < 10 ? 0 : ($thread->is_sticky ? 1 : 0);

		$this->db->insert('threads', array('thread_id' => NULL,
											'user_id' => $_user->id,
											'forum_id' => $thread->forum_id,
											'is_sticky' => $thread->is_sticky,
											'title' => $thread->title,
											'url' => $thread->url,
											'post_id' => NULL,
											'last_post' => 0,
											'last_post_user_id' => NULL,
											'rating'=>0,
											'view_count' => 0,
											'post_count' => 0,
											'poll_id' =>  NULL));
		$thread_id = $this->db->insert_id();
		$this->db->insert('posts', array('post_id'=>NULL,
											'thread_id'=>$thread_id,
											'user_id'=>$_user->id,
											'content'=>$thread->content,
											'date_created'=>time(),
											'date_edited'=>0,
											'is_deleted'=>0,
											'edited_user_id'=>NULL,
											'reply_id'=>0,
											'reply_user_id'=>NULL,
											'rating'=>0,
											));
		$post_id = $this->db->insert_id();
		$this->db->query("UPDATE threads SET post_id = ? WHERE thread_id = ?", array($post_id, $thread_id));
		$this->updateLastPosts($thread->forum_id, $thread_id);

		$this->u->adjustReputation($_user, 2);
		return $thread_id;
	}
	function editThread($thread, $_user) {
		if ($_user->acl >= 10) {
			$this->db->set('is_sticky', ($thread->is_sticky ? 1 : 0));
			$this->db->set('forum_id', (int)$thread->forum_id);
		}
		$thread->title = clean_input($thread->title);
		$thread->content = clean_input($thread->content);
		if ($thread->title) {
			$thread->url = makeURL($thread->title);
			$this->db->set('title', $thread->title);
			$this->db->set('url', $thread->url);
		}
		$this->db->where('thread_id', $thread->id);
		$this->db->update('threads');

		$post = $this->db->query("SELECT url, post_id as id FROM threads WHERE thread_id = ?", array($thread->id))->row();
		if ($post) {
			if ($thread->content) {
				$this->db->set('content', $thread->content);
			}
			$this->db->set('date_edited', time());
			$this->db->set('edited_user_id', $_user->id);
			$this->db->where('post_id', $post->id);
			$this->db->update('posts');
		}

		return '/community/show/'.$post->url.'-'.$thread->id.'/';
	}

	function writePost($thread_id, $content, $reply_id, $_user) {
		$reply = $this->db->query("SELECT user_id FROM posts WHERE post_id = ? AND thread_id = ?", array($reply_id, $thread_id))->row(); // make sure same thread being sourced from
		$reply_user_id = $reply ? $reply->user_id : NULL;
		$reply_id = $reply ? $reply_id : 0;
		$this->db->insert('posts', array('post_id'=>NULL,
											'thread_id'=>$thread_id,
											'user_id'=>$_user->id,
											'content'=>$content,
											'date_created'=>time(),
											'date_edited'=>0,
											'is_deleted'=>0,
											'edited_user_id'=>NULL,
											'reply_id'=>$reply_id,
											'reply_user_id'=>$reply_user_id,
											'rating'=>0
											));
		$post_id = $this->db->insert_id();

		$this->db->query("UPDATE threads SET last_post = ? WHERE thread_id = ?", array($post_id, $thread_id));
		$forum = $this->db->query("SELECT forum_id as id FROM threads WHERE thread_id = ?", array($thread_id))->row();
		if ($forum)
			$this->db->query("UPDATE forums SET latest_post = ? WHERE id = ?", array($post_id, $forum->id));

		$this->u->adjustReputation($_user, 1);
		return $post_id;
	}
	function canEditThread($thread_id, $_user) {
		if ($_user->acl >= 10) return true;
		$thread = $this->db->query("SELECT user_id FROM threads WHERE thread_id = ?", array($thread_id))->row();
		return ($thread->user_id==$_user->id);
	}
	function canEditPost($post_id, $_user) {
		if ($_user->acl >= 10) return true;
		$post = $this->db->query("SELECT userid FROM posts WHERE post_id = ?", array($post_id))->row();
		return ($post->user_id==$_user->id);
	}
	function editPost($post_id, $content, $_user) {
		$data = array('content'=>$content,
						'date_edited'=>time(),
						'edited_user_id'=>$_user->id);
		$this->db->where('post_id', $post_id);
		$this->db->update('posts', $data);
		return $this->o->parse_bbcode($content);
	}
	function deletePost($post_id, $_user) {
		$this->db->set('is_deleted', 1)->where('post_id', $post_id)->update('posts');
		if ($this->db->affected_rows()) {
			$user = $this->db->query("SELECT user_id as id FROM posts WHERE post_id = ?", array($post_id))->row();
			$this->u->adjustReputation($user, -1);
			if ($_user->acl>10 && $_user->id!=$user->id)
				$this->u->adjustReputation($_user, 1);
		}

		$is_last = $this->db->query("SELECT forum_id, thread_id FROM threads WHERE last_post = ? LIMIT 1", array($post_id))->row();
		if ($is_last) {
			$this->updateLastPosts($is_last->forum_id, $is_last->thread_id);
		}		
	}
	function undeletePost($post_id, $_user) {
		$this->db->set('is_deleted', 0)->where('post_id', $post_id)->update('posts');
		if ($this->db->affected_rows()) {
			$user = $this->db->query("SELECT user_id as id FROM posts WHERE post_id = ?", array($post_id))->row();
			$this->u->adjustReputation($user, 1);
			if ($user->id != $_user->id)
				$this->u->adjustReputation($_user, 1);
		}
		$is_last = $this->db->query("SELECT forum_id, thread_id FROM threads WHERE post_id > ? LIMIT 1", array($post_id))->row();
		if ($is_last) {
			$this->updateLastPosts($is_last->forum_id, $is_last->thread_id);
		}
	}
	function updateLastPosts($forum_id, $thread_id) {
		$thread_last = $this->db->query("SELECT post_id FROM `posts` WHERE thread_id = ? AND is_deleted = 0 ORDER BY post_id DESC LIMIT 1", array($thread_id))->row();
		$forum_threads = $this->db->query("SELECT thread_id FROM threads WHERE forum_id = ?", array($forum_id))->result();
		$thread_ids = array();
		foreach ($forum_threads as $thread) {
			array_push($thread_ids, $thread->thread_id);
		}
		$forum_last = $this->db->query("SELECT post_id FROM `posts` WHERE thread_id IN (".implode(',',$thread_ids).") AND is_deleted = 0 ORDER BY post_id DESC LIMIT 1")->row();
		
		$this->db->set('last_post', $thread_last->post_id)->where('thread_id', $thread_id)->update('threads');
		$this->db->set('latest_post', $forum_last->post_id)->where('id', $forum_id)->update('forums');
	}
	function go_to($post_id, $_user) {
		$thread = $this->db->query("SELECT threads.url, threads.thread_id as id FROM posts LEFT JOIN threads ON posts.thread_id = threads.thread_id WHERE posts.post_id = ?", array($post_id))->row();
		// $posts = $this->db->query("SELECT COUNT(post_id) FROM posts WHERE thread_id = ? AND post_id <= ?", array($post->thread_id, $post_id))->result();
		$posts = $this->db->query("SELECT COUNT(post_id) as count FROM posts WHERE thread_id = ? AND post_id <= ?", array($thread->id, $post_id))->row()->count;
		$page = ceil($posts/10);
		$thread->page = $page;
		// printDie($thread);
		return $thread;
	}
	function getEditPost($id) {
		return $this->db->query("SELECT * FROM posts WHERE post_id = ?", array($id))->row();
	}
	function ratePost($post_id, $like, $_user) {
		if (!$_user->acl) return false;
		$post = $this->db->query("SELECT user_id FROM posts WHERE post_id = ?", array($post_id))->row();
		if ($post->user_id == $_user->id) return false;
		$liked = $this->db->query('INSERT IGNORE INTO `rated_posts`(`post_id`,`user_id`,`like_or_dislike`,`date_performed`) VALUES (?,?,?,?)', array($post_id, $_user->id, $like?1:0, time()));
		if ($this->db->affected_rows()) {
			$this->db->query("UPDATE posts SET rating = rating+1 WHERE post_id = ?", array($post_id));
			$this->u->adjustReputation($_user, 1);
			return true;
		}else{
			return false;
		}
	}
	function urratePost($post_id, $_user) {
		if (!$_user->acl) return false;
		$liked = $this->db->query('DELETE FROM `rated_posts` WHERE post_id = ? AND user_id', array($post_id, $_user->id));
		if ($this->db->affected_rows()) {
			$this->db->query("UPDATE posts SET rating = rating-1 WHERE post_id = ?", array($post_id));
			$this->u->adjustReputation($_user, -1);
			return true;
		}else{
			return false;
		}
	}
}
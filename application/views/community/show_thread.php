<h2 class="floatleft">
	<span itemprop="name" class="inplace-editor" id="thread_title"><?=$thread->title?></span>
</h2>
<div class="buttonsLine floatright">
	<form action="/community/search/" method="get" accept-charset="utf-8">
		<input name="search" class="textinput" value="" type="text">
		<input name="thread" value="<?=$thread->url?>-<?=$thread->thread_id?>" type="hidden">
		<button onclick="$(this).parent().attr('action', '/community/search/thread/').submit();" class="siteButton bigButton"><span>search this thread</span>
		</button>
		<button type="submit" class="siteButton bigButton"><span>community search</span>
		</button>
	</form>
</div>
<br class="clear">
<div class="font11px lightgrey floatleft botmarg15px"> in <a href="/community/">Community</a> &gt;
	<a href="/community/forum/<?=$thread->forum->url?>/"><?=$thread->forum->title?></a>
</div>

<div class="floatright">
	<?= $this->paginator->create_links(); ?>
</div>
<div class="commentHeadLine borderrad3px lightivorybg line160perc">
	<div class="floatright">
		<a href="/community/show/<?=$thread->url?>-<?=$thread->thread_id?>/">
			<?=getRelativeTime($thread->date_created)?>
		</a>
		<a class="ajaxLink ka ka16 ka-share ka-grey" href="/community/share/post/<?=$thread->post_id?>/" title="Share"></a>
	</div>
	<div class="floatleft">
		<div class="smallbuttonsline">
			<?php if ($_user->acl>=10||($_user->acl&&$_user->id==$thread->user_id)): ?>
				<a href="javascript:deletePost(<?=$thread->post_id?>);" class="ka ka16 ka-red ka-delete" title="Delete post"></a>
				<a href="javascript:editPost(<?=$thread->post_id?>);" class="ka ka16 ka-grey ka-edit" title="Edit post"></a>
				<?php if ($_user->acl>=10): ?>
					<a href="/moderator/eventlog/post/<?=$thread->post_id?>/" class="ka ka16 ka-grey ka-list ajaxLink" title="Events for this post"></a>
				<?php endif; ?>
			<?php endif; ?>
		</div>
	</div>
</div>
<div id="post<?=$thread->post_id?>">
	<div class="commentbody">
		<div class="userPicSize100px">
			<?php $this->load->view('include/user_badge_community', array('user'=> $thread->user));?>
		</div>
		<div class="commentcontent">
			<div class="rate rated">
				<?php if($_user->acl && $_user->id != $thread->user_id): ?>
					<a class="ka kasmall ka16 ka-thumbs-down ka-red"  onclick="rateThread(<?=$thread->thread_id?>, false);"></a>
					<a class="ka kasmall ka16 ka-thumbs-up" onclick="rateThread(<?=$thread->thread_id?>, true);"></a>
				<?php endif; ?>
				<a href="/community/thread/votes/<?=$thread->thread_id?>/" title="Votes for this thread" class="ajaxLink ratemark <?=$thread->rating>0?'plus':'minus'?>"><i class="ka ka-arrow2-<?=$thread->rating>=0?'up':'down'?>"></i><?=$thread->rating?></a>
			</div>
			<!-- div class="rate"-->
			<div class="post_content" id="content_<?=$thread->post_id?>"><?=$thread->content?></div>
			<?php if ($thread->date_edited): ?>
				<p class="font11px lightgrey italic" id="edited_<?=$thread->post_id?>">Last edited by <?php $this->load->view('include/user_badge_inline', array('user'=>$thread->edited_user)) ?>, <?=getRelativeTime($thread->date_edited)?></p>
			<?php endif; ?>
			<div class="floatright smallButtonsline"></div>
		</div>
	</div>
</div>
<?php foreach($posts as $post): ?>
	<div class="thread_post <?=$post->is_deleted?'deletedPost':''?>">
	<div class="commentHeadLine borderrad3px lightivorybg line160perc">
		<div class="floatright">
			<a href="/community/show/<?=$thread->url?>-<?=$thread->thread_id?>/?post=<?=$post->post_id?>">
				<?=getRelativeTime($post->date_created)?>
			</a>
			<a class="ajaxLink ka ka16 ka-share ka-grey" href="/community/share/post/<?=$post->post_id?>/" title="Share"></a>
		</div>
		<div class="floatleft">
			<div class="smallbuttonsline">
				<?php if ($_user->acl>=10||($_user->acl&&$_user->id==$post->user_id)): ?>
					<a onclick="deletePost(<?=$post->post_id?>);" style="display:<?=$post->is_deleted?'none':''?>" class="ka ka16 ka-red ka-delete delete_button" title="Delete post"></a>
					<?php if ($_user->acl>10): ?>
						<a onclick="undeletePost(<?=$post->post_id?>);" style="display:<?=$post->is_deleted?'':'none'?>" class="smallButton kaButton greenButton undelete_button" title="Undelete post"><i class="ka ka-refresh"></i> deleted post</a>
					<?php endif; ?>
					<?php if (!$post->is_deleted || $_user->acl>=10): ?>
						<a onclick="editPost(<?=$post->post_id?>);" class="ka ka16 ka-grey ka-edit" title="Edit post"></a>
					<?php endif; ?>
					<?php if ($_user->acl>=10): ?>
						<a href="/moderator/eventlog/post/<?=$post->post_id?>/" class="ka ka16 ka-grey ka-list ajaxLink" title="Events for this post"></a>
						<a onclick="$('#post<?=$post->post_id?>').toggle();" style="display:<?=$post->is_deleted?'':'none'?>" class="ka ka16 ka-grey ka-eye undelete_button" title="Show/hide this post"></a>
					<?php endif; ?>
				<?php elseif($_user->acl): ?>
					<a onclick="reportPost(<?=$post->post_id?>);" class="ka ka16 ka-red ka-report" title="Report post"></a>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<div id="post<?=$post->post_id?>" class="post_body">
		<div class="commentbody">
			<div class="userPicSize100px">
				<?=$this->load->view('include/user_badge_community', array('user'=>$post->user),true);?>
			</div>
			<div class="commentcontent">
				<div class="rate rated" id="rate_box_<?=$post->post_id?>">
					<?php if ($_user->acl && $_user->id!=$post->user_id && !isset($post->ratings)): ?>
						<a class="ka kasmall ka16 ka-thumbs-down ka-red"  onclick="ratePost(<?=$post->post_id?>, false);"></a>
						<a class="ka kasmall ka16 ka-thumbs-up" onclick="ratePost(<?=$post->post_id?>, true);"></a>
					<?php endif; ?>
					<a href="/community/post/votes/<?=$post->post_id?>/" title="Votes for this post" class="ajaxLink ratemark <?=$post->rating>0?'positive':'negative'?>"><i class="ka ka-arrow2-<?=$post->rating>=0?'up':'down'?>"></i><?=$post->rating?></a>
				</div>
				<!-- div class="rate"-->
				<?php if ($post->reply_id): ?>
					<div class="quote reply_content" id="reply_content_<?=$post->post_id?>">
						<div class="quoteAuthor">
							<?php $this->load->view('include/user_badge_inline', array('user'=>$post->reply->user)) ?>
							<a class="lightgrey plain" href="/community/show/<?=$thread->url?>-<?=$thread->thread_id?>/?post=<?=$post->reply->post_id?>" title="go to post">
								(<?=getRelativeTime($post->reply->date_created)?>)	
							</a>
						</div>
						<div class="quote-content"><?=$post->reply->content?></div>
					</div>
				<?php endif ?>
				<div class="post_content" id="content_<?=$post->post_id?>">
					<?=$post->content?>
				</div>
				<?php if ($post->date_edited): ?>
					<p class="font11px lightgrey italic" id="edited_<?=$post->post_id?>">Last edited by <?php $this->load->view('include/user_badge_inline', array('user'=>$post->edited_user)) ?>, <?=getRelativeTime($post->date_edited)?></p>
				<?php endif; ?>
				<div class="floatright smallButtonsline" style="margin-top: 60px;">
					<?php if($_user->acl): ?>
						<a class="kaButton normalText smallButton" onclick="replyPost(<?=$post->post_id?>);"><i class="ka ka-reply"></i> reply</a>
						<a class="kaButton normalText smallButton" onclick="quotePost(<?=$post->post_id?>);"><i class="ka ka-comment"></i> quote</a>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
	<br>
</div>
<?php endforeach; ?>
<div id="cbuffer" style="display:none"></div>
<?php if ($_user->acl||true): ?>
	<div class="commentform topmarg20px" id="main">
		<form action="/community/post/create/<?=$thread->thread_id?>/" method="POST">
			<input type="hidden" name="pid" id="pid" value="">
			<textarea name="content" class="textinput" id="replytext"></textarea>
			<div class="buttonsline">
				<button class="bigButton siteButton">submit</button>
			</div>
		</form>
	</div>
	<script type="text/javascript">
		$('#replytext').bbedit();
	</script>
<?php endif; ?>

<?= $this->paginator->create_links(); ?>

<div class="clear"></div>
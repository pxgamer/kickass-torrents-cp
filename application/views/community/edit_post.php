<div id="editpost_<?=$post->post_id?>">
	<textarea name="pid" style="min-height:121px;"><?=$post->content?></textarea>
	<div class="buttonsline" style="padding-left:5px;">
		<a class="bigButton siteButton" name="canceledit_<?=$post->post_id?>" onclick="cancelEditPost(<?=$post->post_id?>);"><span>cancel</span></a>
		<a class="bigButton siteButton" id="saveedit_<?=$post->post_id?>" onclick="savePost(<?=$post->post_id?>);"><span>save</span></a>
	</div>
</div>
<tbody>
	<tr>
		<td colspan="4" title="Click to hide" data-show-title="Click to show" data-hide-title="Click to hide" class="forumGroupName lightivorybg thin white left font14px forumhideJS" style="cursor: pointer" rel="<?=$forum->url?>">
			<a class="plain white" href="/community/forum/<?=$forum->url?>/"><?=$forum->title?></a>
		</td>
	</tr>
</tbody>
<tbody id="forum_<?=$forum->url?>" class="showBlockJS">
	<?php $i = 1;
		foreach($forum->sub_forums as $sub_forum): ?>
		<tr class="<?=$i%2==0?'even':'odd'?>">
			<td>
				<div class="markeredBlock">
					<a href="/community/forum/<?=$sub_forum->url?>/" class="cellMainLink"><strong><?=$sub_forum->title?></strong></a>
					<span class="underlined font11px lightgrey block"><?=$sub_forum->description?></span>
				</div>
			</td>
			<td>
				<div class="markeredBlock">
					<?php if (isset($sub_forum->user)): ?>
						<a href="/community/show/<?=$sub_forum->thread->url?>-<?=$sub_forum->thread->thread_id?>/?post=<?=$sub_forum->latest_post?>" class="cellMainLink" title="<?=htmlspecialchars($sub_forum->thread->title)?>"><?=$sub_forum->thread->title?></a>
						<span class="font11px lightgrey block"><?=strtotime($sub_forum->thread->last_post_date?$sub_forum->thread->last_post_date:0)?> by <?php $this->load->view('include/user_badge_inline', array('user'=>$sub_forum->user))?></span>
					<?php endif; ?>
				</div>
			</td>
			<td class="center"><?=$sub_forum->thread_count?></td>
			<td class="lasttd nobr center"><?=$sub_forum->post_count?></td>
		</tr>
	<?php $i++;
		endforeach; ?>
</tbody>
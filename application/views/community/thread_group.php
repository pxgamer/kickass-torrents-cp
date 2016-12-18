<tr class="odd">
	<td class="lasttd nobr right nopad">
        <?php if ($thread->is_sticky): ?>
			<span title="Sticky thread" class="statusIcon ka ka-pin"></span>
            <!--<span class="statusIcon ka ka-report" title="New messages in thread"></span>-->
        <?php endif; ?>
    </td>
	<td class="font12px">
		<div class="iaconbox floatright"></div>
		<div class="markeredBlock nopad">
			<a href="/community/show/<?=$thread->url?>-<?=$thread->thread_id?>/" class="normalgrey font12px plain bold"><?=$thread->title?></a>
			&nbsp;&nbsp;<!--<a title="last post" href="/community/show/<?=$thread->url?>-<?=$thread->thread_id?>/?post=<?=$thread->last_post?>" class="plain font10px thin">last post</a>				 | <a title="Go to first unread post" class="plain font10px thin" href="/community/show/pay-clicks-and-external-links-torrent-descriptions/?post=17873365"> first unread</a>-->
			<?php $this->load->view('include/user_badge_inline', array('user'=>$thread->user))?>
		</div>
	</td>
	<td class="nobr">
        <?php if (isset($thread->last_post_user)): ?>
            <a class="lastPostIcon" title="last post" href="/community/show/<?=$thread->url?>-<?=$thread->thread_id?>/?post=<?=$thread->last_post?>">►</a> <?=getRelativeTime($thread->last_post_date)?><br> by <?php $this->load->view('include/user_badge_inline', array('user'=>$thread->last_post_user))?>
        <?php endif; ?>
	</td>
	<td class="center lasttd nobr nobr left"><?=$thread->view_count?> views<br><?=$thread->post_count?> replies</td>
</tr>
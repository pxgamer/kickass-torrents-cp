<h1 class="floatleft"><?=$forum->title?>: <?=$forum->child->title?></h1>
<div class="floatright buttonsLine">
	<form action="/community/search/" method="get" accept-charset="utf-8">
		<input name="search" class="textinput" value="" type="text">
		<button type="submit" class="siteButton bigButton"><span>community search</span></button>
	</form>
</div>
<div class="tabs">
	<ul class="tabNavigation">
		<li><a class="darkButton selectedTab" href="/community/"><span>Community</span></a></li>
		<li><a class="darkButton " href="/community/socialgroups/"><span>Social groups</span></a></li>
	</ul>
	<hr class="tabsSeparator">
</div>
<div class="pollresultsblock"><?=$forum->child->display_message?></div>
<div class="buttonsInline floatright botmarg10px">
    <?php if ($_user->acl): ?>
        <a class="kaButton smallButton" href="/community/create/<?=$forum->child->id?>/"><i class="ka ka-plus"></i> new thread</a>
    <?php endif; ?>
</div>
<table class="data width100perc clear" cellpadding="0" cellspacing="0">
    <thead>
        <tr class="firstr">
        	<th class="lasttd"></th>
        	<th class="width100perc">Title</th>
        	<th>last post</th>
        	<th class="center lasttd nobr">statistics</th>
    	</tr>
    </thead>
    <tbody>

    	<?php foreach($forum->child->threads as $thread) {
         $this->load->view('community/thread_group', array('thread'=>$thread));   
        }?>

    </tbody>
</table>		 
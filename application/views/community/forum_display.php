<h1 class="floatleft"><?=isset($forum->title)?$forum->title:'Community'?></h1>
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
<table class="data" cellpadding="0" cellspacing="0">
	<thead>
		<tr class="firstr">
			<th class="width50perc">forum</th>
			<th class="width50perc">last post</th>
			<th class="center">threads</th>
			<th class="lasttd nobr center">posts</th>
		</tr>
	</thead>
			
	<?php $this->load->view('community/forum_group', array('forum'=>$forum)); ?>

</table>
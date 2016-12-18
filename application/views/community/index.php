<h1 class="floatleft">Community</h1>
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

<h2>Latest threads</h2>
<table class="data clear" cellpadding="0" cellspacing="0">
	<tbody>
		<tr class="firstr">
			<th class="width70perc">Title</th>
			<th class="width30perc">forum</th>
			<th class="lasttd nobr left">last post</th>
		</tr>
		<tr class="odd">
			<td class="font12px" align="left">
				<div class="markeredBlock">
					<a href="/community/show/latest-random-gif-image-thread-v4-thread-108933/?unread=17873290" class="cellMainLink">The Latest Random GIF IMAGE Thread V4</a>
				</div>
			</td>
			<td><a href="/community/photography-art/">Photography &amp; Art</a></td>
			<td class="lasttd nobr nobr left">ago &nbsp;by <!--?=$this->load->view('include/user_badge_inline', array('user'=>$forum->user))?>--></td>
				</tr>
							<tr class="even">
					<td class="font12px" align="left">
						<div class="markeredBlock">
							<a href="/community/show/official-uefa-euro-2016/?unread=17873284" class="cellMainLink">Official UEFA Euro 2016</a>
						</div>
					</td>
					<td><a href="/community/sports/">Sports</a></td>
					<td class="lasttd nobr nobr left"><time title="10 Jul 2016, 22:15" class="timeago" datetime="2016-07-10T22:15:38+00:00">about a month ago</time>&nbsp;by <span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_4"><a class="plain" href="/user/Ex-Gamer/">Ex-Gamer</a></span><span title="Reputation" class="repValue positive">34.02K</span></span></td>
				</tr>
				<tr class="odd">
					<td class="font12px" align="left">
						<div class="markeredBlock">
							<a href="/community/show/kickass-portuguese-community-v2/?unread=17873280" class="cellMainLink">Kickass Portuguese Community V2</a>
						</div>
					</td>
					<td><a href="/community/international-forum/">International Forum</a></td>
					<td class="lasttd nobr nobr left"><time title="10 Jul 2016, 22:12" class="timeago" datetime="2016-07-10T22:12:58+00:00">about a month ago</time>&nbsp;by <span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_1"><a class="plain" href="/user/PStorm/">PStorm</a></span><span title="Reputation" class="repValue positive">3664</span></span></td>
				</tr>
							<tr class="even">
					<td class="font12px" align="left">
						<div class="markeredBlock">
							<a href="/community/show/what-are-you-downloading-or-uploading-now-v4/?unread=17873279" class="cellMainLink">What are you downloading or uploading now? ..V4</a>
						</div>
					</td>
					<td><a href="/community/free-speech/">Free Speech</a></td>
					<td class="lasttd nobr nobr left"><time title="10 Jul 2016, 22:12" class="timeago" datetime="2016-07-10T22:12:34+00:00">about a month ago</time>&nbsp;by <span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_2"><a class="plain" href="/user/Condo.Ghost/">Condo.Ghost</a></span><span title="Reputation" class="repValue positive">94.3K</span></span></td>
				</tr>
							<tr class="odd">
					<td class="font12px" align="left">
						<div class="markeredBlock">
							<a href="/community/show/what-tv-show-are-you-watching-right-now-v5/?unread=17873278" class="cellMainLink">What TV show are you watching right now? V5</a>
						</div>
					</td>
					<td><a href="/community/tv-shows/">TV Shows</a></td>
					<td class="lasttd nobr nobr left"><time title="10 Jul 2016, 22:10" class="timeago" datetime="2016-07-10T22:10:57+00:00">about a month ago</time>&nbsp;by <span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_4"><a class="plain" href="/user/TheCheetah/">TheCheetah</a></span><span title="Reputation" class="repValue positive">27.28K</span></span></td>
				</tr>
							<tr class="even">
					<td class="font12px" align="left">
						<div class="markeredBlock">
							<a href="/community/show/what-movie-did-you-last-watch-and-what-did-you-think-it-v-4/?unread=17873274" class="cellMainLink">What movie did you last watch? And what did you think of it? V.4!</a>
						</div>
					</td>
					<td><a href="/community/movies/">Movies</a></td>
					<td class="lasttd nobr nobr left"><time title="10 Jul 2016, 22:09" class="timeago" datetime="2016-07-10T22:09:08+00:00">about a month ago</time>&nbsp;by <span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_1"><a class="plain" href="/user/MovieFan2000/">MovieFan2000</a></span><span title="Reputation" class="repValue positive">1116</span></span></td>
				</tr>
						</tbody></table>
			<table class="data" cellpadding="0" cellspacing="0">
				<thead>
					<tr class="firstr">
						<th class="width50perc">forum</th>
						<th class="width50perc">last post</th>
						<th class="center">threads</th>
						<th class="lasttd nobr center">posts</th>
					</tr>
				</thead>
				





				<?php foreach ($forums as $forum) {
					$this->load->view('community/forum_group', array('forum'=>$forum));
				}
				?>




											


						</table>
<h2>3939 online users <small>(last 15 minutes)</small></h2><br>
<small>Max online users: <b>8113</b> on 25 Apr 2016, 02:19 (2&nbsp;months&nbsp;ago)</small><br>
<small>Threads: <b>57 575</b>, Posts: <b>3 594 511</b>, Active users: <b>533 849</b></small>
<div>
</div>
		
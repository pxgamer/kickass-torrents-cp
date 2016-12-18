<h1 class="nickname"><?=$user->username?><span title="Reputation" class="repValue <?= $user->reputation > 0 ? 'positive':'negative'?>"><?=$user->reputation?></span>
</h1>
<div class="lightgrey font12px">
	<span class="aclColor_<?=$user->acl_class?>"><?=($user->custom_title?$user->custom_title:$user->title)?></span>
</div>
<div class="tabs">
	<ul class="tabNavigation">
		<li><a href="/user/<?=$user->username?>/" class="darkButton selectedTab"><span>profile</span></a></li>
		<li><a href="/user/<?=$user->username?>/albums/" class="darkButton "><span>albums <i class="menuValue">x</i></span></a></li>
		<li><a href="/user/<?=$user->username?>/friends/" class="darkButton "><span>Friends <i class="menuValue">x</i></span></a></li>
		<li class="rssInside">
			<a class="ka ka16 ka-rss normalText rsssign ka-red" target="_blank" href="/blog/<?=$user->username?>}/?rss=1" title="bookmarked blogs feed"></a>
			<a class="darkButton " href="/blog/<?=$user->username?>/"><span>blog <i class="menuValue">x</i></span></a>
		</li>
		<li><a href="/user/<?=$user->username?>/threads/" class="darkButton "><span>Threads</span></a></li>
		<li><a href="/user/<?=$user->username?>/requests/" class="darkButton "><span>Requests</span></a></li>
		<li><a href="/user/<?=$user->username?>/uploads/" class="darkButton "><span>uploads <i class="menuValue">x</i></span></a></li>
		<?php if ($_user->acl >= 10): ?>
			<li><a href="/user/<?=$user->username?>/moderation/" class="darkButton "><span>Moderation</span></a></li>
		<?php endif; ?>
	</ul>
	<hr class="tabsSeparator">
</div>
<div class="userPic floatleft userPicSize100px">
	<div class="userPicHeight relative">
		<img src="<?=$user->avatar?>" id="wall_userpic" class="maxwidth100px maxheight100px">
	</div>
	<div class="badgeSiteStatus width100px botmarg10px">
		<span class="<?=$user->online_status?>" title="<?=$user->online_status?>"></span>
	</div>
</div>
		
<div class="botmarg10px" style="margin-left: 110px">
	<div class="profileBody">
		<div class="profileCloud">
			<div class="statusCloud">
				<div id="status_message" class="userStatusMessage">
					<pre>Status message here<br><?php print_r($user) ?></pre>
				</div>
				<div class="updatedStatus">updated	1&nbsp;week&nbsp;ago</div>
			</div>
		</div>
		<div class="leftpad10px">
			<table class="formtable" cellpadding="0" cellspacing="0">
				<tbody>
					<tr>
						<td><strong>Zodiac sign:</strong></td>
						<td>Aries</td>
					</tr>
					<tr>
						<td><strong>Sex:</strong></td>
						<td width="100%">male</td>
					</tr>
					<tr>
						<td><strong>Country:</strong></td>
						<td><img src="/content/images/flag/so.png" alt="Somalia" title="Somalia"> Somalia</td>
					</tr>
					<tr>
						<td class="nobr"><strong><a href="/user/<?=$user->username?>/uploads/" class="plain">Torrents uploaded:</a></strong></td>
						<td>86</td>
					</tr>
					<tr>
						<td class="nobr"><strong>Uploader stats:</strong></td>
						<td>Torrents reported: 0, voted good: 1308, bad: 53</td>
					</tr>
					<tr>
						<td class="nobr"><strong>Last torrent uploaded:</strong></td>
						<td>
							<a class="ka-widget vtip" href="/uicideboy-high-tide-in-the-snake-s-nest-2015-320kbps-sog-chip-t12146522.html" rel="12146522" widget-type="torrent"><i class="ka ka-arrow-down"></i><strong>Torrent:</strong> <em class="maxwidth550px overhidden nowrap">$uicideBoy$ - High Tide in t... (2015) 320kbps (SOG) [CHiP]</em></a> <div class="vtipContentjs" style="display:none"> <div class="previewPopupContainer relative block"> <p class="overvisible wrap block"> <span class="torType musicType"></span> <span class="line160perc">$uicideBoy$ - High Tide in the Snake's Nest (2015) 320kbps (SOG) [CHiP]</span> <br> <span class="block normalgrey font11px plain"> Feb 26, 2016 in <strong><a href="/music/">Music</a> &gt; <a href="/mp3/">Mp3</a></strong>. &nbsp;Verified. &nbsp;59.23 <span>MB</span></span> <span class="hash font11px lightgrey">C4C53A6AE20CACA53EEBFA346DD49EA38110705F</span> </p> <p class="font11px darkivorybg toppad3px botpad3px"> <span class="inlineblock floatleft"> <span class="statusIcon isleech"></span><strong>5</strong>&nbsp;&nbsp;<span class="statusIcon isseed"></span><strong>0</strong> </span> <span class="inlineblock floatright"><span class="statusIcon isrategood"></span>8<span class="opac5 font10px">/10</span> </span> </p> </div> </div>
						</td>
					</tr>
					<tr>
						<td><strong><?=$user->username?>'s</strong></td>
						<td><a href="/user/<?=$user->username?>/ideas/" class="plain">Ideas</a> | <a href="/user/<?=$user->username?>/summaries/" class="plain">Summaries</a></td>
					</tr>
					<tr>
						<td class="nobr"><strong><a href="/community/user/<?=$user->username?>/" class="plain">Posts count:</a></strong></td>
						<td>7288</td>
					</tr>
					<tr>
						<td><strong>Status:</strong></td>
						<td><i class="ka ka-star ka-vul2" style="color:orange; cursor: default !important;"></i></td>
					</tr>
					<tr>
						<td><strong>Signature:</strong></td>
						<td>
							<div class="center"><a rel="nofollow noopener noreferrer" href="/community/show/pxgamer-s-scripts/"><img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://pximg.xyz/images/293a80d1bb2a615bb9111bfa82bfbb1f.gif" alt="image"><br></a></div><br>
							<div class="center">Created by <span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_3"><a class="plain" href="/user/thLullaby/">thLullaby</a></span><span title="Reputation" class="repValue positive">53.58K</span></span> </div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div><!-- div class="profileBody" -->
</div><!-- div class="profileCard"-->
<div>
	<div class="blog_entry" id="blog_entry_47899">
	<h2>
		<a class="plain" href="/blog/<?=$user->username?>/post/discovering-one-s-true-self/">Blog Title</a>
		<span class="iaconbox">
			<a title="Bookmark this blog" href="/bookmarks/add/blog/<?$user->id_hash?>/" class="ajaxLink"><i class="ka ka16 ka-follow"></i></a>
		</span>
	</h2>
		<h6 class="font11px lightgrey">
		<span class="ka ka-eye statusIcon"></span> 652 views&nbsp;&nbsp;&nbsp;
		<span class="ka ka-comment statusIcon"></span> 59 comments&nbsp;&nbsp;&nbsp;
		<span class="ka ka-calendar statusIcon"></span> posted: <time title="16 Sep 2014, 11:00" class="timeago" datetime="2014-09-16T11:00:02+00:00">2&nbsp;years ago</time>  &nbsp;&nbsp;&nbsp;
			</h6>
	<div class="textcontent botmarg10px blogContent">Blog Content Here</div>
	</div>
</div>
									<h2><a class="ka ka16 ka-eye" title="Toggle Achievements" id="toggleAch"></a> User Achievements (170 opened)				<a class="kaButton smallButton normalText" href="/achievements/" title="See all achievements"><i class="ka ka-achievement"></i> All Achievements</a>
			</h2>
			<table class="achTable showBlockJS" rel="Achievements">
								<tbody><tr>
					<td><strong>Special:</strong></td>
					<td class="botpad5px">
											<span class="achBadge specialAchBack"><a href="/achievements/Knee-arrow/" title="Took an Arrow in the Knee. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Knee-arrow</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Five%20points%20to%20Gryffindor/" title="You're a wizard, Harry! Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Five points to Gryffindor</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Heir%20of%20Slytherin/" title="Chamber of Secrets has been opened. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Heir of Slytherin</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Azkaban%20Escape/" title="Beware of Dementor's Kiss. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Azkaban Escape</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Triwizard%20Champion/" title="The Triwizard Tournament has begun. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Triwizard Champion</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Joined%20Dumbledore%27s%20Army/" title="The Dark Lord has Returned. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Joined Dumbledore's Army</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Felix%20Felitis/" title="It's liquid luck! Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Felix Felitis</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Master%20of%20Death/" title="Possessor of The Legendary Deathly Hallows. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Master of Death</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Sparkling%20Vampire%21/" title="His girlfriend made him do it! Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Sparkling Vampire!</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Fellowship%20Member/" title="One does not simply get this achievement. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Fellowship Member</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Jedi%20Knight/" title="A passion for the Force has he! Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Jedi Knight</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Love%20at%20first%20site/" title="It's a love thing. Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Love at first site</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2013%3A%20Halloween/" title="Seeders and Leechers of every age! Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2013: Halloween</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2013%3A%20Guy%20Fawkes/" title="For being online on Guy Fawkes Night 5th November 2013 Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2013: Guy Fawkes</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/KAT%20Theme%20Song/" title="Surprise !!  Earned 2&nbsp;years&nbsp;and 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">KAT Theme Song</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Mr.%20Durden/" title="The first rule of Fight Club is: you do not talk about Fight Club. Earned 2&nbsp;years&nbsp;and 7&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Mr. Durden</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Survived%20another%20KAT%20update/" title="404 achievement not found! Earned 1&nbsp;year&nbsp;and 2&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Survived another KAT update</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2013%3A%20Xmas/" title="Merry Christmas! Earned 2&nbsp;years&nbsp;and 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2013: Xmas</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2014%3A%20Santa%20Claus/" title="Landed on KAT on the New Years Eve! Earned 2&nbsp;years&nbsp;and 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2014: Santa Claus</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2014%3A%20First%20Man%20Uploading./" title="Opening 2014 with fresh uploads. Earned 2&nbsp;years&nbsp;and 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2014: First Man Uploading.</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Patient%20of%20Doctor%20Who/" title="Downloaded Doctor Who's 50th Anniversary Special Earned 2&nbsp;years&nbsp;and 5&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Patient of Doctor Who</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2014%3A%20Torrents%20Day/" title="Happy Torrents Day! For being online on this Special Day of the 30th March. Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2014: Torrents Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Such%20Achievement/" title="Such torrent! Much download! Very special! Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Such Achievement</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2014%3A%20Yarr%21/" title="Visited KAT on International Talk Like a Pirate Day Earned 1&nbsp;year&nbsp;and 9&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2014: Yarr!</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2014%3A%20Fooled/" title="Got fooled on KAT on April Fools Day 2014. Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2014: Fooled</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Ride%20or%20Die/" title="Let's go for a little ride Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Ride or Die</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2014%3A%20Saint%20Katrick/" title="Visited KAT on Saint Patricks Day 2014. Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2014: Saint Katrick</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/I%20Dont%20Tip%21/" title="I dont tip because society says I have to... Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">I Dont Tip!</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Morpheus/" title="You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe.
You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes. Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Morpheus</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/The%20Red%20pill/" title="This is the truth Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">The Red pill</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Wow%20The%20Index/" title="The giant just hit a massive milestone.
Torrent nr: 10,000,000!!! Earned 10&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Wow The Index</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2014%3A%20Halloween/" title="Seeders and Leechers of every age! Earned 1&nbsp;year&nbsp;and 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2014: Halloween</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2014%3A%20Xmas/" title="Merry Christmas 2014! Earned 1&nbsp;year&nbsp;and 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2014: Xmas</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2014%3A%20Last%20Man%20Uploading/" title="Uploading right before the new year! Earned 1&nbsp;year&nbsp;and 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2014: Last Man Uploading</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Interviewed/" title="Watched and survived the assassination! Earned 1&nbsp;year&nbsp;and 5&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Interviewed</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Santa%20Claus/" title="Landed on KAT on New Years Eve! Earned 1&nbsp;year&nbsp;and 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Santa Claus</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20KickAss%20Upload%20Day/" title="Visited KAT on KickAss Upload Day! Earned 1&nbsp;year&nbsp;and 5&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: KickAss Upload Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Eid%20al-Adha/" title="Happy Eid al-Adha 2015! Earned 9&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Eid al-Adha</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Eid%20al-Fitr/" title="Happy Eid al-Fitr! Earned 11&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Eid al-Fitr</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Saint%20Katrick/" title="Visited KAT on Saint Patricks Day 2015. Earned 1&nbsp;year&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Saint Katrick</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Torrents%20Day/" title="Happy Torrents Day! For being online on this Special Day of the 30th March. Earned 1&nbsp;year&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Torrents Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Red%20Nose%20Day/" title="For being online on the day to act silly and raise money for charity Earned 1&nbsp;year&nbsp;and 4&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Red Nose Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/It%27s%20all%20about%20Pi%21/" title="For all the kat geniuses on this day!  Earned 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">It's all about Pi!</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Tell%20A%20Lie%20Day%21%20%20April%202%202015/" title="Those that just cannot help themselves! Earned 1&nbsp;year&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Tell A Lie Day!  April 2 2015</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20HTD%20Music%20Lover/" title="For the music lovers, the serious music lovers Earned 1&nbsp;year&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: HTD Music Lover</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/The%20Katalyst%20Issue%20%231/" title="Downloaded the first ever issue of the Official Kickass Torrents Magazine! Earned 1&nbsp;year&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">The Katalyst Issue #1</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Fooled/" title="Got fooled on KAT on Aprils Fools Day 2015. Earned 1&nbsp;year&nbsp;and 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Fooled</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Ramadan/" title="Ramadan begins! 18 of June 2015 >>> 17 July 2015. Earned 1&nbsp;year&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Ramadan</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Earth%20Day/" title="Today is a day we can all band together and share our love for this beautiful planet. Earned 1&nbsp;year&nbsp;and 2&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Earth Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2016%3A%20Leap%20Year/" title="For arriving on kickasstorrents on 29th February for a Special Leap Year. Earned 4&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2016: Leap Year</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20International%20Workers%20Day/" title="For Arriving on Kickass on International Workers Day on 1st May Earned 1&nbsp;year&nbsp;and 2&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: International Workers Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Xenomorphed%21/" title="Participated in Xenomorph Avatar Week Earned 1&nbsp;year&nbsp;and 1&nbsp;month&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Xenomorphed!</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/The%20Katalyst%20Issue%20%232/" title="Downloaded Issue 2 of everyone's favorite read. Earned 1&nbsp;year&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">The Katalyst Issue #2</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/A%20collection%20of%20amazing/" title="Follow the clues, and you will be awarded this achievement. Earned 1&nbsp;year&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">A collection of amazing</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/The%20Katalyst%20Issue%20%233/" title="Downloaded Issue #3 of everyone's favorite read. Earned 11&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">The Katalyst Issue #3</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Torrent%20Request%20Month/" title="Logged in on the last day of Torrent Request Month - August 2015 Earned 10&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Torrent Request Month</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/You%20Idiot/" title="It's that Time of Year Again! Earned 9&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">You Idiot</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/The%20Katalyst%20Issue%20%234/" title="Issue #4 of everyone's favorite read. Earned 9&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">The Katalyst Issue #4</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Halloween/" title="Seeders and Leechers of every age! Earned 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Halloween</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Cancer%20Awareness%20Month/" title="Wear this achievement with pride and make the world aware that getting checked for cancer is important. You could save a life. Earned 9&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Cancer Awareness Month</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Xmas%20Eve/" title="Merry Christmas 2015! Earned 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Xmas Eve</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20New%20Year%27s%20Eve/" title="Landed on KAT on New Years Eve! Earned 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: New Year's Eve</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2016%3A%20New%20Year%27s%20Day/" title="Landed on KAT New Year's Day 2016! Earned 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2016: New Year's Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2015%3A%20Xmas%20Day/" title="Landed on KAT Xmas Day 2015 Earned 6&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2015: Xmas Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Welcome%20to%20the%20Future/" title="For traveling through time and landing on KickassTorrents on October 21st, 2015. Earned 8&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Welcome to the Future</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2016%3A%20Torrents%20Day/" title="Happy Torrents Day! For being online on this Special Day of the 30th March. Earned 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2016: Torrents Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/The%20Site%20Awakens/" title="For being online for this memorable moment.  Earned 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">The Site Awakens</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2016%3A%20Saint%20Katrick/" title="Visited KAT on Saint Patricks Day 2016. Earned 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2016: Saint Katrick</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2016%3A%20KAT%20Remembrance%20Day/" title="KAT Remembrance Day Earned 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2016: KAT Remembrance Day</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2016%3A%20Fooled/" title="Got Fooled on KAT Aprils Fools Day 2016 Earned 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2016: Fooled</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2016%3A%20HTD%20Music%20Lover/" title="For the music lovers, the serious music lovers Earned 2&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2016: HTD Music Lover</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/No%20More%20Images/" title="Visited Kickasstorrents on the day most images disappeared Earned 3&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">No More Images</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/You%20Sexy%20MF%21/" title="Remembering a Legend! Earned 2&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">You Sexy MF!</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/HODOR%21/" title="For Being Game Of Thrones Addicted! Earned 2&nbsp;months&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">HODOR!</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/2016%3A%20Red%20Nose%20Day%20USA/" title="For being online the day the USA are acting silly and raising money for charity. Earned 1&nbsp;month&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">2016: Red Nose Day USA</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Champ%21/" title="Float Like a Butterfly, Sting Like a Bee Earned 1&nbsp;month&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Champ!</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Global%20Rank%3A%2070/" title="" the="" only="" torrent="" index="" to="" do="" so="" since="" 2007"="" earned="" 2&nbsp;weeks&nbsp;ago."=""><span class="specialAchIcon"></span><span class="achTitle">Global Rank: 70</span></a></span>
											<span class="achBadge specialAchBack"><a href="/achievements/Fat%20Kat/" title="Did you just call me FAT?! Earned 1&nbsp;week&nbsp;ago."><span class="specialAchIcon"></span><span class="achTitle">Fat Kat</span></a></span>
					</td>
				</tr>
								<tr>
					<td><strong>Gold:</strong></td>
					<td class="botpad5px">
											<span class="achBadge goldAchBack"><a href="/achievements/Kickass%20True%20Fan/" title="Visited Kickasstorrents over 200 times. Earned 2&nbsp;years&nbsp;and 6&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Kickass True Fan</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Comments%20Machine/" title="Left over 500 comments. Earned 2&nbsp;years&nbsp;and 7&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Comments Machine</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Download%20Junkie/" title="Downloaded over 1000 torrents. Earned 1&nbsp;year&nbsp;and 7&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Download Junkie</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Feedback%20Star/" title="Left feedback on over 500 torrents. Earned 1&nbsp;year&nbsp;and 7&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Feedback Star</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Big%20Brother/" title="Rated over 500 comments. Earned 2&nbsp;years&nbsp;and 7&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Big Brother</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Kickass%20Daily%20Dose/" title="Has been visiting kickass each day for a month. Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Kickass Daily Dose</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Search%20Tycoon/" title="Over 1000 searches. Earned 1&nbsp;year&nbsp;and 7&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Search Tycoon</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Kickass%20l33t/" title="Reputation over 10000. Earned 1&nbsp;year&nbsp;and 9&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Kickass l33t</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Yearling/" title="Active member for a year, earning at least 1k reputation. Earned 1&nbsp;year&nbsp;and 10&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Yearling</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Old%20Timer/" title="Active member for two years, earning at least 2k reputation. Earned 10&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Old Timer</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/The%20Survivor/" title="1k days on KAT. Earned 1&nbsp;month&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">The Survivor</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Community%20Manager/" title="Reported over 100 threads! Earned 11&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Community Manager</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Nobody%20knows/" title="Requested nickname change 20 times! Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Nobody knows</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Librarian/" title="Follows such a great amount of threads that I'm sure they have a spreadsheet somewhere to keep track of all this. Earned 1&nbsp;year&nbsp;and 10&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Librarian</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Like%20all%20the%20things%21/" title="Liked a hundred ideas! Earned 8&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Like all the things!</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Community%20Expert/" title="Written 100 threads Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Community Expert</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Gotta%20catch%20%27em%20all%21/" title="Collected 150 (+1 for this one) Achievements. Earned 6&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Gotta catch 'em all!</span></a></span>
											<span class="achBadge goldAchBack"><a href="/achievements/Exploiting%20the%20bandwidth/" title="Uploaded 100 images. Earned 12&nbsp;months&nbsp;ago."><span class="goldAchIcon"></span><span class="achTitle">Exploiting the bandwidth</span></a></span>
					</td>
				</tr>
								<tr>
					<td><strong>Silver:</strong></td>
					<td class="botpad5px">
											<span class="achBadge silverAchBack"><a href="/achievements/Devoted%20Visitor/" title="Visited Kickasstorrents over 50 times. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Devoted Visitor</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Comments%20Captain/" title="Left over 100 comments. Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Comments Captain</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Download%20Master/" title="Downloaded over 100 torrents. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Download Master</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Feedback%20Expert/" title="Left feedback on over 100 torrents. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Feedback Expert</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Mind%20Police/" title="Rated over 100 comments. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Mind Police</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Enthusiast/" title="Has been visiting kickass each day for a week. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Enthusiast</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Archivarius/" title="Bookmarked over 100 torrents. Earned 2&nbsp;years&nbsp;and 6&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Archivarius</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Twitter%20Victim/" title="Updated status over 100 times. Earned 1&nbsp;year&nbsp;and 10&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Twitter Victim</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Torrent%20Crawler/" title="Over 100 searches. Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Torrent Crawler</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Kickass%20Fellow/" title="Reputation over 1000. Earned 2&nbsp;years&nbsp;and 7&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Kickass Fellow</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Fake%20Killer/" title="Reported over 100 torrents as fake Earned 2&nbsp;years&nbsp;and 7&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Fake Killer</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Children%20of%20KAT/" title="Super user with over 5000 rep points Earned 2&nbsp;years&nbsp;and 5&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Children of KAT</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Community%20Police/" title="Reported over 50 threads! Earned 1&nbsp;year&nbsp;and 1&nbsp;month&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Community Police</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Faceless%20Manipulator/" title="Requested nickname change five times! Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Faceless Manipulator</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Unpredictable/" title="Has changed their signature 20 times. Earned 9&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Unpredictable</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Forum%20Addict/" title="Has some threads bookmarked Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Forum Addict</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Shapeshifter/" title="Changed your avatar 100 times Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Shapeshifter</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/I%27m%20diggin%27%20this/" title="Liked 50 ideas Earned 1&nbsp;year&nbsp;and 1&nbsp;month&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">I'm diggin' this</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Community%20Maintainer/" title="Written 25 threads Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Community Maintainer</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Pic-asso/" title="Uploaded 50 images. Earned 1&nbsp;year&nbsp;and 8&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Pic-asso</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Mr.Popular/" title="Has 750 friends Earned 10&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Mr.Popular</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Mailman/" title="Taking up server space. Because it's free! Earned 8&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Mailman</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Backlog/" title="Over 100 items in your feedback tab. Clean it! Earned 1&nbsp;year&nbsp;and 7&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Backlog</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/Achiever/" title="Gotten 100 achievements Earned 1&nbsp;year&nbsp;and 9&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">Achiever</span></a></span>
											<span class="achBadge silverAchBack"><a href="/achievements/KAT%20Citizen/" title="More than a year with us Earned 10&nbsp;months&nbsp;ago."><span class="silverAchIcon"></span><span class="achTitle">KAT Citizen</span></a></span>
					</td>
				</tr>
								<tr>
					<td><strong>Bronze:</strong></td>
					<td class="botpad5px">
											<span class="achBadge bronzeAchBack"><a href="/achievements/Rare%20guest/" title="Visited Kickasstorrents over 10 times Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Rare guest</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Feedback%20Pioneer/" title="Left over 10 comments. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Feedback Pioneer</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Download%20Rookie/" title="Downloaded over 10 torrents. Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Download Rookie</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Casual%20Uploader/" title="Uploaded over 10 torrents. Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Casual Uploader</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Feedbacker/" title="Left feedback on over 10 torrents. Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Feedbacker</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Comment%20Voter/" title="Rated over 10 comments. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Comment Voter</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Movie%20Inspector/" title="Left over 10 Audio/Video ratings on movie torrents. Earned 2&nbsp;years&nbsp;and 7&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Movie Inspector</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Bookmarker/" title="Bookmarked over 50 torrents. Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Bookmarker</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Moodchanger/" title="Updated status over 10 times. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Moodchanger</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Searcher/" title="Over 10 searches. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Searcher</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Kickass%20Contributor/" title="Reputation over 500. Earned 2&nbsp;years&nbsp;and 8&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Kickass Contributor</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Spammer%20Hunter/" title="Reported over 10 users. Earned 2&nbsp;years&nbsp;and 6&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Spammer Hunter</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Customizer/" title="Over 5 custom widgets. Earned 2&nbsp;years&nbsp;and 6&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Customizer</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/First%20Steps/" title="Earned all simple achievements. Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">First Steps</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Fake%20Hunter/" title="Reported over 10 torrents as fake Earned 2&nbsp;years&nbsp;and 7&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Fake Hunter</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Community%20Helper/" title="Reported over 20 threads! Earned 1&nbsp;year&nbsp;and 9&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Community Helper</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Hello%20world%21/" title="Created your first blog post! Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Hello world!</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Cold%20Feet/" title="Requested a name change twice. Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Cold Feet</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Lightbulb/" title="Written your first idea Earned 1&nbsp;year&nbsp;and 9&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Lightbulb</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Refresher/" title="Has changed their signature 10 times. Earned 1&nbsp;year&nbsp;and 11&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Refresher</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Face%20off/" title="Changed avatar 10 times Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Face off</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Collector/" title="Has very few threads bookmarked Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Collector</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Looks%20good%21/" title="Liked 20 ideas Earned 2&nbsp;years&nbsp;and 2&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Looks good!</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Community%20Starter/" title="Written 10 threads Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Community Starter</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Very%20first%2C%20much%20completed/" title="First time getting your idea completed! Earned 10&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Very first, much completed</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Collection%20Agent/" title="Collected 50 Achievements. Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Collection Agent</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Wonderer/" title="Asked a question in FAQ Earned 10&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Wonderer</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Storage%20Manager/" title="Uploaded 10 images. Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Storage Manager</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Socializing/" title="Has 250 friends Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Socializing</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Poster/" title="Posted in the forums a thousand times! Earned 2&nbsp;years&nbsp;and 2&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Poster</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Upvote%20Rookie/" title="Has 500 likes on their torrents. Earned 9&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Upvote Rookie</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Kategorizer/" title="A user holding a Super User rank or higher moving over 250 torrents to it's rightful categories. Earned 2&nbsp;years&nbsp;and 2&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Kategorizer</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Request%20Reporter/" title="Reported 10 Torrent Requests Earned 11&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Request Reporter</span></a></span>
											<span class="achBadge bronzeAchBack"><a href="/achievements/Spam%20Spotter/" title="Reported over 50 comments. Earned 12&nbsp;months&nbsp;ago."><span class="bronzeAchIcon"></span><span class="achTitle">Spam Spotter</span></a></span>
					</td>
				</tr>
								<tr>
					<td><strong>Simple:</strong></td>
					<td class="botpad5px">
											<span class="achBadge simpleAchBack"><a href="/achievements/First%20Torrent%20Downloaded/" title="Downloaded first torrent. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">First Torrent Downloaded</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/First%20Comment/" title="Left first comment. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">First Comment</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/First%20Feedback/" title="Left first feedback. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">First Feedback</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/First%20Status%20Update/" title="Made first status update. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">First Status Update</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/First%20Upload/" title="Uploaded first torrent. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">First Upload</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/Organizer/" title="First category change. Earned 2&nbsp;years&nbsp;and 9&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">Organizer</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/Critic/" title="Left first negative comment rating. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">Critic</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/Supporter/" title="Left first positive comment rating. Earned 2&nbsp;years&nbsp;and 10&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">Supporter</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/Look%20at%20me%21/" title="Changed avatar once Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">Look at me!</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/Community%20Noob/" title="Written a thread Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">Community Noob</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/What%27s%20this%20for%3F/" title="Created a signature! Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">What's this for?</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/Quick%2C%20hide%21/" title="Submitted nickname change request Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">Quick, hide!</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/Achievement%20Collector/" title="Collected 20 Achievements. Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">Achievement Collector</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/Look%20at%20my%20drawing%21/" title="Uploaded an image Earned 2&nbsp;years&nbsp;and 4&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">Look at my drawing!</span></a></span>
											<span class="achBadge simpleAchBack"><a href="/achievements/First%20Like/" title="Your torrent has received it's first upvote, congratulations! Earned 2&nbsp;years&nbsp;and 3&nbsp;months&nbsp;ago."><span class="simpleAchIcon"></span><span class="achTitle">First Like</span></a></span>
					</td>
				</tr>
							</tbody></table>
						<hr>
													<div class="clear"></div>
						<div class="comments topmarg10px">
				<h2>The Wall</h2>
				<div class="floatleft">
					
				</div>
				<div id="comments">
					<div class="commentThread">
						<div class="commentbody" id="comment_30006752">
						<div id="cpic_30006752" class="userPic">
							<div class="height50px userPicHeight relative">
											<a href="/user/Navitas/">
									<img class="lazyjs" data-original="//yuq.me/userpics/46/417/b80c3c5b23ad9369db95ae6b4dce63ef.jpg" src="/content/images/blank.gif">
								</a>
							</div>
						</div>
						<div class="commentcontent">
							<a name="comment_30006752"></a>
							<div class="commentowner">
								<div class="rate rated" id="ratediv_30006752">
									<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
									<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
									<a href="/comments/votes/30006752/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_30006752"><i class="ka ka-arrow2-up"></i>1</a>
								</div><!-- div class="rate"-->
								<div class="commentTopControlLine"></div>
								<div class="commentownerLeft">
									<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_4"><a class="plain" href="/user/Navitas/">Navitas</a></span><span title="Reputation" class="repValue positive">33.24K</span></span>
									 <span id="cdate_30006752" class="lightgrey font11px">
									   • <a href="/comments/show/30006752/"><time title="08 Jul 2016, 16:58" class="timeago" datetime="2016-07-08T16:58:00+00:00">about a month ago</time></a>
									 </span>
									<a class="siteButton smallButton reject showComment" id="cshow_30006752" href="javascript:showComment(30006752)"><span>Show comment</span></a>
								</div><!-- div class="commentownerLeft" -->
							</div><!--commentowner-->
							<div id="ctext_30006752" class="commentText botmarg5px topmarg5px">Message Content</div> 
							<div class="objectAttachmentsJs overauto topmarg10px"></div>
						</div>
					</div><!-- div class="commentcontent" -->
				</div><!-- div class="commentbody" --> 

		</div><!-- div class="commentThread" -->
<div class="commentThread">
		<div class="commentbody" id="comment_30006557">
		<div id="cpic_30006557" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/Ex-Gamer/">
					<img class="lazyjs" data-original="//yuq.me/userpics/42/671/30fbf1b9713604ec5664a5589f216ca2.jpg" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_30006557"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_30006557">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/30006557/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_30006557"><i class="ka ka-arrow2-up"></i>2</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_4"><a class="plain" href="/user/Ex-Gamer/">Ex-Gamer</a></span><span title="Reputation" class="repValue positive">34.02K</span></span>
								 <span id="cdate_30006557" class="lightgrey font11px">
				   • <a href="/comments/show/30006557/"><time title="08 Jul 2016, 16:43" class="timeago" datetime="2016-07-08T16:43:10+00:00">about a month ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_30006557" href="javascript:showComment(30006557)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_30006557" class="commentText botmarg5px topmarg5px">
<div class="center"><span style="color:purple"><span style="font-size:150%">Enjoy The Weekend My Friend!</span></span> <img class="emoticon" src="/content/images/smiley/rock.gif" alt="rock"><br>
<br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/42/671/diZF1qAxX2.jpg" alt="image"><br>
<br>
<span style="color:darkblue"><span style="font-size:130%">UEFA Euro 2016 Final<br>
10 July 2016</span></span><br>
<a class="ka-widget" href="/community/show/official-uefa-euro-2016/" rel="b107c9e70" widget-type="thread"><i class="ka ka-community"></i><strong>Thread:</strong> <em class="maxwidth550px overhidden nowrap">Official UEFA Euro 2016</em></a> </div> 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 

		</div><!-- div class="commentThread" -->
<div class="commentThread">
		<div class="commentbody" id="comment_29921719">
		<div id="cpic_29921719" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/Navitas/">
					<img class="lazyjs" data-original="//yuq.me/userpics/46/417/b80c3c5b23ad9369db95ae6b4dce63ef.jpg" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29921719"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29921719">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29921719/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_29921719"><i class="ka ka-arrow2-up"></i>1</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_4"><a class="plain" href="/user/Navitas/">Navitas</a></span><span title="Reputation" class="repValue positive">33.24K</span></span>
								 <span id="cdate_29921719" class="lightgrey font11px">
				   • <a href="/comments/show/29921719/"><time title="01 Jul 2016, 18:03" class="timeago" datetime="2016-07-01T18:03:55+00:00">about a month ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29921719" href="javascript:showComment(29921719)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29921719" class="commentText botmarg5px topmarg5px">
<span style="font-size:130%"><b><span style="color:red">Aloha dear <span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_eliteuploader"><a class="plain" href="/user/<?=$user->username?>/"><?=$user->username?></a></span><span title="Reputation" class="repValue positive">31.15K</span></span> !!</span><br>
<span style="color:purple">Dropping by to wish you a formidable weekend!!</span></b></span><br>
<img class="emoticon" src="/content/images/smiley/pirate.gif" alt="pirate"><img class="emoticon" src="/content/images/smiley/cool.gif" alt="cool"><img class="emoticon" src="/content/images/smiley/pirate.gif" alt="pirate"><br>
<div class="spoiler_body"><div class="spoiler_header"><a class="spoiler_toggle spoiler_custom siteButton smallButton"><span>Finding Dory,...</span></a></div><div style="display: none;" class="spoiler_js"><span style="font-size:130%"><b><span style="color:blue">Today it's a beautiful day outside,...I'm feeling confidente it's going to be a formidable weekend,...</span><br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/46/417/Cou1fvx7mb.jpg" alt="image"><br>
<span style="color:red">Not too hot,...</span><br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/46/417/DK4QNC0PEH.jpg" alt="image"><br>
<span style="color:gray">Not too cold,...</span><br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/46/417/b3JdcCVlIy.jpg" alt="image"><br>
<span style="color:orange">Good to play some game (PC),...</span><br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/46/417/AUxwe90OL2.jpg" alt="image"><br>
<span style="color:green">And catch a cine with my niece,... hope she behave herself,...</span><br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/46/417/P4CO9qGIVa.jpg" alt="image"><br>
<span style="color:red">Have a formidable weekend matey!!!</span></b></span><br>
<img class="emoticon" src="/content/images/smiley/pirate.gif" alt="pirate"><img class="emoticon" src="/content/images/smiley/tongue.gif" alt="tongue"><img class="emoticon" src="/content/images/smiley/wave.gif" alt="wave"><img class="emoticon" src="/content/images/smiley/pirate.gif" alt="pirate"></div></div> 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 

		</div><!-- div class="commentThread" -->
<div class="commentThread">
		<div class="commentbody" id="comment_29861992">
		<div id="cpic_29861992" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/obito.96/">
					<img class="lazyjs" data-original="//yuq.me/userpics/56/724/89d63742036b2e8477390fef27b77a5a.jpg" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29861992"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29861992">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29861992/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_29861992"><i class="ka ka-arrow2-up"></i>1</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_verified"><a class="plain" href="/user/obito.96/">obito.96</a></span><span title="Reputation" class="repValue positive">4930</span></span>
								 <span id="cdate_29861992" class="lightgrey font11px">
				   • <a href="/comments/show/29861992/"><time title="27 Jun 2016, 05:08" class="timeago" datetime="2016-06-27T05:08:05+00:00">2 months ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29861992" href="javascript:showComment(29861992)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29861992" class="commentText botmarg5px topmarg5px">
<div class="center"><img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/56/724/FU45o0V7kQ.jpg" alt="image"></div> 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 

		</div><!-- div class="commentThread" -->
<div class="commentThread">
		<div class="commentbody" id="comment_29844390">
		<div id="cpic_29844390" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/WarLordCobra/">
					<img class="lazyjs" data-original="//yuq.me/userpics/56/780/c26811e7923f5411cc4225272dce4f0c.jpg" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29844390"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29844390">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29844390/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_29844390"><i class="ka ka-arrow2-up"></i>2</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_1"><a class="plain" href="/user/WarLordCobra/">WarLordCobra</a></span><span title="Reputation" class="repValue positive">4073</span></span>
								 <span id="cdate_29844390" class="lightgrey font11px">
				   • <a href="/comments/show/29844390/"><time title="25 Jun 2016, 23:02" class="timeago" datetime="2016-06-25T23:02:55+00:00">2 months ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29844390" href="javascript:showComment(29844390)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29844390" class="commentText botmarg5px topmarg5px">
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="http://www.relatably.com/q/img/well-wishes-quotes/get-well.jpg" alt="image"> 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 

		</div><!-- div class="commentThread" -->
<div class="commentThread">
		<div class="commentbody" id="comment_29827119">
		<div id="cpic_29827119" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/Navitas/">
					<img class="lazyjs" data-original="//yuq.me/userpics/46/417/b80c3c5b23ad9369db95ae6b4dce63ef.jpg" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29827119"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29827119">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29827119/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_29827119"><i class="ka ka-arrow2-up"></i>2</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_4"><a class="plain" href="/user/Navitas/">Navitas</a></span><span title="Reputation" class="repValue positive">33.24K</span></span>
								 <span id="cdate_29827119" class="lightgrey font11px">
				   • <a href="/comments/show/29827119/"><time title="24 Jun 2016, 15:08" class="timeago" datetime="2016-06-24T15:08:40+00:00">2 months ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29827119" href="javascript:showComment(29827119)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29827119" class="commentText botmarg5px topmarg5px">
<span style="font-size:130%"><b><span style="color:green">Hello dear <span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_eliteuploader"><a class="plain" href="/user/<?=$user->username?>/"><?=$user->username?></a></span><span title="Reputation" class="repValue positive">31.15K</span></span> !!</span><br>
<span style="color:red">It's Friday here!!!</span><br>
<img src="/users/46/417/Uja2cik4LF.gif" alt="image"> <img src="/users/46/417/Uja2cik4LF.gif" alt="image"> <img src="/users/46/417/Uja2cik4LF.gif" alt="image"> <img src="/users/46/417/Uja2cik4LF.gif" alt="image"><br>
<span style="color:purple">Wish you a superb weekend!!!</span></b></span><br>
<img class="emoticon" src="/content/images/smiley/tongue.gif" alt="tongue"><img class="emoticon" src="/content/images/smiley/wave.gif" alt="wave"><img class="emoticon" src="/content/images/smiley/cool.gif" alt="cool"><br>
<div class="spoiler_body"><div class="spoiler_header"><a class="spoiler_toggle spoiler_custom siteButton smallButton"><span>Winter here,...</span></a></div><div style="display: none;" class="spoiler_js"><span style="font-size:130%"><b><span style="color:blue">Tired of using my head,...</span><br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/46/417/sE2OQKziMb.jpg" alt="image"><br>
<span style="color:gray">,...decided to stay home and use my brain for other things,...</span><br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/46/417/MVbj9Qfova.jpg" alt="image"><br>
<span style="color:orange">I just finished my (pre) thesis. I'll start writing again only in November/December,...In the summer,...</span><br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/46/417/DSbpIjzLic.jpg" alt="image"><br>
<span style="color:yellow">Now, let's enjoy a 'soft' winter,...</span><br>
<img class="lazyjs bbcodeImage" src="/content/images/blank.gif" data-original="https://yuq.me/users/46/417/tlxFKAb7cw.jpg" alt="image"><br>
<span style="color:green">Wish you a superb weekend!!</span></b></span><br>
<img class="emoticon" src="/content/images/smiley/tongue.gif" alt="tongue"><img class="emoticon" src="/content/images/smiley/wave.gif" alt="wave"></div></div> 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 

		</div><!-- div class="commentThread" -->
<div class="commentThread">
		<div class="commentbody" id="comment_29803910">
		<div id="cpic_29803910" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/omgitsMATT/">
					<img class="lazyjs" data-original="/content/images/commentlogo.png" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29803910"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29803910">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29803910/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_29803910"><i class="ka ka-arrow2-up"></i>1</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_1"><a class="plain" href="/user/omgitsMATT/">omgitsMATT</a></span><span title="Reputation" class="repValue positive">199</span></span>
								 <span id="cdate_29803910" class="lightgrey font11px">
				   • <a href="/comments/show/29803910/"><time title="22 Jun 2016, 14:55" class="timeago" datetime="2016-06-22T14:55:15+00:00">2 months ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29803910" href="javascript:showComment(29803910)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29803910" class="commentText botmarg5px topmarg5px">
Thanks for the heads up, deleted the thread. 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 

		</div><!-- div class="commentThread" -->
<div class="commentThread">
		<div class="commentbody" id="comment_29801990">
		<div id="cpic_29801990" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/X-Marks/">
					<img class="lazyjs" data-original="//yuq.me/userpics/58/118/398577f834df6b8a97557d324d9b0218.jpg" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29801990"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29801990">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29801990/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_29801990"><i class="ka ka-arrow2-up"></i>1</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_4"><a class="plain" href="/user/X-Marks/">X-Marks</a></span><span title="Reputation" class="repValue positive">948</span></span>
								 <span id="cdate_29801990" class="lightgrey font11px">
				   • <a href="/comments/show/29801990/"><time title="22 Jun 2016, 11:21" class="timeago" datetime="2016-06-22T11:21:37+00:00">2 months ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29801990" href="javascript:showComment(29801990)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29801990" class="commentText botmarg5px topmarg5px">
As you're the god of Linux here, I hope to pester you a bit, since I'm migrating to Linux Mint Cinnamon soon. ;) 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 

						<div class="commentThread">
	<div class="reply">	<div class="commentbody" id="comment_29804130">
		<div id="cpic_29804130" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/<?=$user->username?>/">
					<img class="lazyjs" data-original="//yuq.me/userpics/30/117/aa1bf173a5a8f17bcbf57d4b8b451b29.png" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29804130"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29804130">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29804130/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_29804130"><i class="ka ka-arrow2-up"></i>1</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_eliteuploader"><a class="plain" href="/user/<?=$user->username?>/"><?=$user->username?></a></span><span title="Reputation" class="repValue positive">31.15K</span></span>
								 <span id="cdate_29804130" class="lightgrey font11px">
				   • <a href="/comments/show/29804130/"><time title="22 Jun 2016, 15:19" class="timeago" datetime="2016-06-22T15:19:32+00:00">2 months ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29804130" href="javascript:showComment(29804130)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29804130" class="commentText botmarg5px topmarg5px">
No problem mate :)<br>
<br>
What are you migrating from? 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 
</div>
						<div class="commentThread">
	<div class="reply">	<div class="commentbody" id="comment_29808873">
		<div id="cpic_29808873" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/X-Marks/">
					<img class="lazyjs" data-original="//yuq.me/userpics/58/118/398577f834df6b8a97557d324d9b0218.jpg" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29808873"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29808873">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29808873/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_29808873"><i class="ka ka-arrow2-up"></i>1</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_4"><a class="plain" href="/user/X-Marks/">X-Marks</a></span><span title="Reputation" class="repValue positive">948</span></span>
								 <span id="cdate_29808873" class="lightgrey font11px">
				   • <a href="/comments/show/29808873/"><time title="23 Jun 2016, 00:50" class="timeago" datetime="2016-06-23T00:50:43+00:00">2 months ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29808873" href="javascript:showComment(29808873)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29808873" class="commentText botmarg5px topmarg5px">
Win10. Starting with a dual boot. 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 
</div>
						<div class="commentThread">
	<div class="reply">	<div class="commentbody" id="comment_29811684">
		<div id="cpic_29811684" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/<?=$user->username?>/">
					<img class="lazyjs" data-original="//yuq.me/userpics/30/117/aa1bf173a5a8f17bcbf57d4b8b451b29.png" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29811684"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29811684">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29811684/" title="Votes for this comment" class="ajaxLink ratemark " id="commrate_29811684">0</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_eliteuploader"><a class="plain" href="/user/<?=$user->username?>/"><?=$user->username?></a></span><span title="Reputation" class="repValue positive">31.15K</span></span>
								 <span id="cdate_29811684" class="lightgrey font11px">
				   • <a href="/comments/show/29811684/"><time title="23 Jun 2016, 07:02" class="timeago" datetime="2016-06-23T07:02:47+00:00">2 months ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29811684" href="javascript:showComment(29811684)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29811684" class="commentText botmarg5px topmarg5px">
Sounds good. PM box is always open :) 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 
</div>
		</div><!-- div class="commentThread" -->

							
	</div><!-- div class="commentThread" -->

							
	</div><!-- div class="commentThread" -->

				<hr>			
	</div><!-- div class="commentThread" -->
<div class="commentThread">
		<div class="commentbody" id="comment_29747726">
		<div id="cpic_29747726" class="userPic">
			<div class="height50px userPicHeight relative">
							<a href="/user/Deepak.mahtha/">
					<img class="lazyjs" data-original="//yuq.me/userpics/59/595/ce2e7fe2b306779306d6c901e5a955a9.jpg" src="/content/images/blank.gif">
				</a>
			</div>
		</div>
		<div class="commentcontent">
			<a name="comment_29747726"></a>
			<div class="commentowner">
				<div class="rate rated" id="ratediv_29747726">
			<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-down ka-red redButton ajaxLink"><span></span></a> 
		<a href="/auth/login/" class="ka ka16 kasmall ka-thumbs-up ajaxLink"><span></span></a>
		<a href="/comments/votes/29747726/" title="Votes for this comment" class="ajaxLink ratemark plus" id="commrate_29747726"><i class="ka ka-arrow2-up"></i>1</a>
	
</div><!-- div class="rate"-->

				<div class="commentTopControlLine">
																									</div>
				<div class="commentownerLeft">
				<span class="badgeInline"><span class="offline" title="offline"></span> <span class="aclColor_1"><a class="plain" href="/user/Deepak.mahtha/">Deepak.mahtha</a></span><span title="Reputation" class="repValue positive">860</span></span>
								 <span id="cdate_29747726" class="lightgrey font11px">
				   • <a href="/comments/show/29747726/"><time title="18 Jun 2016, 14:48" class="timeago" datetime="2016-06-18T14:48:10+00:00">2 months ago</time></a>
				 </span>
																<a class="siteButton smallButton reject showComment" id="cshow_29747726" href="javascript:showComment(29747726)"><span>Show comment</span></a>
				</div><!-- div class="commentownerLeft" -->
			</div><!--commentowner-->
			<div id="ctext_29747726" class="commentText botmarg5px topmarg5px">
thanks for add! 
	<div class="objectAttachmentsJs overauto topmarg10px">
								
		
			</div>

</div>
			</div><!-- div class="commentcontent" -->
	</div><!-- div class="commentbody" --> 

		</div><!-- div class="commentThread" -->

	<span id="showmore_2" class="showmore folded" style="display:block">
		<a onclick="getPage(2, '<?$user->id_hash?>', 'user')" style="cursor:pointer"><span class="font80perc">▼</span> Show More</a>
		<a onclick="getAll(2, '<?$user->id_hash?>', 'user')" style="cursor:pointer;float:right;padding-right:10px"><span class="font80perc">▼</span> All</a>
		<div class="clear"></div>
	</span>
	<div id="morecomments_2" style="display:none;"></div>
<form id="comment_form" action="/comments/create/user/" method="post" onsubmit="return addComment(this, 'user');" style="display:none">
	<input name="pid" value="" type="hidden">
	<input name="turing" type="hidden">
	<input name="objectId" value="<?$user->id_hash?>" type="hidden">
	<div class="bbedit-toolbar"><span class="ka ka-b bbedit-b" title="Bold"></span> <span class="ka ka-i bbedit-i" title="Italic"></span> <span class="ka ka-u bbedit-u" title="Underline"></span> <span class="ka ka-s bbedit-s" title="Strike through"></span> <div class="bbedit-hasmenu"><span class="ka ka-image bbedit-image" title="Insert image"></span><ul class="bbedit-menu "><li class="ka ka-image-upload bbedit-image-upload" title="Insert image"><span></span><i>Insert image</i></li><li class="ka ka-image-link bbedit-image-link" title="Link image"><span></span><i>Link image</i></li></ul></div> <span class="ka ka-url bbedit-url" title="Insert link"></span> <span class="ka ka-torrent bbedit-torrent" title="Insert torrent link"></span> <span class="ka ka-user bbedit-user" title="Insert link to user profile"></span> <span class="ka ka-code bbedit-code" title="Insert code"></span> <span class="ka ka-quote bbedit-quote" title="Insert quote"></span> <span class="ka ka-smiles bbedit-smiles" title="Show smiles"></span> <span class="ka ka-spoiler bbedit-spoiler" title="Insert spoiler"></span> <div class="bbedit-hasmenu"><span class="ka ka-size bbedit-size" title="Font size"></span><ul class="bbedit-menu "><li class="ka ka-size-100 bbedit-size-100" title="Normal"><span></span><i>Normal</i></li><li class="ka ka-size-200 bbedit-size-200" title="Big"><span></span><i>Big</i></li><li class="ka ka-size-small bbedit-size-small" title="Small"><span></span><i>Small</i></li></ul></div> <div class="bbedit-hasmenu"><span class="ka ka-align bbedit-align" title="Text alignment"></span><ul class="bbedit-menu "><li class="ka ka-align-left bbedit-align-left" title="Left"><span></span><i>Left</i></li><li class="ka ka-align-center bbedit-align-center" title="Center"><span></span><i>Center</i></li><li class="ka ka-align-right bbedit-align-right" title="Right"><span></span><i>Right</i></li><li class="ka ka-align-justify bbedit-align-justify" title="Justify"><span></span><i>Justify</i></li></ul></div> <div class="bbedit-hasmenu"><span class="ka ka-list bbedit-list" title="Insert List"></span><ul class="bbedit-menu "><li class="ka ka-list-bullet bbedit-list-bullet" title="Bulleted List"><span></span><i>Bulleted List</i></li><li class="ka ka-list-numeric bbedit-list-numeric" title="Numeric List"><span></span><i>Numeric List</i></li><li class="ka ka-list-additem bbedit-list-additem" title="Add Item"><span></span><i>Add Item</i></li></ul></div> <div class="bbedit-hasmenu"><span class="ka ka-color bbedit-color" title="Set text color"></span><ul class="bbedit-menu bbedit-color-menu"><li style="background-color:yellow;" class="bbedit-color-yellow" title=""><span></span><i></i></li><li style="background-color:orange;" class="bbedit-color-orange" title=""><span></span><i></i></li><li style="background-color:red;" class="bbedit-color-red" title=""><span></span><i></i></li><li style="background-color:blue;" class="bbedit-color-blue" title=""><span></span><i></i></li><li style="background-color:purple;" class="bbedit-color-purple" title=""><span></span><i></i></li><li style="background-color:green;" class="bbedit-color-green" title=""><span></span><i></i></li><li style="background-color:white;" class="bbedit-color-white" title=""><span></span><i></i></li><li style="background-color:gray;" class="bbedit-color-gray" title=""><span></span><i></i></li><li style="background-color:black;" class="bbedit-color-black" title=""><span></span><i></i></li></ul></div> <span class="ka ka-youtube bbedit-youtube" title="Embed YouTube video"></span>  </div><textarea class="botmarg5px comareajs quicksubmit" name="content" rows="10" cols="10" autofocus="" required=""></textarea><div style="display: none;" id="sm7966657105301218" class="bbedit-smileybar"><img src="/content/images/smiley/biggrin.gif" class="bbedit-biggrin" alt="biggrin" title="Big grin"> <img src="/content/images/smiley/cry.gif" class="bbedit-cry" alt="cry" title="Cry"> <img src="/content/images/smiley/dizzy.gif" class="bbedit-dizzy" alt="dizzy" title="Dizzy"> <img src="/content/images/smiley/funk.gif" class="bbedit-funk" alt="funk" title="Funk"> <img src="/content/images/smiley/huffy.gif" class="bbedit-huffy" alt="huffy" title="Huffy"> <img src="/content/images/smiley/lol.gif" class="bbedit-lol" alt="lol" title="Laugh out Loud"> <img src="/content/images/smiley/loveliness.gif" class="bbedit-loveliness" alt="loveliness" title="Loveliness"> <img src="/content/images/smiley/mad.gif" class="bbedit-mad" alt="mad" title="Mad"> <img src="/content/images/smiley/sad.gif" class="bbedit-sad" alt="sad" title="Sad"> <img src="/content/images/smiley/shocked.gif" class="bbedit-shocked" alt="shocked" title="Shocked"> <img src="/content/images/smiley/shy.gif" class="bbedit-shy" alt="shy" title="Shy"> <img src="/content/images/smiley/sleepy.gif" class="bbedit-sleepy" alt="sleepy" title="Sleepy"> <img src="/content/images/smiley/smile.gif" class="bbedit-smile" alt="smile" title="Smile"> <img src="/content/images/smiley/sweat.gif" class="bbedit-sweat" alt="sweat" title="Sweat"> <img src="/content/images/smiley/titter.gif" class="bbedit-titter" alt="titter" title="Titter"> <img src="/content/images/smiley/tongue.gif" class="bbedit-tongue" alt="tongue" title="Tongue out"> <img src="/content/images/smiley/pirate.gif" class="bbedit-pirate" alt="pirate" title="Pirate"> <img src="/content/images/smiley/boo.gif" class="bbedit-boo" alt="boo" title="Boo"> <img src="/content/images/smiley/wink.gif" class="bbedit-wink" alt="wink" title="Little D"> <img src="/content/images/smiley/dull.gif" class="bbedit-dull" alt="dull" title="Dull"> <img src="/content/images/smiley/chuckle.gif" class="bbedit-chuckle" alt="chuckle" title="Chuckle"> <img src="/content/images/smiley/clap.gif" class="bbedit-clap" alt="clap" title="Clap"> <img src="/content/images/smiley/drunk.gif" class="bbedit-drunk" alt="drunk" title="Drunk"> <img src="/content/images/smiley/finger.gif" class="bbedit-finger" alt="finger" title="Middle finger"> <img src="/content/images/smiley/inlove.gif" class="bbedit-inlove" alt="inlove" title="In love"> <img src="/content/images/smiley/nerd.gif" class="bbedit-nerd" alt="nerd" title="Nerd"> <img src="/content/images/smiley/no.gif" class="bbedit-no" alt="no" title="No"> <img src="/content/images/smiley/rofl.gif" class="bbedit-rofl" alt="rofl" title="ROFL"> <img src="/content/images/smiley/sealed.gif" class="bbedit-sealed" alt="sealed" title="Lips sealed"> <img src="/content/images/smiley/smirk.gif" class="bbedit-smirk" alt="smirk" title="Smirk"> <img src="/content/images/smiley/think.gif" class="bbedit-think" alt="think" title="Think"> <img src="/content/images/smiley/yes.gif" class="bbedit-yes" alt="yes" title="Yes"> <img src="/content/images/smiley/wait.gif" class="bbedit-wait" alt="wait" title="Wait"> <img src="/content/images/smiley/wave.gif" class="bbedit-wave" alt="wave" title="Wave"> <img src="/content/images/smiley/cool.gif" class="bbedit-cool" alt="cool" title="Cool dude"> <img src="/content/images/smiley/evil.gif" class="bbedit-evil" alt="evil" title="Evil"> <img src="/content/images/smiley/punch.gif" class="bbedit-punch" alt="punch" title="Punch"> <img src="/content/images/smiley/doh.gif" class="bbedit-doh" alt="doh" title="Doh"> <img src="/content/images/smiley/yawn.gif" class="bbedit-yawn" alt="yawn" title="Yawn"> <img src="/content/images/smiley/tmi.gif" class="bbedit-tmi" alt="tmi" title="TMI"> <img src="/content/images/smiley/fubar.gif" class="bbedit-fubar" alt="fubar" title="FUBAR"> <img src="/content/images/smiley/rock.gif" class="bbedit-rock" alt="rock" title="Rock"> <img src="/content/images/smiley/bandit.gif" class="bbedit-bandit" alt="bandit" title="Bandit"> <img src="/content/images/smiley/swear.gif" class="bbedit-swear" alt="swear" title="Swear"> <img src="/content/images/smiley/facepalm.gif" class="bbedit-facepalm" alt="facepalm" title="Facepalm"> <img src="/content/images/smiley/thumb_up.gif" class="bbedit-thumb_up" alt="thumb_up" title="Thumbs Up"> <img src="/content/images/smiley/thumb_dwn.gif" class="bbedit-thumb_dwn" alt="thumb_dwn" title="Thumbs Down"> </div>
		<div class="objectAttachmentsJs overauto" style="clear: both;"></div>
	<div class="buttonsline">
		<button type="submit" class="siteButton bigButton" name="submit"><span>reply</span></button>
	</div>
</form></div>
			</div>
						 
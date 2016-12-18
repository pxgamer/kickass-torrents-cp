<ul id="navigation">
	<style>.navValue {left: 38px; position: absolute; top: -10px; color: undefined}.navValueSmall {left: 45px;}.valueBubbleUser {display:none;}</style>
	<li>
		<a href="/browse/"> <i class="ka ka-torrent"></i><span class="menuItem">browse</span></a>
		<ul class="dropdown dp-middle dropdown-msg upper">
			<li class="topMsg"><a href="/new/"><i class="ka ka16 ka-torrent"></i>latest</a></li>
			<li class="topMsg"><a href="/movies/"><i class="ka ka16 ka-movie"></i>Movies</a></li>
			<li class="topMsg"><a href="/tv/"><i class="ka ka16 ka-movie"></i>TV</a></li>
			<li class="topMsg"><a href="/music/"><i class="ka ka16 ka-music-note"></i>Music</a></li>
			<li class="topMsg"><a href="/games/"><i class="ka ka16 ka-settings"></i>Games</a></li>
			<li class="topMsg"><a href="/books/"><i class="ka ka16 ka-bookmark"></i>Books</a></li>
			<li class="topMsg"><a href="/applications/"><i class="ka ka16 ka-settings"></i>Apps</a></li>
			<li class="topMsg"><a href="/anime/"><i class="ka ka16 ka-movie"></i>Anime</a></li>
			<li class="topMsg"><a href="/other/"><i class="ka ka16 ka-torrent"></i>Other</a></li>
			<li class="topMsg"><a href="/xxx/"><i class="ka ka16 ka-delete"></i>XXX</a></li>
		</ul>
	</li>
	<li>
		<a href="/community/"> <i class="ka ka-community"></i><span class="menuItem">community</span></a>
		<ul class="dropdown dp-right upper">
			<li class="topMsg"><a href="/faq/"><i class="ka ka16 ka-faq"></i>faq</a></li>
		</ul>
	</li>
	<li>
		<a href="/blog/"><i class="ka ka-rss"></i><span class="menuItem">Blog</span></a>
	</li>
	<li>
		<a href="/faq/"><i class="ka ka-faq"></i><span class="menuItem">FAQ</span></a>
	</li>
	<?php if ($_user->acl > 0): ?>
		<li>
			<a href="/user/<?=$_user->username?>/" class=""><i class="ka ka-user"></i><span class="menuItem usernameProfile"><?=$_user->username?></span></a>
			<ul class="dropdown dp-right upper">
				<li class="topMsg"><a href="/feedback/"><i class="ka ka16 ka-torrent"></i>Feedback</a></li>
				<li class="topMsg"><a href="/settings/"><i class="ka ka16 ka-settings"></i>Settings</a></li>
				<hr>
				<li class="topMsg"><a href="/auth/logout/"><i class="ka ka16 ka-user-remove"></i>Logout</a></li>
			</ul>
		</li>
	<?php else: ?>
		<li>
			<a href="/auth/login/" class="ajaxLink"><i class="ka ka-user"></i><span class="menuItem">Register / Sign In</span></a>
		</li>
	<?php endif; ?>
</ul>
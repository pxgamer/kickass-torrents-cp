<div class="badge">
	<div class="userPic">
		<div class="userPicHeight relative">
			<a href="/user/<?=$user->username?>/"><img src="<?=$user->avatar?>">
			</a>
		</div>
		<div class="badgeSiteStatus">
			<span class="<?=$user->online_status?>" title="<?=$user->online_status?>"></span>
		</div>
	</div>
	<!-- div class="userPic" -->
	<div class="badgeInfo">
		<span class="badgeUsernamejs font12px overhidden nobr">
			<a class="plain" href="/user/<?=$user->username?>/"><?=$user->username?></a><span title="Reputation" class="repValue <?=$user->reputation>0?'positive':'negative'?>"><?=$user->reputation?></span>
		</span>
		<span class="font10px lightgrey aclColor_<?=$user->acl_class?>"><strong><?=$user->custom_title?$user->custom_title:$user->default_title?></strong></span>
		<br><span class="font11px lightgrey"><a href="/community/user/<?=$user->username?>/" class="plain">posts: xxx</a></span><span class="font11px lightgrey"><a href="/user/<?=$user->username?>/uploads/" class="plain">uploads: xxx</a></span>
		<br>
		<span class="font11px lightgrey"><?=date('j F Y', $user->join_date);?></span>
	</div>
</div>
<!-- div class="badge" -->
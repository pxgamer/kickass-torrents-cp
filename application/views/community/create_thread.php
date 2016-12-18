<div class="center">
<h2>Create a thread</h2>
<small>in <a href="/community/">Community</a> &gt; <a href="/community/forum/<?=$forum->parent->url?>/"><?=$forum->parent->title?></a> &gt; <a href="/community/forum/<?=$forum->url?>/"><?=$forum->title?></a></small>
	<form action="/community/create/<?=$forum->id?>" method="POST">
		<center>
		<table width="534">
			<tbody>
				<tr>
					<td>
						<input type="text" class="textinput" width="100%" name="title" placeholder="Title" style="text-align:center;width:520px;">
					</td>
				</tr>
				<tr>
					<td>
						<textarea class="textinput" id="thread_content" name="content" placeholder="Write something..." maxlength="3000" style="height:250px;width850px;resize:none;"></textarea>
					</td>
				</tr>
				<?php if ($_user->acl >= 10): ?>
					<tr>
						<td>
							<label> <input type="checkbox" name="is_sticky"> Sticky Thread </label>
							<br />
							<label> <input type="checkbox" name="is_locked"> Lock Thread </label>
							<br />
						</td>
					</tr>
				<?php endif; ?>
				<tr>
					<td>
						<div class="buttonsline">
							<button type="submit" class="bigButton siteButton" style="float:right"><span>create</span></button>
							<button type="button" class="bigButton siteButton" style="float:right"><span>cancel</span></button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		</center>
	</form>
</div>
<pre>
	<?php print_r($forum); ?>
</pre>

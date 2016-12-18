<div class="center">
<h2>Edit thread</h2>
<small>in <a href="/community/">Community</a></small>
	<form action="/community/thread/edit/<?=$thread->thread_id?>" method="POST">
		<center>
		<table width="534">
			<tbody>
				<tr>
					<td>
						<input type="text" class="textinput" width="100%" name="title" placeholder="Title" style="text-align:center;width:520px;" value="<?=$thread->title?>">
					</td>
				</tr>
				<tr>
					<td>
						<textarea class="textinput" name="content" placeholder="Write something..." maxlength="3000" style="height:250px;width850px;resize:none;"><?=$thread->content?></textarea>
					</td>
				</tr>
				<?php if ($_user->acl >= 10): ?>
					<tr>
						<td>
							<label><input type="checkbox" name="is_sticky"> Sticky Thread</label>
							<br />
							<input type="checkbox" name="is_locked"> Lock Thread
							<br />
							<input type="checkbox" name="is_deleted"> Delete Thread
						</td>
					</tr>
					<tr>
						<td>
							<label>Move to a different forum:</label>
							<select name="forum_id">
								<option value="1">Forum Name</option>
							</select>
						</td>
					</tr>
				<?php endif; ?>
				<tr>
					<td>
						<br />
						<div class="buttonsline">
							<button type="submit" class="bigButton siteButton" style="float:right;"><span>save</span></button>
							<button type="button" class="bigButton siteButton" style="float:right;"><span>cancel</span></button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</center>
	</form>
</div>
<pre>
	<?php print_r($thread); ?>
</pre>

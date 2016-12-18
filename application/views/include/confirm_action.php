<div class="center">
	<form action="<?=$action?>" method="POST">
		<?php if (isset($data)): ?>
			<?php foreach($data as $d): ?>
				<input type="hidden" name="<?=$d->name?>" value="<?=$d->value?>">
			<?php endforeach; ?>
		<?php endif; ?>
		<h2>Confirm your action!</h2>
		<div class="buttonsline">
			<a class="bigButton siteButton" href="<?=$return_uri?>">cancel</a>
			<button class="bigButton siteButton" type="submit"><span>confirm</span></button>
		</div>
	</form>
</div>
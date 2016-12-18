<div class="mainpart"><script type="text/javascript" charset="utf-8">
	$(function () {
		$('.logintabSwitcher').tabs({ useHash: false });
		$('#tab-<?=$data->tab?>').click();
	});
</script>
<div class="tabs logintabSwitcher" style="width:400px;">
	<ul class="tabNavigation">
		<li><a data-nop="" href="#login" rel="login" class="darkButton selectedTab"><span>Login</span></a></li>
		<li><a data-nop="" href="#register" rel="register" id="register_link" class="darkButton"><span>Free Registration</span></a></li>
	</ul>
	<hr class="tabsSeparator">
	<div style="display: block;" id="tab-login" class="contentTabContainer">
		<div id="loginform">
			<form method="post" action="/auth/login/">
				<input name="return_uri" id="return_uri" value="" type="hidden">
				<div id="errordiv" style="display:none; color: red;"></div>
				<table class="formtable" border="0">
					<tbody>
						<tr>
							<td>E-mail</td>
							<td><input required="" name="email" id="field_email" class="textinput" value="<?=isset($data->email)?$data->email:''?>" autofocus="" type="email"></td>
						</tr>
						<tr>
							<td class="valignTop width100px">Password</td>
							<td>
								<input required="" name="password" id="field_password" class="textinput botmarg5px" value="" type="password">
								<label class="block font11px lightgrey"><a href="/auth/remind_password/" class="ajaxLink">Forgot your password?</a></label>
							</td>
						</tr>
						<tr>
							<td colspan="2"><br>
								<div class="buttonsline">
									<button type="submit" id="butlogin" class="siteButton bigButton floatleft"><span>login</span></button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	</div>
	<div style="display: none;" id="tab-register" class="contentTabContainer">
		<script type="text/javascript">
			$(function() {
				$("#register_link").bind("click.my", function() {
					$("#regform").find('img.captcha').click();
					$("#register_link").unbind("click.my");
				});
			});
			</script>
		<noscript><div class="alertfield">You need javascript to sign up</div></noscript>
		<script type="text/javascript" charset="utf-8">
			$(document).ready(function() {
				$('#password').showPassword();
			});
			function checkUserName(name) {
				if (!name) return;
				$('#usercheck').html('<img src="//kastatic.com/images/indicator.gif" />');
				$.post("/auth/check/"+encodeURIComponent(name)+"/", {} , function(response) {
					if (response != '' || response != undefined || response != null || response.method == 'ok') {
						if (response.html == 'fail') {
							return $('#usercheck').html('<span class="ka ka16 ka-delete ka-red" title="Username abusive or occupied."></span>');
						} else if (response.html == 'ok') {
							return $('#usercheck').html('<span class="ka ka16 ka-accept ka-green" title="Great username, mate!"></span>');
						}
					}
					$('#usercheck').html('<span class="ka ka16 ka-delete" title="Error"></span>');
				}, 'json');
			}
		</script>
		<div id="regform">
			<p class="accentbox botmarg20px">All these annoying banners are shown only to anonymous users. Care to join?</p>
			<form id="form_register_box" method="post" action="/auth/register/" onsubmit="proof(this);">
				<input name="return_uri" value="" type="hidden">
				<table class="formtable valignTop">
					<tbody>
						<tr>
							<td class="width100px">E-mail <span class="asterisk">*</span></td>
							<td><input required="" name="email" value="" class="textinput " type="email"></td>
						</tr>
						<tr>
							<td>Nickname <span class="asterisk">*</span></td>
							<td><input required="" name="nickname" value="" class="textinput" onblur="checkUserName(this.value)" type="text"><span id="usercheck" style="padding: 2px 5px 3px 5px;"></span></td>
						</tr>
						<tr>
							<td class="toppad5px">Password <span class="asterisk">*</span></td>
							<td><input value="" class="spin_556 textinput botmarg5px" style="display: none;" type="text"><input required="" id="password" name="password" class="textinput botmarg5px" type="password"></td>
						</tr>
						<!-- <tr>
							<td class="toppad5px">Captcha <span class="asterisk">*</span></td>
							<td>
								<img class="captcha" src="/captcha/show/?9496" alt="CAPTCHA" title="Click to reload" style="width: 140px; height: 47px; cursor: pointer;">
								<a class="kaButton smallButton normalText captchareload"><i class="ka ka-arrow2-up"></i> Not seeing the captcha?</a>
								<input name="captcha" class="textinput botmarg5px topmarg5px" required="required" type="text">
							</td>
						</tr> -->
						<tr>
							<td>
								<button type="submit" class="siteButton bigButton" id="butcreateaccount"><span>Create Account</span></button>
							</td>
						</tr>
						<tr>
							<td class="checkandtext" colspan="2">
								<small class="lightgrey"> When you create an account, you agree to <a href="/tos/" target="_blank">the terms of service</a></small>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	</div>
</div>

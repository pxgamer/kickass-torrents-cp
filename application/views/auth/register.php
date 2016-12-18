<script type="text/javascript" charset="utf-8">
// $(document).ready(function() {
// 	$('#password').showPassword();
// });
// function checkUserName(name) {
//     if (!name) return;
// 	$('#usercheck').html('<img src="//kastatic.com/images/indicator.gif" />');
// 	$.post("/auth/check/"+encodeURIComponent(name)+"/", {} , function(response) {
// 	    if (response != '' || response != undefined || response != null || response.method == 'ok') {
// 	        if (response.html == 'fail') {
//                 return $('#usercheck').html('<span class="ka ka16 ka-delete ka-red" title="Username abusive or occupied."></span>');
// 	        } else if (response.html == 'ok') {
// 	            return $('#usercheck').html('<span class="ka ka16 ka-accept ka-green" title="Great username, mate!"></span>');
// 	        }
// 	    }
// 	    $('#usercheck').html('<span class="ka ka16 ka-delete" title="Error"></span>');
// 	}, 'json');
// }
</script>
<div id="regform">
    <p class="accentbox botmarg20px">All these annoying banners are shown only to anonymous users. Care to join?</p>
	<form id="form_register_box" method="post" action="/auth/register/" onsubmit="proof(this);">
		<input name="return_uri" value="" type="hidden">
		<table class="formtable valignTop">
			<tbody>
			<tr style="display:<?=isset($data->error)?'block':'none'?>"><div class="alertfield"><?=isset($data->error) ? $data->error : 'An error ocurred during registration'; ?></tr>
			<tr>
				<td class="width100px">E-mail <span class="asterisk">*</span></td>
				<td><input required="" name="email" value="<?=isset($data->email) ? $data->email : ''; ?>" class="textinput " type="email"></td>
			</tr>
			<tr>
				<td>Username <span class="asterisk">*</span></td>
				<td><input required="" name="username" value="<?=isset($data->username) ? $data->username : ''; ?>" class="textinput" onblur="checkUserName(this.value)" type="text"><span id="usercheck" style="padding: 2px 5px 3px 5px;"></span></td>
			</tr>
			<tr>
				<td class="toppad5px">Password <span class="asterisk">*</span></td>
				<td><input value="" class="spin_556 textinput botmarg5px" style="display: none;" type="text"><input required="" id="password" name="password" class="textinput botmarg5px" type="password"><label class="nobr block font11px lightgrey"><input id="spcb_556" name="password-input" value="sp" type="checkbox"> Show password</label></td>
			</tr>
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
		</tbody></table>
	</form>
</div>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="auto"><head>
	<script src="/assets/js/jquery-3.1.0.min.js"></script>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="Content-Style-Type" content="text/css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<title><?=isset($title)?$title.' - ':''?>Kickass Torrents Dev</title>
	<link rel="stylesheet" type="text/css" href="/assets/css/main.css" charset="utf-8">
	<link rel="shortcut icon" href="/assets/images/favicon.ico">
	<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">

	<!--[if IE 7]>
	<link href="/assets/css/ie7-49027c6.css" rel="stylesheet" type="text/css"/>
	<![endif]-->

	<!--[if IE 8]>
	<link href="/assets/css/ie8.css" rel="stylesheet" type="text/css"/>
	<![endif]-->

	<!--[if lt IE 9]>
	<script src="/assets/js/html5.min-49027c6.js" type="text/javascript"></script>
	<![endif]-->

	<!--[if gte IE 9]>
	<link href="/assets/css/ie9-49027c6.css" rel="stylesheet" type="text/css"/>
	<![endif]-->
	<script type="text/javascript">
		var katUser = {};
		var kat = {
			release_id: '49027c6',
			detect_lang: 0,
			spare_click: 1,
			mobile: false
		};
	</script>
	<script src="/assets/js/cookies.js" type="text/javascript"></script>
	<script src="/assets/js/main.js" type="text/javascript"></script>
	<script src="/assets/js/something.js" type="text/javascript"></script>
	<script src="/assets/js/fancybox.js" type="text/javascript"></script>
	<script src="/assets/js/bbedit.js" type="text/javascript"></script>
	<script src="/assets/js/jquery.ui.touch-punch-49027c6.js" type="text/javascript"></script>
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
</head>
<body class="mainBody">
	<div id="wrapper">
		<div id="wrapperInner">
			<div id="logindiv"></div>
			<header>
				<nav id="menu">
					<a href="/" id="logo"></a>
					<a href="#" id="showHideSearch"><i class="ka ka-zoom"></i></a>
					<div id="torrentSearch">
						<form action="/usearch/" method="get" id="searchform" accept-charset="utf-8" onsubmit="return doSearch(this.q.value);">
							<input id="contentSearch" class="input-big ui-autocomplete-input" name="q" value="" autocomplete="off" placeholder="Search query" type="text"><div id="searchTool"><a title="Advanced search" href="/advanced/" class="ajaxLink"><i class="ka ka-settings"></i></a><button title="search" type="submit" value="" onfocus="this.blur();" onclick="this.blur();"><i class="ka ka-search"></i></button></div>
						</form>
					</div>
					<?php $this->load->view('include/header', array('_user'=>$_user)); ?>
				</nav>
			</header>
			<div class="pusher"></div>
			<?= isset($tagcloud) ? $this->load->view('include/tagcloud', null, true) : ''; ?>
			<div class="mainpart">
				<?= isset($view) ? $view : ''; ?>
			</div>
			<div id="translate_site" style="display:none">
				<h3>Select Your Language</h3>
				<div class="textcontent">
					<div style="line-height:140%;-moz-column-width: 12em; -moz-columns: 12em; -webkit-columns: 12em; columns:12em;">
						<ul>
							<li class="current_lang"><a href="#" onclick="setLanguage('en', '.kat.cr');return false;" class="plain"><strong>English</strong></a></li>
							<li><a href="#" onclick="setLanguage('af', '.kat.cr');return false;" class="plain">Afrikaans</a></li>
							<li><a href="#" onclick="setLanguage('al', '.kat.cr');return false;" class="plain">Albanian</a></li>
							<li><a href="#" onclick="setLanguage('arr', '.kat.cr');return false;" class="plain">Arabic</a></li>
							<li><a href="#" onclick="setLanguage('ar', '.kat.cr');return false;" class="plain">Arabic (Modern)</a></li>
							<li><a href="#" onclick="setLanguage('eu', '.kat.cr');return false;" class="plain">Basque</a></li>
							<li><a href="#" onclick="setLanguage('bn', '.kat.cr');return false;" class="plain">Bengali</a></li>
							<li><a href="#" onclick="setLanguage('bs', '.kat.cr');return false;" class="plain">Bosnian</a></li>
							<li><a href="#" onclick="setLanguage('br', '.kat.cr');return false;" class="plain">Brazilian Portuguese</a></li>
							<li><a href="#" onclick="setLanguage('bg', '.kat.cr');return false;" class="plain">Bulgarian</a></li>
							<li><a href="#" onclick="setLanguage('ch', '.kat.cr');return false;" class="plain">Chinese Simplified</a></li>
							<li><a href="#" onclick="setLanguage('tw', '.kat.cr');return false;" class="plain">Chinese Traditional</a></li>
							<li><a href="#" onclick="setLanguage('hr', '.kat.cr');return false;" class="plain">Croatian</a></li>
							<li><a href="#" onclick="setLanguage('cz', '.kat.cr');return false;" class="plain">Czech</a></li>
							<li><a href="#" onclick="setLanguage('da', '.kat.cr');return false;" class="plain">Danish</a></li>
							<li><a href="#" onclick="setLanguage('nl', '.kat.cr');return false;" class="plain">Dutch</a></li>
							<li><a href="#" onclick="setLanguage('tl', '.kat.cr');return false;" class="plain">Filipino</a></li>
							<li><a href="#" onclick="setLanguage('fi', '.kat.cr');return false;" class="plain">Finnish</a></li>
							<li><a href="#" onclick="setLanguage('fr', '.kat.cr');return false;" class="plain">French</a></li>
							<li><a href="#" onclick="setLanguage('ka', '.kat.cr');return false;" class="plain">Georgian</a></li>
							<li><a href="#" onclick="setLanguage('de', '.kat.cr');return false;" class="plain">German</a></li>
							<li><a href="#" onclick="setLanguage('el', '.kat.cr');return false;" class="plain">Greek</a></li>
							<li><a href="#" onclick="setLanguage('he', '.kat.cr');return false;" class="plain">Hebrew</a></li>
							<li><a href="#" onclick="setLanguage('hi', '.kat.cr');return false;" class="plain">Hindi</a></li>
							<li><a href="#" onclick="setLanguage('hu', '.kat.cr');return false;" class="plain">Hungarian</a></li>
							<li><a href="#" onclick="setLanguage('id', '.kat.cr');return false;" class="plain">Indonesian</a></li>
							<li><a href="#" onclick="setLanguage('it', '.kat.cr');return false;" class="plain">Italian</a></li>
							<li><a href="#" onclick="setLanguage('kn', '.kat.cr');return false;" class="plain">Kannada</a></li>
							<li><a href="#" onclick="setLanguage('ko', '.kat.cr');return false;" class="plain">Korean</a></li>
							<li><a href="#" onclick="setLanguage('lv', '.kat.cr');return false;" class="plain">Latvian</a></li>
							<li><a href="#" onclick="setLanguage('lt', '.kat.cr');return false;" class="plain">Lithuanian</a></li>
							<li><a href="#" onclick="setLanguage('mk', '.kat.cr');return false;" class="plain">Macedonian</a></li>
							<li><a href="#" onclick="setLanguage('ml', '.kat.cr');return false;" class="plain">Malayalam</a></li>
							<li><a href="#" onclick="setLanguage('ms', '.kat.cr');return false;" class="plain">Malaysian</a></li>
							<li><a href="#" onclick="setLanguage('ne', '.kat.cr');return false;" class="plain">Nepali</a></li>
							<li><a href="#" onclick="setLanguage('no', '.kat.cr');return false;" class="plain">Norwegian</a></li>
							<li><a href="#" onclick="setLanguage('pr', '.kat.cr');return false;" class="plain">Pirate</a></li>
							<li><a href="#" onclick="setLanguage('pl', '.kat.cr');return false;" class="plain">Polish</a></li>
							<li><a href="#" onclick="setLanguage('pt', '.kat.cr');return false;" class="plain">Portuguese</a></li>
							<li><a href="#" onclick="setLanguage('pa', '.kat.cr');return false;" class="plain">Punjabi</a></li>
							<li><a href="#" onclick="setLanguage('ro', '.kat.cr');return false;" class="plain">Romanian</a></li>
							<li><a href="#" onclick="setLanguage('ru', '.kat.cr');return false;" class="plain">Russian</a></li>
							<li><a href="#" onclick="setLanguage('sr', '.kat.cr');return false;" class="plain">Serbian</a></li>
							<li><a href="#" onclick="setLanguage('src', '.kat.cr');return false;" class="plain">Serbian-Cyrillic</a></li>
							<li><a href="#" onclick="setLanguage('bsc', '.kat.cr');return false;" class="plain">Serbian-Cyrillic (ijekavica)</a></li>
							<li><a href="#" onclick="setLanguage('si', '.kat.cr');return false;" class="plain">Sinhala</a></li>
							<li><a href="#" onclick="setLanguage('sk', '.kat.cr');return false;" class="plain">Slovak</a></li>
							<li><a href="#" onclick="setLanguage('sl', '.kat.cr');return false;" class="plain">Slovenian</a></li>
							<li><a href="#" onclick="setLanguage('es', '.kat.cr');return false;" class="plain">Spanish</a></li>
							<li><a href="#" onclick="setLanguage('sw', '.kat.cr');return false;" class="plain">Swahili</a></li>
							<li><a href="#" onclick="setLanguage('sv', '.kat.cr');return false;" class="plain">Swedish</a></li>
							<li><a href="#" onclick="setLanguage('ta', '.kat.cr');return false;" class="plain">Tamil</a></li>
							<li><a href="#" onclick="setLanguage('te', '.kat.cr');return false;" class="plain">Telugu</a></li>
							<li><a href="#" onclick="setLanguage('tr', '.kat.cr');return false;" class="plain">Turkish</a></li>
							<li><a href="#" onclick="setLanguage('uk', '.kat.cr');return false;" class="plain">Ukrainian</a></li>
							<li><a href="#" onclick="setLanguage('ur', '.kat.cr');return false;" class="plain">Urdu</a></li>
							<li><a href="#" onclick="setLanguage('vi', '.kat.cr');return false;" class="plain">Vietnamese</a></li>
						</ul>
					</div>
				</div><!-- div class="textcontent" -->
			</div>
		</div><!--id="main"-->
	</div><!--id="wrap"-->

	<footer class="lightgrey">
		<ul>
			<li><a class="plain" data-nop="" href="#translate_site" id="translate_link"><strong>change language</strong></a></li>
			<li><a href="/rules/" class="lower">rules</a></li>
			<li><a href="/ideabox/">idea box</a></li>
			<li><a href="/faq/">FAQ</a></li>
			<li class="lower"><a href="/achievements/">Achievements</a></li>
			<li class="lower"><a href="/latest-searches/">Latest Searches</a></li>
			<li><a href="/request/">torrent requests</a></li>
		</ul>
		<ul>
			<li><a href="/about/">about</a></li>
			<li><a href="/privacy/">privacy</a></li>
			<li><a href="/dmca/">dmca</a></li>
			<li><a href="/logos/">logos</a></li>
			<li><a href="/contacts/">contacts</a></li>
			<li><a href="/api/">api</a></li>
			<li><a href="https://kastatus.com/">KAT status</a></li>
		</ul>
	</footer>
	<!-- <a class="feedbackButton eventsButtons" href="/issue/create/" id="feedback"><span>Report a bug</span></a> -->


<div id="fancybox-tmp"></div><div id="fancybox-loading"><div></div></div><div id="fancybox-overlay"></div><div id="fancybox-wrap"><div id="fancybox-outer"><div id="fancybox-content"></div><a data-nop="" id="fancybox-close"><i class="ka ka16 ka-delete"></i></a><div id="fancybox-title"></div><a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a><a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a></div></div><div id="previewPopupContainer">   <div class="tail"></div>   <div class="prevAV topOriented darkivorybg" id="prevAV">Loading...</div>   <div id="previewPopupContent"><img style="display:block;" src="/assets/images/indicator.gif"></div></div><ul style="display: none;" tabindex="0" id="ui-id-1" class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content"></ul><span class="ui-helper-hidden-accessible" aria-relevant="additions" aria-live="assertive" role="status"></span>
</body></html>

<?php

class O extends CI_Model {

	function __construct() {
		parent::__construct();

	}

	function json($method = 'show', $html = '') {
		return $this->output
			->set_output(json_encode(array(
			'method' => $method,
			'html' => $html
			)));
	}


    function BBCode($str) {
        // Replace any html brackets with HTML Entities to prevent executing HTML or script
        // Don't use strip_tags here because it breaks [url] search by replacing & with amp
        $str = str_replace("<", "&lt;", $str);
        $str = str_replace(">", "&gt;", $str);


        // Set up the parameters for a URL search string
        $URLSearchString = " a-zA-Z0-9\:\/\-\?\&\.\=\_\~\#\'";
        // Set up the parameters for a MAIL search string
        $MAILSearchString = $URLSearchString . " a-zA-Z0-9\.@";

        //Non BB URL Search
        //$str = eregi_replace("([[:alnum:]]+)://([^[:space:]]*)([[:alnum:]#?/&=])", "<a href=\"\\1://\\2\\3\" target=\"_blank\" target=\"_new\">\\1://\\2\\3</a>", $str);
        //$str = eregi_replace("(([a-z0-9_]|\\-|\\.)+@([^[:space:]]*)([[:alnum:]-]))", "<a href=\"mailto:\\1\" target=\"_new\">\\1</a>", $str);
        if (substr($str, 0, 7) == "http://") {
            $str = eregi_replace("([[:alnum:]]+)://([^[:space:]]*)([[:alnum:]#?/&=])",
                "<a href=\"\\1://\\2\\3\">\\1://\\2\\3</a>", $str);
            // Convert new line chars to html <br /> tags
            $str = nl2br($str);
        } else {
            // Perform URL Search
            $str = preg_replace("/\[url\]([$URLSearchString]*)\[\/url\]/",
                '<a href="javascript:go(\'$1\',\'new\')">$1</a>', $str);
            $str = preg_replace("(\[url\=([$URLSearchString]*)\](.+?)\[/url\])",
                '<a href="javascript:go(\'$1\',\'new\')">$2</a>', $str);
            //$str = preg_replace("(\[url\=([$URLSearchString]*)\]([$URLSearchString]*)\[/url\])", '<a href="$1" target="_blank">$2</a>', $str);
            // Convert new line chars to html <br /> tags
            $str = nl2br($str);
        }
        
        // Check for bold text
        $str = preg_replace("(\[b\](.+?)\[\/b])is", '<span class="bold">$1</span>', $str);

        // Check for Italics text
        $str = preg_replace("(\[i\](.+?)\[\/i\])is", '<span class="italic">$1</span>', $str);

        // Check for Underline text
        $str = preg_replace("(\[u\](.+?)\[\/u\])is", '<span class="underline">$1</span>', $str);

        // Check for strike-through text
        $str = preg_replace("(\[s\](.+?)\[\/s\])is", '<span class="strikethrough">$1</span>', $str);

        // Check for over-line text
        $str = preg_replace("(\[o\](.+?)\[\/o\])is", '<span class="overline">$1</span>', $str);

        // Check for colored text
        $str = preg_replace("(\[color=(.+?)\](.+?)\[\/color\])is", "<span style=\"color: $1\">$2</span>",
            $str);

        // Check for sized text
        $str = preg_replace("(\[size=(.+?)\](.+?)\[\/size\])is", "<span style=\"font-size: $1px\">$2</span>",
            $str);

        // Check for list text
        $str = preg_replace("/\[list\](.+?)\[\/list\]/is",
            '<ul class="listbullet">$1</ul>', $str);
        $str = preg_replace("/\[list=1\](.+?)\[\/list\]/is",
            '<ul class="listdecimal">$1</ul>', $str);
        $str = preg_replace("/\[list=i\](.+?)\[\/list\]/s",
            '<ul class="listlowerroman">$1</ul>', $str);
        $str = preg_replace("/\[list=I\](.+?)\[\/list\]/s",
            '<ul class="listupperroman">$1</ul>', $str);
        $str = preg_replace("/\[list=a\](.+?)\[\/list\]/s",
            '<ul class="listloweralpha">$1</ul>', $str);
        $str = preg_replace("/\[list=A\](.+?)\[\/list\]/s",
            '<ul class="listupperalpha">$1</ul>', $str);
        $str = str_replace("[*]", "<li>", $str);

        // Check for [code] text
        $str = preg_replace("/\[code\](.+?)\[\/code\]/is", "$CodeLayout", $str);

        // Images
        // [img]pathtoimage[/img]
        $str = preg_replace("/\[img\](.+?)\[\/img\]/", '<img src="$1">', $str);

        // [img=widthxheight]image source[/img]
        $str = preg_replace("/\[img\=([0-9]*)x([0-9]*)\](.+?)\[\/img\]/",
            '<img src="$3" height="$2" width="$1">', $str);

        return $str;
    }  

    function parse_bbcode($str) {
    	// $str = str_replace('\r', '\n', $str);
    	
    	$regex = '~\[quote\]((?:(?!\[/quote\]).)*)\[/quote\]~m';
    	while(preg_match($regex, $str, $m)) {
    		$str = preg_replace($regex, '<div class="quote">'.$m[1].'</div>', $str, 1);
    	}
    	$regex = '~\[quote="([^"]+)"\]((?:(?!\[/quote\]).)*)\[/quote\]~m';
    	while(preg_match($regex, $str, $m)) {
    		$str = preg_replace($regex, '<div class="quote"><div class="quoteAuthor"><a class="plain" href="/user/'.$m[1].'/">'.$m[1].'</a></div>'.$m[2].'</div>', $str, 1);
    	}
        $regex = '~\[spoiler\]((?:(?!\[/spoiler\]).)*)\[/spoiler\]~m';
    	while(preg_match($regex, $str, $m)) {
    		$str = preg_replace($regex, '<div class="spoiler_body"><div class="spoiler_header"><a class="spoiler_toggle siteButton smallButton"><span>toggle spoiler</span></a></div><div style="display: none;" class="spoiler_js">'.$m[1].'</div></div>', $str, 1);
    	}
    	$regex = '~\[spoiler="([^"]+)"\]((?:(?!\[/spoiler\]).)*)\[/spoiler\]~m';
    	while(preg_match($regex, $str, $m)) {
    		$str = preg_replace($regex, '<div class="spoiler_body"><div class="spoiler_header"><a class="spoiler_toggle spoiler_custom siteButton smallButton"><span>'.$m[1].'</span></a></div><div style="display: none;" class="spoiler_js">'.$m[2].'</div></div>', $str, 1);
    	}
    	$regex = '~\[size=([^\]]+)\]((?:(?!\[/size\]).)*)\[/size\]~m';
    	while(preg_match($regex, $str, $m)) {
    		if (!is_nan($m[1])) $m[1] = $m[1].'%'; 
    		$str = preg_replace($regex, '<span style="font-size:'.$m[1].'">'.$m[2].'</span>', $str, 1);
    	}
    	$regex = '~\[color="([^"]+)"\]((?:(?!\[/color\]).)*)\[/color\]~m';
    	while(preg_match($regex, $str, $m)) {
    		$str = preg_replace($regex, '<span style="color:'.$m[1].'">'.$m[2].'</span>', $str, 1);
    	}
    	$regex = '~\[color=#([a-f0-9]{3}|[a-f0-9]{6})\]((?:(?!\[/color\]).)*)\[/color\]~';
    	while(preg_match($regex, $str, $m)) {
    		$str = preg_replace($regex, '<span style="color:#'.$m[1].'">'.$m[2].'</span>', $str, 1);
    	}
    	$regex = '~\[url="([^"]+)"\]((?:(?!\[/url\]).)*)\[/url\]~m';
    	while(preg_match($regex, $str, $m)) {
    		$str = preg_replace($regex, '<a href="'.$m[1].'">'.$m[2].'</a>', $str, 1);
    	}
    	$regex = '~\[url\]((?:(?!\[/url\]).)*)\[/url\]~m';
    	while(preg_match($regex, $str, $m)) {
    		$str = preg_replace($regex, '<a href="'.$m[1].'">'.$m[1].'</a>', $str, 1);
    	}
    	$str = preg_replace("/[\r\n](\[list[^\]]*\])[\n\r]*/is", '$1', $str);
        $str = preg_replace("/\[list\](.+?)\[\/list\]/is", '<ul class="listbullet">$1</ul>', $str);
        $str = preg_replace("/\[list=1\](.+?)\[\/list\]/is", '<ul class="listdecimal">$1</ul>', $str);
        $str = preg_replace("/\[list=i\](.+?)\[\/list\]/s", '<ul class="listlowerroman">$1</ul>', $str);
        $str = preg_replace("/\[list=I\](.+?)\[\/list\]/s", '<ul class="listupperroman">$1</ul>', $str);
        $str = preg_replace("/\[list=a\](.+?)\[\/list\]/s", '<ul class="listloweralpha">$1</ul>', $str);
        $str = preg_replace("/\[list=A\](.+?)\[\/list\]/s", '<ul class="listupperalpha">$1</ul>', $str);
        $str = preg_replace("/\[\*\]/", "<li>", $str);

        $str = preg_replace('~[\n\r]+~im', '<br>', $str);
        $str = preg_replace('~\s+~ism', ' ', $str);

    	$find = array('~\[b\](.*?)\[/b\]~s',
					'~\[i\](.*?)\[/i\]~s',
					'~\[u\](.*?)\[/u\]~s',
					'~\[s\](.*?)\[/s\]~s',
					'~\[small](.*?)\[/small\]~s',
					'~\[left](.*?)\[/left\]~s',
					'~\[center](.*?)\[/center\]~s',
					'~\[right](.*?)\[/right\]~s',
					'~\[justify](.*?)\[/justify\]~s',
					'~\[img\](https?://.*?\.(?:jpg|jpeg|gif|png|bmp|svg))\[/img\]~s');
    	$replace = array('<b>$1</b>',
						'<i>$1</i>',
						'<u>$1</u>',
						'<s>$1</s>',
						'<small>$1</small>',
						'<div style="text-align:left;">$1</div>',
						'<div style="text-align:center;">$1</div>',
						'<div style="text-align:right;">$1</div>',
						'<div style="text-align:justify;">$1</div>',
						'<img src="$1" alt="image" />');
    	return preg_replace($find, $replace, $str);
    }

}
// Prefix: hup

var hup_input_area = (function () {/*
<div style="width: 98%; margin:20px 0; padding:5px; background:rgba(151,211,227,0.1); border:1px s
olid #42aac7;">
<label><input type="number" id="hup-min" value=30 min=1 style="width: 100px;"> min.</label>
<button id="hup-start-btn" onclick="hupStartTimer()">Start</button>
<span id="hup-timer" style="color: #42aac7;"></span>
</div>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

var hup_finish_sec=0, hup_current_sec=0;
var hup_timer;

hupAddOnload(hupInit);

function hupInit(){
	if(typeof jQuery == 'undefined'){
		var script = document.createElement('script');
		script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
		document.body.appendChild(script);
	}
	jQuery('#wp-content-wrap').before(hup_input_area);
}

function hupStartTimer(){
	var input_min = jQuery('#hup-min').attr('value');
	if(input_min.match(/^[0-9]+$/)){
		jQuery('#hup-min').attr('readonly','true');
		jQuery('#hup-start-btn').attr('disabled','true');
		hup_finish_sec = 60 * input_min;
		hup_current_sec = 0;
		hup_timer = setInterval('hupTimer()', 1000);
	} else {
		alert("Please set correct value as timer value");
	}
}

function hupPost(){
  jQuery('#publish').click();
}

function hupTimer(){
	hup_current_sec++;
	var remain = hup_finish_sec - hup_current_sec;
	if(remain>0) {
		var min = Math.floor(remain/60);
		var sec = remain - (60*min);
		jQuery('#hup-timer').html('Remaining: <strong>'+min+' min '+sec+' sec</strong>');
	} else {
		clearInterval(hup_timer);
		hupPost();
	}
}

function hupAddOnload(func) {
	try {
		window.addEventListener("load", func, false);
	} catch (e) {
		// for IE
		window.attachEvent("onload", func);
	}
}
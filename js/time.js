// JavaScript Document
//#region 时间
	function showLocale(objD) {
		var str, colorhead, colorfoot;
		var yy = objD.getYear();
		if (yy < 1900) yy = yy + 1900;
		var MM = objD.getMonth() + 1;
		if (MM < 10) MM = '0' + MM;
		var dd = objD.getDate();
		if (dd < 10) dd = '0' + dd;
		var hh = objD.getHours();
		if (hh < 10) hh = '0' + hh;
		var mm = objD.getMinutes();
		if (mm < 10) mm = '0' + mm;
		var ss = objD.getSeconds();
		if (ss < 10) ss = '0' + ss;
		var ww = objD.getDay();
		if (ww == 0) colorhead = "<font color=\"#FFFFFF\">";
		if (ww > 0 && ww < 6) colorhead = "<font color=\"#FFFFFF\">";
		if (ww == 6) colorhead = "<font color=\"#FFFFFF\">";
		if (ww == 0) ww = "星期日";
		if (ww == 1) ww = "星期一";
		if (ww == 2) ww = "星期二";
		if (ww == 3) ww = "星期三";
		if (ww == 4) ww = "星期四";
		if (ww == 5) ww = "星期五";
		if (ww == 6) ww = "星期六";
		colorfoot = "</font>";
		//str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "  " + ww + colorfoot;
		str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "  " + colorfoot;
		return (str);
	}
	function tick() {
		var today;
		today = new Date();
		document.getElementById("localtime").innerHTML = showLocale(today);
		window.setTimeout("tick()", 1000);
	}
	tick();

//#endregion

//#region 今日支付金额

$(function() {
    setInterval(function() {
        var num = Math.floor(Math.random() * 10);
        var num1 = Math.floor(Math.random() * 10);
        var num2 = Math.floor(Math.random() * 10);
        var num3 = Math.floor(Math.random() * 10);
        var num4 = Math.floor(Math.random() * 10);

        $("#Transaction1").html(num);
        $("#Transaction2").html(num1);
        $("#Transaction3").html(num2);
        $("#Transaction4").html(num3);
        $("#Transaction5").html(num4);
    }, 1000);
});


//#endregion
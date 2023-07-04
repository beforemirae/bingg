function regCheck(form){
	//form중 name속성이 있으며 regPass클래스가 없는 nodeList
	var targets = form.querySelectorAll("[name]:not([type='checkbox']):not([type='hidden']):not([type='file']):not(.regPass)");
	for(var i = 0; i < targets.length; i++){
		// var target = form.elements[targets[i].name];
		var target = targets[i];
		var tag = target.tagName.toLowerCase();
		if(tag != "select" && target.length > 1){
			for(var n = 0; n < target.length; n++){
				var tg = target[n];
				if(tg.value == ""){
					//alert(JSON.stringify(tg));
					if(tg.dataset.reg){
						alert(tg.dataset.reg);
					}else{
						alert(tg.placeholder);
					}
					return false;
				}
			}
		}else{
			if(target.value == ""){		//value값이 공백일때
				console.log('===>target: '+target);
				console.log('===>target.dataset: '+target.dataset);
				console.log('===>target.dataset: '+JSON.stringify(target.dataset));
				console.log('===>target.dataset.reg: '+target.dataset.reg);
				// console.log('===>target.data.reg: '+target.data.reg);
				if(target.dataset.reg){		//data-reg가 있으면
					alert(target.dataset.reg);	//data-reg값으로 얼럿
				}else{			
					alert(target.placeholder);	//placeholder값으로 얼럿	
				}
				// target.focus();
				return false;
			}
		}
	}
	return true;
}
function muAjax(json, form){
	var formData = (form && form.tagName == "FORM") ? new FormData(form) : new FormData();
	var url = (json.url) ? json.url : form.action;
	var method = (json.method) ? json.method : "POST";
	var data = json.data;
	for(key in data){
		formData.append(key, data[key]);
		//console.log(key+": "+data);
	}
	var option = (method.toLowerCase() == "post") ? { method: method, body: formData } : { method: method };
	//console.log(option);

	option.headers = {
		// 'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest'
	};
	return fetch(url, option)
	.then(function(response){
		if(response.status == 403){
			alert("세션이 만료되었습니다. 다시 로그인해주세요.");
			location.href = "/admin/";
		}
		if(response.ok){
			return response.text();
		}
	}).catch(function(error){
		throw new Error("ajax error!");
	});
}
function excuteEnter(excuteFunc)
{
	if(event.keyCode == 13){
		if(typeof isLoading == 'undefined')
		{
			excuteFunc();
			return;
		}
		else if(!isLoading)
		{
			excuteFunc();
			return;
		}
	}
}

function cutDate(dd)
{
	if(dd == "" || dd == null || dd == 'null' || dd == undefined)
	{
		return "";
	}
	else
	{
		if(trim(dd).length == 6)
		{
			var year = dd.substring(0,4);
			var month = dd.substring(4,6);
			return year+"-"+month;
		}
		else if(trim(dd).length == 8)
		{
			var year = dd.substring(0,4);
			var month = dd.substring(4,6);
			var day = dd.substring(6,8);
			return year+"-"+month+"-"+day;
		}
		else if(trim(dd).length == 12)
		{
			var year = dd.substring(0,4);
			var month = dd.substring(4,6);
			var day = dd.substring(6,8);
			var hour = dd.substring(8,10);
			var min = dd.substring(10,12);
			return year+"-"+month+"-"+day+" "+hour+":"+min;
		}
		else if(trim(dd).length == 14)
		{
			var year = dd.substring(0,4);
			var month = dd.substring(4,6);
			var day = dd.substring(6,8);
			var hour = dd.substring(8,10);
			var min = dd.substring(10,12);
			var sec = dd.substring(12,14);
			return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec;
		}
		else
		{
			return dd;
		}
	}
}

function cutPhone(dd)
{
	if(dd == "" || dd == null || dd == 'null' || dd == undefined)
	{
		return "";
	}
	else
	{
		if(trim(dd).length == 11)
		{
			var phone1 = dd.substring(0,3);
			var phone2 = dd.substring(3,7);
			var phone3 = dd.substring(7,11);
			return phone1 + "-" + phone2 + "-" + phone3;
		}
		else if(trim(dd).length == 10)
		{
			var phone1 = dd.substring(0,3);
			var phone2 = dd.substring(3,6);
			var phone3 = dd.substring(6,10);
			return phone1 + "-" + phone2 + "-" + phone3;
		}
		else
		{
			return dd;
		}
	}
}


function nullChk(d)
{
	if(d == "" || d == null || d == 'null' || d == undefined)
	{
		return "";
	}
	else
	{
		return d;
	}
}
function nullChkZero(d)
{
	if(d == "" || d == null || d == 'null' || d == undefined)
	{
		return Number("0");
	}
	else
	{
		var ret = d.toString().replace(/,/gi, ""); 
		return Number(ret);
	}
}
function comma(x) {
    return nullChkZero(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var setCookie = function(name, value, exp) 
{
	var date = new Date();
	date.setTime(date.getTime() + exp*24*60*60*1000);
	document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};
var getCookie = function(name) 
{
	var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return value? value[2] : null;
};

function getNow()
{
	var date = new Date(); 
	var year = date.getFullYear(); 
	var month = new String(date.getMonth()+1); 
	var day = new String(date.getDate()); 

	// 한자리수일 경우 0을 채워준다. 
	if(month.length == 1){ 
	  month = "0" + month; 
	} 
	if(day.length == 1){ 
	  day = "0" + day; 
	} 
	return year + "" + month + "" + day;
}
function getTime()
{
	var date = new Date(); 
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	// 한자리수일 경우 0을 채워준다. 
	if(h.toString().length == 1){ 
	  h = "0" + h.toString(); 
	} 
	if(m.toString().length == 1){ 
	  m = "0" + m.toString(); 
	} 
	if(s.toString().length == 1){ 
		s = "0" + s.toString(); 
	} 
	return h + "" + m + "" + s;
}
function trim(stringToTrim) {
    return nullChk(stringToTrim).toString().replace(/^\s+|\s+$/g,"");
}
function repWord(dd)
{
	dd = dd.replace(/&amt;/gi, "&");
	dd = dd.replace(/&lt;/gi, "<");
	dd = dd.replace(/&gt;/gi, ">");
	dd = dd.replace(/&quot;/gi, "\"");
	dd = dd.replace(/&#039;/gi, "\'");
	dd = dd.replace(/<br>/gi, "\n");

	return dd;
	
}


function repWord2(str){
	str = str.replace(/&/g,"&amt;");
	str = str.replace(/</g,"&lt;");
	str = str.replace(/>/g,"&gt;");
	str = str.replace(/\"/g,"&quot;");
	str = str.replace(/\'/g,"&#039;");
	str = str.replace(/\n/g,"<br>");
 return str;
}

function repWord3(dd)
{
	dd = dd.replace(/&amp;amt;amt;amt;/gi, "&");
	dd = dd.replace(/&amp;amt;amt;lt;/gi, "<");
	dd = dd.replace(/&amp;amt;amt;gt;/gi, ">");
	dd = dd.replace(/&amp;amt;amt;quot;/gi, "\"");
	dd = dd.replace(/&amp;amt;amt;#039;/gi, "\'");
	dd = dd.replace(/&amp;amt;lt;br&amp;amt;gt;/gi, "\n");
	return dd;
}

function repWord4(dd)
{
	dd = dd.replace(/&amp;amt;amt;/gi, "&");
	dd = dd.replace(/&amp;amt;lt;/gi, "<");
	dd = dd.replace(/&amp;amt;gt;/gi, ">");
	dd = dd.replace(/&amp;amt;quot;/gi, "\"");
	dd = dd.replace(/&amp;amt;#039;/gi, "\'");
	dd = dd.replace(/&amp;lt;br&amp;gt;/gi, "\n");
	return dd;
}
function repWord5(dd)
{
	dd = dd.replace(/&amt;/gi, "&");
	dd = dd.replace(/&lt;/gi, "<");
	dd = dd.replace(/&gt;/gi, ">");
	dd = dd.replace(/&quot;/gi, "\"");
	dd = dd.replace(/&#039;/gi, "\'");

	return dd;
	
}

//6자리 uid생성
function generateUID() {
	var ranNum = Math.floor(Math.random()*(999999-100000+1)) + 100000;
	return String(ranNum);
}


//자바스크립트 해시맵
HashMap = function(){  
    this.map = new Array();
};  
HashMap.prototype = {  
    put : function(key, value){  
        this.map[key] = value;
    },  
    get : function(key){  
        return this.map[key];
    },  
    getAll : function(){  
        return this.map;
    },  
    clear : function(){  
        this.map = new Array();
    },  
    isEmpty : function(){    
         return (this.map.size() == 0);
    },
    remove : function(key){    
         delete this.map[key];
    },
    toString : function(){
        var temp = '';
        for(i in this.map){  
            temp = temp + ',' + i + ':' +  this.map[i];
        }
        temp = temp.replace(',','');
          return temp;
    },
    keySet : function(){  
        var keys = new Array();  
        for(i in this.map){  
            keys.push(i);
        }  
        return keys;
    }
};

function start_loading(){
	$('#do_loading').show();
}

function end_loading(){
	$('#do_loading').hide();
}

function convert_code(code_nm){
	var result='';
	if (code_nm=="icecream") {
		result="PD01";
	} else if (code_nm=="milk") {
		result="PD02";
	} else if (code_nm=="yogurt") {
		result="PD03";
	} else if (code_nm=="coffee") {
		result="PD04";
	} else if (code_nm=="beverage") {
		result="PD09";
	} else if (code_nm=="juice") {
		result="PD10";
	} else if (code_nm=="snack") {
		result="PD05";
	} else if (code_nm=="health") {
		result="PD11";
	} else if (code_nm=="export") {
		result = "PD07";
	}
	return result;
}

function convert_code_en(code_nm){
	var result='';
	if (code_nm=="icecream") {
		result="PD01_EN";
	} else if (code_nm=="milk") {
		result="PD02_EN";
	} else if (code_nm=="yogurt") {
		result="PD03_EN";
	} else if (code_nm=="coffee") {
		result="PD04_EN";
	} else if (code_nm=="beverage") {
		result="PD09_EN";
	} else if (code_nm=="juice") {
		result="PD10_EN";
	} else if (code_nm=="snack") {
		result="PD05_EN";
	} else if (code_nm=="health") {
		result="PD11_EN";
	} else if (code_nm=="export") {
		result = "PD07_EN";
	}
	return result;
}

function change_period(day){
	var start_day='';
	var end_day='';
	if(nullChk($('#start_ymd').val())=='')
	{
		end_day = new Date()
	}
	else
	{
		start_day = $('#start_ymd').val().split('-');
		end_day = new Date(start_day[0],(start_day[1]*1),(start_day[2].split(' ')[0]*1));
	}

	if(day=="7day")
	{
		end_day.setDate(end_day.getDate() + 7)
	}
	else if(day=="14day")
	{
		end_day.setDate(end_day.getDate() + 14)
	}
	else if(day=="1mon")
	{
		end_day.setMonth(end_day.getMonth() + 1)
	}
	else if(day=="3mon")
	{
		end_day.setMonth(end_day.getMonth() + 3)
	}

	var end_year = end_day.getFullYear(); // 년도
	var end_month = end_day.getMonth() + 1;  // 월
	var end_date = end_day.getDate();  // 날짜

	end_month < 10?end_month="0"+end_month:'';
	end_date < 10?end_date="0"+end_date:'';

	if(day=='all')
	{
		$('#start_ymd').val('');
		$('#end_ymd').val('');
	}
	else
	{
		if($('#start_ymd').val()=='')
		{
			var now = new Date();
			var mon = now.getMonth()+1 < 10?'0'+(now.getMonth()+1):now.getMonth()+1;
			var day = now.getDate() < 10 ? '0'+now.getDate() : now.getDate();
			$('#start_ymd').val(now.getFullYear()+'-'+mon+'-'+day+" 00:00");
		}
		$('#end_ymd').val(end_year+"-"+end_month+"-"+end_date+" 23:59");
	}

}
//자바스크립트 해시맵

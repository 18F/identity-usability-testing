/*<![CDATA[*/
// Continious ScrollerII (01-November-2008)
// by: Vic Phillips http://www.vicsjavascripts.org.uk

//<body onload="zxcScroller('v','tst1',-1,100,2000,25,2000);">

// Application Notes
// The effect is initialised and controlled by event calls to function
// zxcScroller('h','tst2','start',1,100,200);
// where:
//  parameter 0 = the mode, for vertical 'v', for horizontal 'h'.                                (string 'v' or 'h')
//  parameter 1 = the unique id name of the scroll container.                                    (string)
//  parameter 2 = (optional) to scroll up/left = negative digit or down/right = positive digit.  (digit, default = -1)
//                may also be used to control the scroll speed.
//  parameter 3 = (optional) the scroll speed (milli seconds).                                   (digits, default = 100)
//  parameter 4 = (optional) the hold delay speed (milli seconds),                               (digits, default = no hold)
//                           may only be used if parameter 2 is 1 or -1.
//  parameter 5 = (optional) the hold position from the left/top (px).                           (digits, default = 0)
//  parameter 6 = (optional) the initial delay before scrolling (milli seconds).                 (digits, default = no auto start)
//
// The first call will initialise the effect.
// Subsequent calls may be used control the effect by updating parameters 2, 3

// To Stop & Start the Scroller
// Function zxcScrollerSS('tst1','v',true) may be used to stop and start the scroller.
// where:
//  parameter 0 = the mode, for vertical 'v', for horizontal 'h'. (string 'v' or 'h')
//  parameter 1 = the unique id name of the scroll container.     (string)
//  parameter 2 = (string) to toggle the rotation between stop and start the scroller. (string)
//  parameter 2 = true to start or false to stop the scroller.    (boolen, default = false)

var servername=window.location.hostname;

function trim (str) {
  while (str.charAt(0) == ' ')
    str = str.substring(1);
  while (str.charAt(str.length - 1) == ' ')
    str = str.substring(0, str.length - 1);
  return str;
}//--> end function trim

function validate() {

  if (trim(document.form_login.PIN.value) == "") {
    alert("Please enter your PIN (Social Security) number.");
    document.form_login.PIN.focus();
    return false;
  }
  else if (trim(document.form_login.Password.value) == "") {
    alert("Please enter your Password.");
    document.form_login.Password.focus();
    return false;
  }
  else if ((trim(document.form_login.Password.value).length < 8) || (trim(document.form_login.Password.value).length > 15)) {
    alert("Your password has to be between 8 and 15 characters.");
    document.form_login.Password.focus();
    return false;
  }
  return true;
}//--> end function validate

function getTheLink(page,newWin) {

//window.location.href = getSecureServer() + getPage(page)
var url;
var url=getSecureServer() + getPage(page);

	if (newWin === undefined) {
		window.location.href = url;
		}
		else {
		window.open(url);
		};

}// end function getTheLink


function getSecureServer() {

	switch(PortNumber) {

		case "8080": case "4343":
	
			switch(ServerName) {
				case 'rrbstage.rrb.gov': case 'securestage.rrb.gov': 
 					return 'https://securestage.rrb.gov:4343/';
  					break;
				case 'rrbtest.rrb.gov': case 'securetest.rrb.gov': 
 					return 'https://securetest.rrb.gov:4343/';
  					break;
			} //end switch servername for parallel webs
		
		default: //default ports

			switch(ServerName) {

				case "usrrbdev.rrb.gov": case "usrrbsecuredev.rrb.gov": 
 					return 'http://usrrbsecuredev.rrb.gov/';
 					break;
				case 'usrrbtest.rrb.gov': case 'usrrbsecuretest.rrb.gov': 
 					return 'http://usrrbsecuretest.rrb.gov/';
 					break;
				case 'rrbstage.rrb.gov': case 'securestage.rrb.gov': 
 					return 'https://securestage.rrb.gov/';
 					break;
				case 'rrbtest.rrb.gov': case 'securetest.rrb.gov': 
 					return 'https://securetest.rrb.gov/';
 					break;
 				case 'rrbnew.rrb.gov': case 'securenew.rrb.gov': 
 					return 'https://securenew.rrb.gov/';
 					break;
				case 'www.rrb.gov': case 'rrb.gov': case 'secure.rrb.gov': 
 					return 'https://secure.rrb.gov/';
 					break;
			} // end switch servername for all other webs

	} // end switch PortNumber

}// end function getSecureServer

function getHomeServer() {

	switch(PortNumber) {

		case "8080": case "4343":
	
			switch(ServerName) {
				case 'rrbstage.rrb.gov': case 'securestage.rrb.gov': 
 					return 'http://rrbstage.rrb.gov:8080/';
  					break;
				case 'rrbtest.rrb.gov': case 'securetest.rrb.gov': 
 					return 'http://rrbtest.rrb.gov:8080/';
  					break;
			} //end switch servername for parallel webs
		
		default: //default ports

			switch(ServerName) {

				case "usrrbdev.rrb.gov": case "usrrbsecuredev.rrb.gov": 
 					return 'http://usrrbdev.rrb.gov/';
 					break;
				case 'usrrbtest.rrb.gov': case 'usrrbsecuretest.rrb.gov': 
 					return 'http://usrrbtest.rrb.gov/';
 					break;
				case 'rrbstage.rrb.gov': case 'securestage.rrb.gov': 
 					return 'http://rrbstage.rrb.gov/';
 					break;
				case 'rrbtest.rrb.gov': case 'securetest.rrb.gov': 
 					return 'http://rrbtest.rrb.gov/';
 					break;
 				case 'rrbnew.rrb.gov': case 'securenew.rrb.gov': 
 					return 'http://rrbnew.rrb.gov/';
 					break;
				case 'www.rrb.gov': case 'rrb.gov': case 'secure.rrb.gov': 
 					return 'https://www.rrb.gov/';
 					break;
			} // end switch servername for all other webs

	} // end switch PortNumber

}// end function getHomeServer



function getPage(page) {
switch(page)
{
case "top":
  return 'mep/ben_services.asp'
  break;
case 'nologin':
  return 'mep/ee/ben_no_login_required.asp'
  break;
case 'login':
  return 'mep/ee/ben_login_required.asp'
  break;
case 'ppw':
  return 'mep/ee/ben_login_required.asp'
  break;
case 'request':
  return 'mainline/requests/rrbiservices.asp'
  break;
case 'bill':
  return 'mep/ee/ben_no_login_required.asp'
  break;
case 'ersnet':
  return 'ERSNet/login.aspx'
  break;
case 'ers':
  return 'employer/login_screen.html'
  break;
case 'erprogram':
  return 'ER_DOWNLOAD/'
  break;
case 'retplan':
  return 'MainLine/common/checkLogin.asp?App=RetPlan'
  break;
case 'servcomp':
  return 'MainLine/common/checkLogin.asp?App=ServComp'
  break;
case 'newpassword':
  return 'MainLine/PINPassword/home.asp?App=NewPassword'
  break;
case 'ruiaui1':
  return 'MainLine/common/checkLogin.asp?App=RUIA'
  break;
case 'ruiaui3':
  return 'MainLine/common/checkLogin.asp?App=RUIAUI3'
  break;
case 'ruiasi3':
  return 'MainLine/common/checkLogin.asp?App=RUIASI3'
  break;
case 'viewacct':
  return 'MainLine/common/checkLogin.asp?App=ViewAcct'
  break;
default:

  //code to be executed if n is different from case 1 and 2
} // end switch page
}// end function getPage

function SwapOver (cell) {
document.getElementById(cell).style.backgroundColor = '#d3d3d3'
}

function SwapOut (cell) {
document.getElementById(cell).style.backgroundColor = 'transparent'
}

function zxcScroller(zxcmde,zxcid,zxcud,zxcspd,zxchold,zxcholdpos,zxcsrt){
 var zxcp=document.getElementById(zxcid);
 zxcmde=(typeof(zxcmde)=='string'?(zxcmde+' '):' ').charAt(0).toLowerCase();
 if ((zxcmde!='v'&&zxcmde!='h')||!zxcp) return;
 if (!zxcp[zxcmde+'scroll']) return zxcp[zxcmde+'scroll']=new zxcScrollerOOP(zxcmde,zxcp,zxcud,zxcspd,zxchold,zxcholdpos,zxcsrt);
 var zxcoop=zxcp[zxcmde+'scroll']
 clearTimeout(zxcp.to);
 zxcoop.spd=zxcspd||zxcoop.spd;
 zxcoop.ud=zxcud||-zxcoop.ud;
}

function zxcScrollerSS(zxcp,zxcmde,zxcrun){
 if (typeof(zxcp)=='string') zxcp=document.getElementById(zxcp);
 zxcmde=(typeof(zxcmde)=='string'?(zxcmde+' '):' ').charAt(0).toLowerCase();
 if ((zxcmde!='v'&&zxcmde!='h')||!zxcp) return;
 var zxcoop=zxcp[zxcmde+'scroll'];
 if (zxcoop){
  zxcrun=zxcrun||false;
  clearTimeout(zxcoop.to);
  if (typeof(zxcrun)=='boolean') zxcoop.run=zxcrun||false;
  else zxcoop.run=!zxcoop.run;
  if (zxcoop.run) zxcoop.scroll();
 }
}

function zxcScrollerOOP(zxcmde,zxcp,zxcud,zxcspd,zxchold,zxcholdpos,zxcsrt){
 zxcp.style.overflow='hidden';
 this.p=zxcp;
 this.mde=zxcmde;
 this.vh=zxcmde=='v'?'top':'left';
 var zxcos=zxcmde=='v'?['offsetHeight','offsetTop','height']:['offsetWidth','offsetLeft','width'];
 var zxcc=zxcp.getElementsByTagName('DIV')[0];
 var zxcclds=zxcc.childNodes;
 for (var zxc0=0;zxc0<zxcclds.length;zxc0++){
  if (zxcclds[zxc0].nodeType==1){
   this.wh=zxcclds[zxc0][zxcos[0]]+zxcclds[zxc0][zxcos[1]];
  }
 }
 zxcholdpos=(typeof(zxcholdpos)=='number'?zxcholdpos:0)-this.wh;
 zxcc.style.position='absolute';
 zxcc.style[this.vh]=zxcholdpos+'px';
 zxcc.style[zxcos[2]]=this.wh+'px';
 var zxcmax=(zxcc[zxcos[0]]+zxcp[zxcos[0]]);
 var zxcpos=0;
 this.ary=[[zxcc,0,[]]];
 while (zxcpos<zxcmax){
  var zxc1=this.ary.length;
  this.ary[zxc1]=[zxcc.cloneNode(true),zxcpos+=this.wh,[]];
  this.ary[zxc1][0].style[this.vh]=this.ary[zxc1][1]+zxcholdpos+'px';
  zxcp.appendChild(this.ary[zxc1][0]);
 }
 for (var zxcclds,zxc2=0;zxc2<this.ary.length;zxc2++){
  zxcclds=this.ary[zxc2][0].childNodes;
  for (var zxc2a=0;zxc2a<zxcclds.length;zxc2a++){
   if (zxcclds[zxc2a].nodeType==1) this.ary[zxc2][2].push(zxcclds[zxc2a][zxcos[1]]);
  }
 }
 this.ud=zxcud||-1;
 this.spd=zxcspd||100;
 this.hold=typeof(zxchold)=='number'?zxchold:false;
 this.holdpos=typeof(zxchold)=='number'?zxcholdpos:0;
 this.to=null;
 this.data=[zxcpos,-this.wh];
 this.run=false;
 if (typeof(zxcsrt)=='number'){
  this.run=true;
  this.to=setTimeout(function(zxcoop){return function(){zxcoop.scroll();}}(this),zxcsrt);
 }
}

zxcScrollerOOP.prototype.scroll=function(){
 zxcspd=this.spd;
 for (var zxcr=1,zxc1=0;zxc1<this.ary.length;zxc1++){
  this.ary[zxc1][1]+=this.ud;
  this.ary[zxc1][0].style[this.vh]=this.ary[zxc1][1]+this.holdpos+'px'
  if (this.hold&&Math.abs(this.ud)==1){
   for (var zxc1a=0;zxc1a<this.ary[zxc1][2].length;zxc1a++){
    if (parseInt(this.ary[zxc1][0].style[this.vh])+this.ary[zxc1][2][zxc1a]*this.ud==this.holdpos) zxcspd=this.hold;
   }
  }
  if ((this.ud<0&&this.ary[zxc1][1]<=this.data[1])||(this.ud>0&&this.ary[zxc1][1]>this.data[0])) this.ary[zxc1][1]=this.data[(this.ud<0)?0:1]+this.ud;
 }
 this.to=setTimeout(function(zxcoop){return function(){zxcoop.scroll();}}(this),zxcspd);
}



/*]]>*/


/***********************************************
* Cross browser Marquee II- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
**********************************************

var delayb4scroll=0 //Specify initial delay before marquee starts to scroll on page (2000=2 seconds)
var marqueespeed=1 //Specify marquee scroll speed (larger is faster 1-10)
var pauseit=1 //Pause marquee onMousever (0=no. 1=yes)?

////NO NEED TO EDIT BELOW THIS LINE////////////

var copyspeed=marqueespeed
var pausespeed=(pauseit==0)? copyspeed: 0
var actualheight=''

function scrollmarquee(){
if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+8)) //if scroller hasn't reached the end of its height
cross_marquee.style.top=parseInt(cross_marquee.style.top)-copyspeed+"px" //move scroller upwards
else //else, reset to original position
cross_marquee.style.top=parseInt(marqueeheight)+8+"px"
}

function initializemarquee(){
cross_marquee=document.getElementById("vmarquee")
cross_marquee.style.top=0
marqueeheight=document.getElementById("marqueecontainer").offsetHeight
actualheight=cross_marquee.offsetHeight //height of marquee content (much of which is hidden from view)
if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ //if Opera or Netscape 7x, add scrollbars to scroll and exit
cross_marquee.style.height=marqueeheight+"px"
cross_marquee.style.overflow="scroll"
return
}
setTimeout('lefttime=setInterval("scrollmarquee()",30)', delayb4scroll)
}

if (window.addEventListener)
window.addEventListener("load", initializemarquee, false)
else if (window.attachEvent)
window.attachEvent("onload", initializemarquee)
else if (document.getElementById)
window.onload=initializemarquee
*/
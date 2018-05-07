<!--

var homepath2='';
var homepath1='';
var ServerName=window.location.hostname;
var PortNumber=window.location.port;
var PortSwitch="0";

function checkParameterExists(parameter)
{
   //Get Query String from url
   fullQString = window.location.search.substring(1);
   
   paramCount = 0;
   queryStringComplete = "?";

   if(fullQString.length > 0)
   {
       //Split Query String into separate parameters
       paramArray = fullQString.split("&");
       
       //Loop through params, check if parameter exists.  
       for (i=0;i<paramArray.length;i++)
       {
         currentParameter = paramArray[i].split("=");
         if(currentParameter[0] == parameter) //Parameter already exists in current url
         {
            return true;
         }
       }
   }
   
   return false;
}

function getParameter(parameter)
{
   var fullQString = window.location.search.substring(1);
   var paramArray = fullQString.split("?");
  
   for (i=0;i<paramArray.length;i++)
   {
     currentParameter = paramArray[i].split('=');
     if(currentParameter[1] == parameter)
        return currentParameter[1];
   }
   return false; //Not found
}

if (PortNumber=="8080" || PortNumber=="4343") {
	PortSwitch="1";
}

if (PortSwitch=="1") {

			switch(ServerName) {
				case 'rrbstage.rrb.gov': case 'securestage.rrb.gov': 
 					homepath1='http://rrbstage.rrb.gov:8080';
 					homepath2='http://rrbstage.rrb.gov:8080/';
  					break;
				case 'rrbtest.rrb.gov': case 'securetest.rrb.gov': 
 					homepath1='http://rrbtest.rrb.gov:8080';
 					homepath2='http://rrbtest.rrb.gov:8080/';
  					break;
			} //end switch servername for parallel webs

		} 
		
		else { //default ports

			switch(ServerName) {

				case "usrrbdev.rrb.gov": case "usrrbsecuredev.rrb.gov": 
 					homepath1='http://usrrbdev.rrb.gov';
 					homepath2='http://usrrbdev.rrb.gov/';
 					break;
				case 'usrrbtest.rrb.gov': case 'usrrbsecuretest.rrb.gov': 
 					homepath1='http://usrrbtest.rrb.gov';
 					homepath2='http://usrrbtest.rrb.gov/';
 					break;
				case 'rrbstage.rrb.gov': case 'securestage.rrb.gov': 
 					homepath1='http://rrbstage.rrb.gov';
 					homepath2='http://rrbstage.rrb.gov/';
 					break;
				case 'rrbtest.rrb.gov': case 'securetest.rrb.gov': 
 					homepath1='http://rrbtest.rrb.gov';
 					homepath2='http://rrbtest.rrb.gov/';
 					break;
				case 'www.rrb.gov': case 'rrb.gov': case 'secure.rrb.gov': 
 					homepath1='https://www.rrb.gov';
 					homepath2='https://www.rrb.gov/';
 					break;
 				case 'www.rrbnew.rrb.gov': case 'rrbnew.rrb.gov': case 'securenew.rrb.gov': 
 					homepath1='http://rrbnew.rrb.gov';
 					homepath2='http://rrbnew.rrb.gov/';
 					break;

			} // end switch servername for all other webs
		}
		

// Added 09/02/2005 For link in drop down menu
function openWindow(url) {

window.open(url,'NewWindow',"top=1,left=1,height=350,width=600,status=no,toolbar=no,menubar=no,location=no");

}

function openFormWindow(url,hp) {

	if (hp === undefined) {
		url = url;
		}
		else {
		url = homepath1 + url;
		};

	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1; 

	var FormWindow;

	if (is_chrome) {
		FormWindow=window.open(url);
	}
	else {
		FormWindow=window.open(url,"_blank","height=600,left=10,location=1,menubar=0,resizable=1,scrollbars=1,status=0,titlebar=1,toolbar=1,width=1024");
	}
	
	FormWindow.focus();
}

function openPDFWindow(url,hp) {

	if (hp === undefined) {
		url = url;
		}
		else {
		url = homepath1 + url;
		};

var PDFWindow;
PDFWindow=window.open(url,"_blank","height=600,left=50,location=0,menubar=0,resizable=1,scrollbars=1,status=0,titlebar=0,toolbar=0,width=800");
PDFWindow.focus();
}

// Added 09/02/2005 For link in drop down menu

function linkNavigate(url){

	window.location.href = url;

}

// Added 09/02/2005 For side navigation

function SwapOver(Cell){

Cell.style.color="#DCDCDC"
Cell.style.background="#F5F5DC"

}

function SwapOut(Cell){

Cell.style.color="#000000"
Cell.style.background="#F0F8FF"
//
}


function SwapOver_topnav(Cell){

//Cell.style.color="navy"
Cell.style.background="#CCCCCC"

}

function SwapOut_topnav(Cell){

//Cell.style.color="#000000"
Cell.style.background="#F0F8FF"

}



function SwapOver_botnav(Cell){

//Cell.style.color="navy"
Cell.style.background="#F0F8FF"

}

function SwapOut_botnav(Cell){

//Cell.style.color="#000000"
Cell.style.background="navy"

}

function SwapOver_recovery(Cell){

//Cell.style.color="navy"
Cell.style.background="#E0F7CC"

}

function SwapOut_recovery(Cell){

//Cell.style.color="#000000"
Cell.style.background="#DCE6F0"

}

//Added 05/12/2005 for nextPage, nextPageERS and getLink functions

function nextPage(LinkClicked) {

//window.location.href = homepath2 + "disclaimer/exit_disclaimer.asp?LinkClicked='" + LinkClicked + "'"
window.open(homepath2 + "disclaimer/exit_disclaimer.asp?LinkClicked='" + LinkClicked + "'");

}

function nextPageERS(LinkClicked) {

window.location.href = homepath2 + "disclaimer/exit_disclaimer.asp?LinkClickedERS='" + LinkClicked + "'"

}

function nextPageMediaSite(LinkClicked) {

//window.location.href = homepath2 + "disclaimer/exit_disclaimer.asp?LinkClickedMediaSite='" + LinkClicked + "'"
window.open(homepath2 + "disclaimer/exit_disclaimer.asp?LinkClickedMediaSite='" + LinkClicked + "'");

}

function getLink() {
	if (location.search!='')
	{
	var theLink=location.search
	var theLink_Array=theLink.split("=")
	     if (theLink_Array[0]=='?LinkClickedMediaSite')
	     {
             location.href=eval(theLink_Array[1]+'='+theLink_Array[2])	     
	     }
	     else
	     {
	     	 location.href=eval(theLink_Array[1])	     
	     }
	}
	else
	{
	return 
	}
}	

//-->


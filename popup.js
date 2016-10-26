//http://stackoverflow.com/questions/2271156/chrome-desktop-notification-example    Notification
//http://blog.teamtreehouse.com/adding-desktop-notifications-to-your-web-applications  Notification 2
//http://web.izjum.com/javascript-get-params   GET parametr
//http://javascript.ru/forum/misc/39969-poluchit-get-peremennuyu-i-dobavit-ejo-v-drugojj-ssylke.html  regular
//http://lifeexample.ru/jquery-javascript-primeryi/javascript-poisk-po-stranitse.html  search Key word  in DOM
//http://stackoverflow.com/questions/16827817/searching-and-highlighting-text-on-current-page-for-a-chrome-extension   search extension

// 1.Add  Countries  coordinates  Latvia ,Romania
// 2.implement Contries  scroll  fucnction with delay 
// 3.start  using checkAnyCountrySCROLL()  with $("#livemap-link").attr("href") ; !!!!!!!!!!!!!!

//<a href="/livemap?lon=106.56470&amp;lat=-6.23855&amp;zoom=12" id="livemap-link">Live Map</a>
//JQ get  href+get lan and lon  with getGoogleMaps()  function

// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **                                                                                  **




// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************










//inject JQ   NOT  USED!!!!! MAY ERASED**********************************************
/*chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        chrome.tabs.executeScript(tabId, {file: "jquery.js"}, function(){
            chrome.tabs.executeScript(tabId, {file: "popup.js"});
        });
    }
});*/
//End  inject ---------------------------------------------------------





// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **
// Start CLicking SECOND Window********* MAil page +  NOTIFY*****************************
document.addEventListener('DOMContentLoaded', function() {
    var linkSECONDd = document.getElementById('seconddd');
    // onClick's logic below:
    linkSECONDd.addEventListener('click', function() {
//  function that works within the  inJected  DOM
window.location.href="next.html";


// START NOTIF
// check if  support
if (window.webkitNotifications) {
    alert('Your web browser does support notifications!');
} else {
   // alert('Your web browser does not support notifications!');
}
// end check if  support


  //Check  good  to  go
    /*
     if (window.webkitNotifications.checkPermission() == 0) { alert('good');
    // Good to go, you can create a notification.
    } else {
    window.webkitNotifications.requestPermission(function(){});
     }
  // EnD  Check  good  to  go
              //Create 
                    var myNotification = window.webkitNotifications.createNotification('icon.png', 'New Content Available', 'Click to view');
myNotification.onclick = function() {
    window.location = 'http://teamtreehouse.com/new/content';
}
myNotification.show();
*/
              // END  CREATE 
// END notif
       });
});
// END  CLick SECOND POPUP*********
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **
//GET  DOM   executing  with  current  page  DOM********************
//function  that  counts  number of  links  in injected PAGE
function iii(){
chrome.tabs.executeScript({
    code:'alert(document.title+" contains "+ $("a").length+" links ")'
})
}
//----------------------------------------------------------------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************









// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **
//GET  DOM **********************************************************
//function  that  found  reg expression  COUNTRY  FIND  BY LETTERS
// it  works by only on Icon  click and  causes  failing checking  Countries  by  coordinates
function regCountryFind(){
chrome.tabs.executeScript({
    code:'var myRegExp =[/Romania/g,/Italy/g,/Malaysia/g,/France/g,/Hauts-de-Seine/g];var myText = document.documentElement.innerHTML; for (var i=0; i<myRegExp.length; i++){if(myRegExp[i].test(myText)){alert("Found  Forbidden!");}else{} }'
})
}
//regCountryFind();  // if  u run  function  animated  counries  failing
//----------------------------------------------------------------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************








// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **
//  function  for  $GET['lat/lon'] and Open in Google Maps onClick*******************************************
//function  that  gets  coordinates ,alert them  and  compare to  certain country_Google maps
//$("#livemap-link").attr("href");  used instead  window.location.search  to  get afterscrolled link with alt  and  lon; was not  working  as the  sting  should  contain items  from $_GET['strictly'] and "/livemap?" should be substring(9)=first 9 letters
// u may use "window.location.search.substring(9).split("&");"-  it takes  direct  adress  from URL and  not  updated  with scrolling
//  it  used  previuosly  Id not  Class,it  was  RECONSTRUCTED????
function getGoogleMaps(){
chrome.tabs.executeScript({ 
    code:'var hrefTrue =$(".livemap-link").attr("href");                                                 /* alert(hrefTrue);*/ var $_GET = {};var __GET = hrefTrue/*window.location.search*/.substring(9).split("&"); for(var i=0; i<__GET.length; i++) { var getVar = __GET[i].split("=");   $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }       /*alert($_GET["lon"]+" : "+$_GET["lat"]);var a=$_GET["lon"];if($_GET["lon"]>120.0001 && $_GET["lon"]<122.61 && $_GET["lat"]<19.409&& $_GET["lat"]>5.511594){alert("Philippines");}*/  if (confirm("Navigate to Instant View?")==true) { window.open("https://www.instantstreetview.com/@"+$_GET["lat"]+"," +$_GET["lon"] +",-50.9h,5p,1z", "_blank"); }'
//LonScroll
//window.open("https://www.instantstreetview.com/@"+a+","+$_GET["lat"]+",-50.9h,5p,1z", "_blank");
//var wickedLocation =  new google.maps.LatLng(a+","+$_GET["lat"]);
//window.open('http://google.com', '_blank');   window.location = "http://google.com"; 
 /*var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET;alert("F"); */
//'alert(" This link is= " +location)'
//


//
})
}
//----------------------------------------------------------------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// End  function  for  $GET[] and Open in Google Maps








//$_GET,  __GET

// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **
//try  to open in Original  Google  maps
//description just  like in getGoogleMaps();
function getGoogleMapsORIGINAL(){
chrome.tabs.executeScript({ 
    code:'var hrefTrue =$(".livemap-link").attr("href");    /*alert(hrefTrue);*/ var $_GET = {}; var GETby = hrefTrue/*window.location.search*/.substring(9).split("&"); /*alert("obj-> "+GETby);*/ for(var i=0; i<GETby.length; i++) { var getVar = GETby[i].split("=");  $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }       /*alert($_GET["lon"]+" : "+$_GET["lat"]);var a=$_GET["lon"];*/   if (confirm("Navigate to Google Maps?")==true) { window.open("https://www.google.com.ua/maps/@"+$_GET["lat"]+"," +$_GET["lon"] +",19z?hl=eng"); }'

})
}
//----------------------------------------------------------------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// End  function  for  $GET[] and Open in ORIGINAL Google Maps







//START  tryng to get #livemap-link" (it works  if  has  Click trigger)
//*********************************************************************************************


//causes error, try  to  execute  in  the  if  (waze);
//tried  to  get  Coordinates  from #livemap-link";
function getLivemapCoord2(){
chrome.tabs.executeScript({ 
    code:'var hrefTrue =$(".livemap-link").attr("href");                                                  alert(hrefTrue); var $_GET = {};var __GET = hrefTrue.substring(9).split("&"); for(var i=0; i<__GET.length; i++) { var getVar = __GET[i].split("=");   $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }       alert($_GET["lon"]+" : "+$_GET["lat"]);window.lonLive=$_GET["lon"];alert(lonLive); '
})
}

//causes error, try  to  execute  in  the  if  (waze);





document.addEventListener('DOMContentLoaded', function() {
    var linkTest = document.getElementById('test');
    // onClick's logic below:
    linkTest.addEventListener('click', function() {
        getLivemapCoord2();//  function that counts within the  inJected  DOM
    });
});


//---------------------------------------------------------------------------------------------







//was  trying  to  launch  country check automatically ,but  now  try  in background.js
//below  is the  same  thing  but  as  function  and  function launcher (and that below  works  on initial extension icon ONLY)
/*chrome.tabs.onUpdated.addListener(
  function ( tabId, changeInfo, tab )
  { 
    if ( changeInfo.status === "complete" )
    {
      chrome.tabs.executeScript({
      code: 'var $_GET = {};var __GET = window.location.search.substring(1).split("&"); for(var i=0; i<__GET.length; i++) { var getVar = __GET[i].split("=");   $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }     var a=$_GET["lon"];if($_GET["lon"]>120.0001 && $_GET["lon"]<122.61 && $_GET["lat"]<19.409&& $_GET["lat"]>5.511594){alert("Philippines");}'
    });
  }
});*/




// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **
//GET  DOM  function  for  Costa Rica NOT USED,MAY be erased????/  Requires  Confirm  for  DELETE **********************************************************
//function  that  detects  Costa Rica, should  be  launch  without clicking
//add real  Costa-Rica coordinates
function getCountry(){
chrome.tabs.executeScript({ 
    code:'var $_GET = {};var __GET = window.location.search.substring(1).split("&"); for(var i=0; i<__GET.length; i++) { var getVar = __GET[i].split("=");   $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }     /* alert($_GET["lon"]+" : "+$_GET["lat"]);*/var a=$_GET["lon"];if($_GET["lon"]>120.0001 && $_GET["lon"]<122.61 && $_GET["lat"]<19.409&& $_GET["lat"]>5.511594){alert("Philippines");} '

//
})
}
//getCountry();
//----------------------------------------------------------------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************






















// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **
//  this  releases and  permit   launching <a href> links  from html
document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************








// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// Start CLick  (quantity of links CLICK)**********
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('l');
    // onClick's logic below:
    link.addEventListener('click', function() {
        iii();//  function that counts within the  inJected  DOM

        //hellYeah('Yes');  //not  used   so far 
    });
});
// END CLICK  assign  931 (quantity of links CLICK)----------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************


//was connected with above, not triggered anywhere so far 
function hellYeah(text) {  //connected  with Start CLick assign 931
//alert(text);
var b=$(event.target);   //$(location).attr('href');   //.prev()
var bb=$(document.documentElement).find('a')/*.attr('href')*/.length; //alert(bb);
alert("There are " +bb /* +$('a').length*/ + " links on this  page ");
  //document.getElementById("text-holder").innerHTML = text;
}








// Click function that gets coordinate open in Google  maps -Actually it  opens  it  ALETRNATIVE   Maps  viewer-NOT ORIGINAL GOOGLE  MAPS;
// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// Start CLick $GET[]  triggers  coordinate  alert and navigating  to  Street View***
document.addEventListener('DOMContentLoaded', function() {
    var gettt = document.getElementById('getURL');
    // onClick's logic below:
    gettt.addEventListener('click', function() {
//alert(location);
       getGoogleMaps();//  function that gets coordinate open in Google  maps
           
         });
});
// END  CLick $GET[]----------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





// Click function that gets coordinate open in REAL Google  maps 
// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// Start CLick $GET[]  triggers  coordinate  alert and navigating  to  Street View***
document.addEventListener('DOMContentLoaded', function() {
    var getMaps = document.getElementById('gMaps');
    // onClick's logic below:
    getMaps.addEventListener('click', function() {
//alert(location);
       getGoogleMapsORIGINAL();//  function that gets coordinate open in Google  maps
           
         });
});
// END  CLick $GET[]----------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************














// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// START HOVER CHNFE  IMAGE  NOT  WORKING *********************************
$('#imgL').hover(function(){
      
//Smooth change ON HOVER
$('#imgL').fadeOut(200, function(){
      $(this).attr('src','images/fff2.png').bind('onreadystatechange load', function(){
         if (this.complete) $(this).fadeIn(300);
      });
   });
//END SMOOTH CHANGE ON HOVER


 },
function(){
//Smooth change OFF HOVER
$('#imgL').fadeOut(200, function(){
      $(this).attr('src','images/extenn.png').bind('onreadystatechange load', function(){
         if (this.complete) $(this).fadeIn(300);
      });
   });  });
//END SMOOTH CHANGE OFF HOVER
/*  //previuos  hover WORKING!!!  but  has  no delay
$(document).ready(function(){
//change  image
$("#imgL").mouseover(function(){  //$("#imgL").hide(1000);

    $("#imgL").attr('src','images/fff2.png');
  });

$("#imgL").mouseout(function(){ //$("#imgL").show(1000);
$("#imgL").attr('src','images/extenn.png');

});
});*/


//change image--------------------------------------------------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************











// Alarm NOT WORKING **************************************************
try{
$(document).ready(function()
{
    chrome.runtime.sendMessage({action: 'createAlarm'});

    chrome.runtime.onMessage.addListener(
  function(resp, sender, sendResponse) {

        if(resp.action == 'doAlarm')
        {
            // CSS and SOUND here           
        }
    });
});

}//end  try
catch(e){'rigged'}
// END  ALARM  NOT WORKING-----------------------------------------------------












//connected  with  below
var w = window;
 /*var w;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow
    } else {
        w = window;
    }*/


// Time reminder in GDocs  only------------------------------------------------------------
//Start GDocs   https://docs.google.com
 if (/https:\/\/docs.google.com\/spreadsheets/.test(w.location.href)) {   /* alert('You are in GoogleDocs');*/ }   // ALERT ONLY IN SPREADSHEET
if (/https:\/\/docs.google.com/.test(w.location.href)) {    //alert('You are in GoogleDocs');

// replace text in ID  report   // works  both version but  quickly  shifted  as documents  constatly loading
/*function replaceIT(){
document.getElementsByClassName(docs-title-input-label-inner)[0]=innerHTML("Что здесь?");
document.body.innerHTML = document.body.innerHTML.replace(/Рабочие часы мепперов/g, 'Кто здесь?');
} setInterval(sec, 1000)
replaceIT();*/


// TIME  REMINDER WORKING !!!!!!
function sec() {
var t = new Date();
var h=t.getHours();
    var m=t.getMinutes();
    var result=h+":"+m;

iC=parseInt(h);iC=iC-9;
if(m==88||m==89 ) { alert('          Attention - TEST MODE'+'\n'+'\n'+'           Iteration => '+iC+ '\n'+'           Time is : '+result+'\n'+t);} 

// DEACTIVATED;
if(m==90&&h==12 ){ /*alert('Lunch time');  */ 
 
              
//Start Notification
/*var myNotification = window.webkitNotifications.createNotification('icon.png', 'New Content Available', 'Click to view');
myNotification.onclick = function() {
cancel();
   // window.location = 'http://';
}
myNotification.show();*/
             //end  notifiaction
}





if(m==40&&h==17 ){alert('Time to Go home');}
//
  //alert("a  second  has  gone")
  }
setInterval(sec, 60000) // End  of function sec
sec();  //Deactivated

// Waze  mark ID
try{
//change  background to G  letters (injected  from legal)
//document.body.style.backgroundImage='url("/images/googler.png")';
/*var imgURL = chrome.extension.getURL("images/googler.png");
 document.body.style.backgroundImage= imgURL;*/


//AFTER UPDATE (30May_2016)****************
//  dispaly:none(hiding  DIVs)***
try{
var  get=document.getElementsByClassName("freebirdFormviewerViewItemsItemItemTitle");//  just  for  short  form;
get[0].style.display = "none";//  removes  just  title
get[1].style.display = "none";  get[2].style.display = "none";
get[3].style.display = "none";  get[4].style.display = "none"; 
get[5].style.display = "none";


document.getElementsByClassName("docssharedWizSelectPaperselectOption")[0].style.display = "none";//removes  ??
}catch (e){//alert("Display");
}
//End  dispaly:none(hiding  DIVs)---

document.body.style.background = "#f3f3f3";//color;
document.getElementsByClassName("freebirdFormviewerViewFormContent ")[0].style.backgroundImage="url('http://data.whicdn.com/images/25614625/original.png')";//Floor pattern;
document.getElementsByClassName("freebirdHeaderMast")[0].remove();//  remove  banner ;
//document.getElementsByClassName("freebirdFormviewerViewFormBanner")[0].remove();//  Causes  Fail;

// End AFTER UPDATE-------------------------------

//apply  round  icon to background $wallPrev=array( http://www.helinstrading.com/icon/google-icon.png );
document.body.style.backgroundImage="url('http://demo.sc.chinaz.com/Files/pic/icons/4713/258.png')";  //working
//Erase new to  flag  (injected  from legal)  //images/logo.jpg
//document.getElementsByClassName("ss-header-image-sizer")[0] .style.backgroundImage="url('http://www.euintheus.org/wp-content/uploads/2013/02/ue-flag-1920x1080-wallpapers-612x336.jpg')";//working
document.getElementsByClassName("ss-header-image-sizer")[0].remove();//remove  waze logo
document.getElementsByClassName("ss-form-title")[0].remove();//working day  erase
document.getElementsByClassName("ss-form-desc ss-no-ignore-whitespace")[0].remove();//for mappers  only
document.getElementsByClassName("ss-form-container")[0].style.backgroundImage="url('http://data.whicdn.com/images/25614625/original.png')";


     //document.getElementsByClassName("ss-q-title")[0].remove();  //S  remove  class="ss-q-title"
     //document.getElementsByClassName("ss-q-title")[0].remove(); //M  remove
    //document.body.innerHTML = document.body.innerHTML.replace(/Task/g, 'Что здесь?');//  ss-required-asterisk
    //document.getElementsByClassName(ss-required-asterisk)[0]=innerHTML("Life  is  good");//obligatory  NOT WORKING
//http://www.featurepics.com/FI/Thumb300/20120110/Wood-Texture-2092803.jpg  white  wood
//http://www.materials-world.com/bricks/belden/buffs/images/harvestblend_f.jpg  bricks
//http://www.jsloanehairstudio.com/google-plus_logo.jpg
//http://www.crossappdesign.com/wp-content/uploads/2014/07/Android-logo-footer-e1404265436353.png
//http://media.idownloadblog.com/wp-content/uploads/2014/02/Waze-3.7.7.-for-iOS-app-icon-small.png


} catch(e){}






//HANDLER  FOR  SECOND  PAGE-After  Submit (i.e "Spam") (AFTER UPDATE )****
try{ 
//adding  images  =>  Google logo  +  road  sign ; 
document.getElementsByClassName("freebirdFormviewerViewResponseConfirmationMessage")[0].innerHTML="<center><img style='width:350px;' src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Google_maps_logo.png'/><img src='http://www.clipartbest.com/cliparts/Kij/x9o/Kijx9oeiq.png' style='width:50px;'/><h1 style='color:red; font-size:41px;'> Time  to  go  home </center>";/*remove()*/     //  spam  Game Over ; 

document.getElementsByClassName("freebirdHeaderMast")[0].remove();//  remove bannerResponse on  second page  ;  // 

//adding  your  URL  for  other  submitting;
$("body").append('<div id="z" style="position:absolute;top:370px;z-index:55;right:70%;"> <a href="http://example2.esy.es/myWazeTime/index.php?user=ign_dmitriy">Test URL-make one more entry</a></div>');


//walls  change-wooden
document.getElementsByClassName("freebirdFormviewerViewFormContentWrapper")[0].style.backgroundImage="url('http://demo.sc.chinaz.com/Files/pic/icons/4713/269.png')";


//document.getElementsByClassName("freebirdFormviewerViewFormBanner")[0].remove();//  try this  if ;

//changing  URL   href --or  may  simple  click "Go  back";
/*var a = document.getElementById('yourlinkId'); //or grab it by tagname etc
a.href = "somelink url"; */
}
catch(e){ //alert("page2-Spam");
}
// End  Handler  for  second  PAGE - AfterSubmit (i.e "Spam") (AFTER UPDATE )------











// END TIME  REMINDER
}
// End  reminder  Gdocs  only *******************************************************************







// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// Start venuesScroll**********
document.addEventListener('DOMContentLoaded', function() {
    var venuesScroll = document.getElementById('venuesScroll');
    // onClick's logic below:
    venuesScroll.addEventListener('click', function() {
        venuesScrollFunction();//  function that counts within the  inJected  DOM

       });
});
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************

function venuesScrollFunction(){
chrome.tabs.executeScript({

    code:'var venues = document.getElementsByClassName("place-update");var bf=venues.length;  alert("Number of  venues=>  "+bf);document.getElementsByClassName("place-update")[0].scrollIntoView();'

})
}





























//Change image randomly on click WORKSSS*****************************************************************************
// Start CLick assign 931 (quantity of links CLICK)**********
document.addEventListener('DOMContentLoaded', function() {
    var linkIMG = document.getElementById('imgL');
    // onClick's logic below:

//array of  images
var images = [ "images/fff2.png", "images/extenn.png","images/smile2.png" ];    // var imageIndex = 0;

//
var  prev; //start  prevent 2 similar  results  in a  row 
    linkIMG.addEventListener('click', function() { 

//imageIndex = (imageIndex+1) % (images.length); 
//if(imageIndex==0){imageIndex=1;}else{imageIndex=0;}
 var x=Math.round((Math.random() * 2)); // alert(x);   //returns  1  OR 0 )
//start  prevent 2 similar  results  in a  row 
if(x==prev){/*alert('prev');*/    x=Math.round((Math.random() * 2));}
prev=x;

 linkIMG.src=images[x/*imageIndex*/];
/*if(linkIMG.src !="images/fff2.png")
{linkIMG.src="images/fff2.png"} else {linkIMG.src="images/fff2.png"}*/
       // $("#linkIMG").attr('src','images/fff_PRR.png');
    });
});

// END Change image on click ----------------------------------------------------------------------------





//random image  to implement
/*var myPix = new Array("images/lion.jpg","images/tiger.jpg","images/bear.jpg");
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
*/
//End  random image  to 


























































//var2
/*function popup(e) {
  var link = document.URL;
  //alert("This is the Link : ( " +link+ " )");
alert('n');
}

var plusBtn = document.querySelector('.l2');
plusBtn.addEventListener('click', popup);
//var 2




document.getElementById('l').onclick = function() {
    alert('False')};*/




/*$(document).ready(function(){
    $("#l").click(function(){
       //$(this).hide();
   alert("Y");

   });
});*/






/*$(document).ready(function(){
   $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
});*/









/*$(document).ready(function(){
    //$("p").click(function(){
      //  $(this).hide();
   // });
alert('Y');
});


//END MINE

function clickHandler(e) {
	// alert("asd");
	chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
		this.close(); // close the popup when the background finishes processing request
	});
}

//count(){ alert("There are" + $('a').length + " links on this  page ");}


function count() {
  chrome.tabs.executeScript({
   alert('some');
  }); 
}

document.getElementById('clickme').addEventListener('click', count); */









//Blanking  the  original  logo  with  white  samples .Big  G LOGO in REDMIne  relocated  to  JQuery
/*try{
//setting  logo  to white  bg
document.getElementById("logo").style.backgroundImage="url('http://i218.photobucket.com/albums/cc271/slopie81/th_white.png')";// erasing original  with white  background

  //numi.value = num;
  var target = document.getElementById('logo');
  var newdiv = document.createElement('div');
  var divIdName = 'my'+'Div';
  newdiv.setAttribute('id',divIdName);
  newdiv.innerHTML = 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW';
newdiv.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_Google_2013_Official.svg/220px-Logo_Google_2013_Official.svg.png" style="position:absolute;top:17px;left:70px;z-index:999;width:290px;"/>';//top:205px  left:100px;
  target.appendChild(newdiv);} catch(e) {}*/

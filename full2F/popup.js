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
// Start CLicking SECOND Window********* *****************************
document.addEventListener('DOMContentLoaded', function() {
    var linkSECONDd = document.getElementById('secondSplit');
    // onClick's logic below:
    linkSECONDd.addEventListener('click', function() {
//  function that works within the  inJected  DOM
window.location.href="split.html";



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
    code:'var hrefTrue =$(".livemap-link").attr("href");                                                  alert(hrefTrue); var $_GET = {};var __GET = hrefTrue/*window.location.search*/.substring(9).split("&"); for(var i=0; i<__GET.length; i++) { var getVar = __GET[i].split("=");   $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }       alert($_GET["lon"]+" : "+$_GET["lat"]);var a=$_GET["lon"];if($_GET["lon"]>120.0001 && $_GET["lon"]<122.61 && $_GET["lat"]<19.409&& $_GET["lat"]>5.511594){alert("Philippines");} if (confirm("Navigate to Street View?")==true) { window.open("https://www.instantstreetview.com/@"+$_GET["lat"]+"," +$_GET["lon"] +",-50.9h,5p,1z", "_blank"); }'
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
    code:'var hrefTrue =$(".livemap-link").attr("href");    /*alert(hrefTrue);*/ var $_GET = {}; var GETby = hrefTrue/*window.location.search*/.substring(9).split("&"); alert("obj-> "+GETby); for(var i=0; i<GETby.length; i++) { var getVar = GETby[i].split("=");  $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }       alert($_GET["lon"]+" : "+$_GET["lat"]);var a=$_GET["lon"];if (confirm("Navigate to Google Maps?")==true) { window.open("https://www.google.com.ua/maps/@"+$_GET["lat"]+"," +$_GET["lon"] +",19z?hl=eng"); }'

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
if (/https:\/\/docs.google.com\/spreadsheets/.test(w.location.href)) {    alert('You are in GoogleDocs');}
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

if(m==40&&h==12 ){alert('Lunch time');
 
              
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
sec();

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

//Troubles!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//try{
//document.body.style.backgroundImage="url('http://demo.sc.chinaz.com/Files/pic/icons/4713/258.png')";  //working !!!!!!!!!!!!!!!
//}catch (e){}
//END  Troubles


document.body.style.background = "#f3f3f3";//color;
document.getElementsByClassName("freebirdFormviewerViewFormContent ")[0].style.backgroundImage="url('https://data.whicdn.com/images/25614625/original.png')";//Floor pattern;
document.getElementsByClassName("freebirdHeaderMast")[0].remove();//  remove  banner ;
//document.getElementsByClassName("freebirdFormviewerViewFormBanner")[0].remove();//  Causes  Fail;

// End AFTER UPDATE-------------------------------

//apply  round  icon to background $wallPrev=array( http://www.helinstrading.com/icon/google-icon.png );
document.body.style.backgroundImage="url('http://demo.sc.chinaz.com/Files/pic/icons/4713/258.png')";  //working !!!!!!!!!!!!!!!
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
$("body").append('<div id="z" style="position:absolute;top:370px;z-index:55;right:70%;"> <a href="http://example2.esy.es/myWazeTime/cut_release.php?user=ign_dmitriy">Test URL-send  one  more request</a></div>');


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









// Waze  window-CHECK COUNTRIES
// **************************************************************************************
// **************************************************************************************
// **                                                                                  **   
                                                                            
       if (  /https:\/\/www.waze.com/.test(w.location.href) ||   /https:\/\/editor-beta.waze.com/.test(w.location.href)   ) {   



//PRE  NEW!!!!!!
//var grandChildChildNode = document.getElementsByClassName('full-address')[0].children[0]; alert(grandChildChildNode);//Causes  ERROR
//var textFFF = document.getElementById('location-info').innetHTML;  //alert(textFFF);
//var FFF=document.getElementsByClassName('full-address')[0].innerHTML; //alert(FFF);


/*var myRegExp =[/Romania/g,/Italy/g,/Malaysia/g,/France/g,/Hauts-de-Seine/g,/Medan/g];var myText = document.documentElement.innerHTML; for (var i=0; i<myRegExp.length; i++){if(myRegExp[i].test(myText)){alert("Found  Forbidden!");}else{} } */


//NEW------

/*  var classname = document.getElementsByClassName("full-address");
    var myFunction = function() {
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
   };

    for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}*/


  //$(document).on("click", '#Waze.Layer.FeatureLayer_206_vroot', function() {   // this  click  is  used  to   react  to  newly generated items;
//alert('cl');
//Waze.Layer.FeatureLayer_206_vroot   .full-address
 //});
//END NEW------



//Scroll
/*setInterval(function(){
var cusid = document.getElementsByClassName('place-update');
var bf=cusid.length;  alert("Quantity of  venues on this page=>  "+bf);*/
//var element = document.getElementsByClassName("place-update")[0];
//var element = $(".place-update");
 //element.scrollIntoView(); /*alert("moved");*/ 
/*}, 7000);*/
//Scroll




window.flaggg="off"; // flag  to  detect  if  enough seconds  has  gone  and  time  allow  to  show  next  Counrty  alert
//  flag  was  ON ?????
 
//regCountryFind();
//alert('WAZE');
//var window.lon; var window.lat;

//Check  Lat Lon  function
function getLonLat(){   // REQUIRE PERMITE TO DEACTIVATE as it gets  coordinates  from addressLine and for while  scrolling  to get  uptoDate  coord should  use  functiong  from GoogleMaps-NOT YET (cant get  from #livemap-link*)

var $_GET = {};
var __GET = window.location.search.substring(1).split("&");
for(var i=0; i<__GET.length; i++) { var getVar = __GET[i].split("=");
$_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }       
window.lon=$_GET["lon"]; window.lat=$_GET["lat"];
return lon;return lat;
} //End function getLonLat()

//Calling  function
getLonLat();  //REQUIRE PERMIT TO DEACTIVATE-Not YET 



//gets  Fresh  coordiantes  from #livemap-link*****  DOES NOT WORK
function getLivemapCoord(){var hrefTrue =$(".livemap-link").attr("href");                                                  alert(hrefTrue); var $_GET = {};var __GET = hrefTrue.substring(9).split("&"); for(var i=0; i<__GET.length; i++) { var getVar = __GET[i].split("=");   $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }       alert($_GET["lon"]+" : "+$_GET["lat"]);window.lonLive=$_GET["lon"];alert(lonLive);}
//  Ends gets  Fresh  coordiantes  from #livemap-link----------
//getLivemapCoord();


function checkAnyCountry(lonN,lonS,latW,latE,targetCountry){ //*****
if(lon>lonN/*-85.883097*/  && lon<lonS/*-82.700812*/ && lat<latW/*11.186147*/ && lat>latE/*8.359923*/)
{//alert(targetCountry);
window.ccc=targetCountry;
window.flaggg="off";// flag  to  detect  if  enough seconds  has  gone
//div  show  up
$("body").append('<center><div id="pppv" style="display:none;position:absolute;top:150px;z-index:55;right:20%;"><H1 id="h1" style="background:white;font-weight: bold;"><script>document.getElementById("h1").innerHTML=ccc;</script></H1><img src="http://creativesafetypublishing.com/wp-content/uploads/2015/01/danger-construction-area-label.jpg"></div></center>');

setTimeout(function() {  // Delayed  pop-up on boot
    //do something special
$("#pppv").show(1500); }, 3000);

//just  figure  this  out of  the  if  statement &without  click  action;
$("#pppv").click(function(){
     $("#pppv").hide(1500);   setTimeout(function() { window.flaggg="on"; }, 15000);// RETURN!!!// enable  flag  in 7  sec
    }); // end  clich  to hide
// End //div  show  up
}  // end if($_GET["lon"]  ???  wrong????
   setTimeout(function() { window.flaggg="on"; }, 15000);
}// end checkAnyCountry()   //----------------



//Function  that check all  Countries  at ones
function checkAllCountriesAtOnce(){
checkAnyCountry(-85.883097,-82.700812,11.186147,8.359923,"Costa Rica");//lonN,lonS,latW,latE,targetCountry
checkAnyCountry(6.806093,15.972735,45.862255,36.336099,"Italy");//lon  =lat and in Gmaps it is vs
checkAnyCountry(100.103655,103.558370,4.863989,2.138495,"Malaysia");// South, N, East, West !!!  true????
checkAnyCountry(111.496965,117.087732,5.295168,1.953356,"Malaysia!");
checkAnyCountry(120.0001, 122.61, 19.409, 5.511594, "Philippines!");//Philippines   
//$_GET["lon"]>120.0001 && $_GET["lon"]<122.61 && $_GET["lat"]<19.409&& $_GET["lat"]>5.511594)

//How  to  take  coordinates  in GM!!!!(6June  2016)
//in Gmaps=> what is  there (hoz, vert)  Costa-Rica(W,E,N,S)?? 8June2016;
// to  take=> what is  there => the  most  left(take 2nd)+most right(take 2nd)+most top(take 1st)+most  bottom(take 1st);
} // END check all  Countries  at ones


//call the  function
checkAllCountriesAtOnce();



//  function check  country when scrolled**************************************CONFIRM DELETE????
function checkAnyCountryIfScrolled(){
//smth delayed
setTimeout(function() {  // Delayed  pop-up on boot
    //do something special
// Getting  seconds  stamp
var t = new Date();var s = t.getSeconds();window.secThen=15; secThen=s;
//  END  Getting  seconds  stamp
//alert(secThen); //return for  testing!!!!!!!!!!!!!!1
 }, 30);//3000
// END  smth  delayed

}
//  END   function check  country when scrolled ---------------------------------




// Trace  mouse movement**********WORKSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Therefore  u Don't  have  to use  mouse  movement  detection -should  just   use  a "var hrefTrue =$("#livemap-link").attr("href");"    from getGoogleMaps();  function.Or  may be  u  still should  use  mouse  detection , but  in all  cases  u don't  have  to use  $('.mouse-position')  VALUE


var last_moved=0;
$(document).mousemove(function(e){
  var now = e.timeStamp;    
  if (now - last_moved > 9000) {  //if  mouse moved and  x  sec  gone  //  7000=7seconds
                    //alert("20 seconds  has  gone");


     

    
//presume  can  erase below after  using  new  Live  Href;
                                 if (window.flaggg=="on")    
                                  // if x  second has  gone  after the prev div  alert.show 
                                  //  can  change  flag  just  to seconds  amount  between 2 Date() and  if  bigger {amount=0;}
                               {   checkAllCountriesAtOnce();} // just  temoprary  disabled !!!RETURN!!!!
//END presume  can  erase below after  using  new  Live  Href;


//Start Troubleshoot (erase later)
  //1.flag  initially is  off if  on the  1  st  open no prohibited countryDetected; Erase??
  //2 .U  may  run coordinates  function  every  20sec and  check  if div is  visible/hidden;!!!!
  //3. If  moused  moved & if  flag =on {flag="off" +  setTimeInterval(off)}  Erase????
//End   Troubleshoot (erase later)



                                // START inject  your  new  stuff  here----------------------------------- ;
                                     //alert("x min has  gone ");

                              //shows  uptodate Coordinates  
                
                                    /*var hrefTrue2 =$("#livemap-link").attr("href");alert("Mouse  track 5 "+hrefTrue2);
                                     window.flaggg=="off";*/  //it  works  and  return this ,just  closed for  normal  venues;

//Start Getting fresh  afterscrolled coordinates  from $("#livemap-link"); Works!!!
//return  THIS



//
var hrefTrue =$(".livemap-link").attr("href");    
var $_GET = {};
var __GET = hrefTrue/*window.location.search*/.substring(9).split("&"); for(var i=0; i<__GET.length; i++) { 
var getVar = __GET[i].split("=");   
$_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1];                                       }       
//alert($_GET["lon"]+" : "+$_GET["lat"]);
var a=$_GET["lon"]; // }

//End  Getting fresh  afterscrolled coordinates  from $("#livemap-link");

   //getting afterscrolled  coordinates  to  variable;
    window.lon=$_GET["lon"];  window.lat=$_GET["lat"]; checkAllCountriesAtOnce();


                               
                                //  END  inject  your  new  stuff  here------------------------------------;






//try to  emulate  click to  get coordinates  //DOES NOT  WORK
/*var elementX = document.getElementById("test");
if (elementX) elementX.focus(); *///does not  work
//if (elementX) elementX.click(); //does not  work
//elementX .dispatchEvent(new MouseEvent('click'));  //does not work
//
//}  //END window.flaggg=="on"  was  shotrnend
//above tryied  to launch here getLivemapCoord2() but  causes  errors ;



     //gets  the  span coord  value from right  bottom corner- WORKS  but coordinates  reassigned           to  Live map  section  which  is  constantly updating
      /*
     var coor =$('.mouse-position').html(); 
     //split recieved  coordinates  into 2  variables
        var s = coor.toString();
        var fields = s.split(/-/);//
      window.LonScroll= fields[1];//1st  elem of  coordinates
      window.LatScroll = fields[2];//2st  elem of  coordinates
           */
       // END  split recieved  coordinates  into 2  variables
      //works

    //DO Your Country  Check here -write  checkAnyCountryIfScrolled(); with setTimeOut use arguments  from origianl  function!!! just replace inside Lat and  Lon with var lonG and var latG
   // End DO Your Country  Check here
    last_moved = now;//realated  to move  trace  Can  erase????
  }
});
// END  trace  mouse  movement---------------------------------








// temoporary disabled tried  as transfred  to  function**********
//if cordinates matches the scecified cuontry
/*if($_GET["lon"]>-85.883097  && $_GET["lon"]<-82.700812 && $_GET["lat"]<11.186147&& $_GET["lat"]>8.359923)
{//alert("Costa Rica");
//div  show  up
$("body").append('<center><div id="pppv" style="display:none;position:absolute;top:150px;z-index:55;right:20%;"><H1 style="background:white;">COSTA RICA</H1><img src="http://creativesafetypublishing.com/wp-content/uploads/2015/01/danger-construction-area-label.jpg"></div></center>');

setTimeout(function() {  // Delayed  pop-up on boot
    //do something special
$("#pppv").show(1500); }, 3000);

$("#pppv").click(function(){
      $("#pppv").hide(1500); 
    }); 
// End //div  show  up
}*/        // end if($_GET["lon"]  
// end  temoporary disabled as transfred  to  function----------------



//mouse position
//var span = document.getElementsByClassName("mouse-position")[0]; alert(span);
//


}  // if (  /https:\/\/www.waze.com/.test(w.location.href);
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// END  Waze  window-CHECK COUNTRIES




















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


































// Weather-----------------------------------------------------------------------------
//path  to URL  request
var data_url="http://api.openweathermap.org/data/2.5/weather?q=Kyiv&APPID=42b614437754a4ec7c704604e2a3f97f";



//CAllING  function to pull information out of the json file and stick it into an HTML element
getWeather (function (data) {
//getting  tem  to  var  and  to  Celcium
var t=data.main.temp; t=t-272; t=Math.round(t);
var weather_cond=data.weather[0].description;
    var weather_html = data.weather[0].description + ";" +" temperature: " +  t + "C" + " ; wind: "+data.wind.speed+"km/h";

//Dislaying  corresponding  picture
    var  sun="http://findicons.com/files/icons/2603/weezle/256/weezle_sun.png";
    var rain="http://www.veryicon.com/icon/ico/System/Icons8%20Metro%20Style/Weather%20Rain.ico";
    var cloud="http://www.clipartbest.com/cliparts/4cb/KRM/4cbKRMXXi.png";
    var snow="https://upload.wikimedia.org/wikipedia/commons/b/bb/Snow_flake_icon.png";
if(weather_cond=="rain"||weather_cond=="light rain"){WeathPicture=rain} else if(weather_cond=="clouds"||weather_cond=="broken clouds" ||weather_cond=="scattered clouds"){WeathPicture=cloud}  else if(weather_cond=="snow"||weather_cond=="light snow"||weather_cond=="heavy snow"){WeathPicture=snow} else {WeathPicture=sun} 
    weather_html=weather_html+'<br><img  src='+WeathPicture+'>' ;
//End  displaying   picture
    document.getElementById('weather').innerHTML = "Check"+weather_html;
});


//Set Time Interval
//var myVar = setInterval(function(){ myTimerNAME() }, 8000);
//setInterval("getWeather()",1000);


// function to use jsonp to get weather information
function getWeather(callback) {
    $.ajax({
        dataType: "jsonp",
        url: data_url,
        success: callback
    });
};


// START getWeather  without  JQUERY
/*function getWeather(callback) {
window.myJsonpCallback = function(data) {
    // handle requested data from server
};

var scriptEl = document.createElement('script');
scriptEl.setAttribute('src',
    'http://api.openweathermap.org/data/2.5/weather?q=Kyiv&APPID=42b614437754a4ec7c704604e2a3f97f');
document.body.appendChild(scriptEl);
};*/
// END without getWeather  without  JQUERY
// END WEATHER**********************************************************************
























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

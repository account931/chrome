// attempt it  on Mond,  //  make  changes  x 2
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
  if (tab.url.indexOf("http://translate.google.hu/") > -1 && 
      changeInfo.url === undefined){
    chrome.tabs.executeScript(tabId, {file: "program.js"} );
  }
});




//does not  work************
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    // do your things
     alert("i am  from background");
    getLivemapCoord2();

  }
})
//----------------------







// run Fordidden   NOT WORK
//tried in popup.js  but was  screwed
chrome.tabs.onUpdated.addListener(
  function ( tabId, changeInfo, tab )
  { 
    if ( changeInfo.status === "complete" )
    {
      chrome.tabs.executeScript({
      code:'var myRegExp =[/Romania/g,/Italy/g,/Malaysia /g];var myText = document.documentElement.innerHTML; for (var i=0; i<myRegExp.length; i++){if(myRegExp[i].test(myText)){alert("Found  Forbidden!");}else{} }'
    });
  }
});
// END run fordidden 








// run  check Country v1  NOT  WORK????
//tried in popup.js  but was  screwed
chrome.tabs.onUpdated.addListener(
  function ( tabId, changeInfo, tab )
  { 
    if ( changeInfo.status === "complete" )
    {
      chrome.tabs.executeScript({
      code: 'var $_GET = {};var __GET = window.location.search.substring(1).split("&"); for(var i=0; i<__GET.length; i++) { var getVar = __GET[i].split("=");   $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }     /* alert($_GET["lon"]+" : "+$_GET["lat"]);*/var a=$_GET["lon"];if($_GET["lon"]>120.0001 && $_GET["lon"]<122.61 && $_GET["lat"]<19.409&& $_GET["lat"]>5.511594){alert("Philippines");}'
    });
  }
});
// END run  check Country v1



// run  check Country v2*********************************************************
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    // do your things
var $_GET = {};var __GET = window.location.search.substring(1).split("&"); for(var i=0; i<__GET.length; i++) { var getVar = __GET[i].split("=");   $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; }     /* alert($_GET["lon"]+" : "+$_GET["lat"]);*/var a=$_GET["lon"];if($_GET["lon"]>120.0001 && $_GET["lon"]<122.61 && $_GET["lat"]<19.409&& $_GET["lat"]>5.511594){alert("Philippines");}
// end  do  your  thing
  }
})
// END run  check Country v2------------------------------------------------------------------







//test
//alert('background');




chrome.contextMenus.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        code: "setInterval(function(){alert('test')}, 2000)"
    });
});

var id = chrome.contextMenus.create({
    "title": "Auto Refresh",
    "contexts": ["page"]
});​












// Testing alam at certain time******************************************************************
// When to ring
/*var now = new Date(), minutes = 50, seconds = 0;
var timestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), minutes, seconds);
var whenToRing = (timestamp.getTime() - now.getTime());

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.action == 'createAlarm')
    {   
        // Create
        chrome.alarms.create('theAlarm', {
            // Wann soll der Alarm gefeuert werden?
            // Angabe in Millisekunden
            when: whenToRing,
        }); 
    }
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === 'theAlarm') 
    {
        // send a message to the script.js to manipulate the CSS and play sound
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {action: 'doAlarm'})   
        });
    }
});*/
// END testing alarm----------------------------------------------------------------------------



















//nothing  used  below--ALIEN (erase)



// chrome.browserAction.onClicked.addListener(function(tab) { alert('icon clicked')});

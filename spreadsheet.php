<!DOCTYPE html>
<html>
<head>
<title>Json Fetch</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>

</script>
</head>
<body>
</br>
Sp Key<input type="text" is="key"/>
List  number<input type="text" is="list"/></br></br>
<input type="button" value="Get Content by Json" id ="butt" onclick="getJson()" /></br>



<script>
function getJson (){
// Start Ajax Check 3
                         $.getJSON('https://spreadsheets.google.com/feeds/list/1yMCXjYbUCZ10J38pBYSB6KQdWyF-2Hfg-YZAdZPJOPM/3/public/values?alt=json',function(respp){

                          //alert(JSON.stringify(respp, null, 4));  alert(respp.response[0].first_name); // alerting  friends;
  var lengthR = Object.keys(respp.feed.entry).length;  alert("Number entries  => "+lengthR);  //  Get  the  length of  returned  JSON Oblect-array;  //was  just Object.keys(respp.feed).length;==12
                         
                              
                              //starting  "for()" loop  with  Json  response length;
                               var finalText="<img src='https://ca.xbrl.org/wp-content/uploads/sites/11/2016/08/DATA.jpg'/><table>"; 
                         for (var i = 0; i < lengthR; i++) //!!!! -4
                                            
                                            {
                                            var finalText= finalText+"<tr><td>"+respp.feed.entry[i]['gsx$_cn6ca']['$t'] +"</td><td> "+respp.feed.entry[i]['gsx$firstname']['$t']+ "</td></tr>" }
                                            finalText= finalText+"</table>";
                                            $("#info1").html(finalText); 
                                           
                                            //$("#info1").html(  respp.feed.entry[0]['title']['$t']  );//id //title
                                             });
                               // End  Ajax  Check 3
}//  END  function
</script>









<h id="info1"></h2>

<p>Here  the  Json content  will  appear.</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Data_types_-_en.svg/200px-Data_types_-_en.svg.png"/></p>

<!--<button>Click me</button>-->

</body>
</html>




























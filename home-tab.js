// Object we’re working with
var dataObject = {
  0: {"productId":1,"storyTitle":"How it's made: ","storySub":"Leather Card Holder","storyDetails":"See how we make our signature leather wallets!","storyImage":"https://giftsformen.io/wp-content/uploads/2015/12/Leather-Credit-Card-Holder-For-Men-10P.jpg"},
  1: {"productId":2,"storyTitle":"Our Creator:","storySub":"Lisa","storyDetails":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","storyImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTACy3JNihtamoOAFil9ZlSBCWD-aZK9F6Ylfq1MBUDIenxMOkU"},
  2: {"productId":2,"storyTitle":"Leather 101","storySub":"Full Grain Leather","storyDetails":"How to Identify and Buy High Quality Leather Products.","storyImage":"https://www.tpkgolf.com/v/vspfiles/assets/images/leathersmall.jpg"},
  

};

// Cache of the template
var template = document.getElementById("template-list-item");
// Get the contents of the template
var templateHtml = template.innerHTML;
// Final HTML variable as empty string
var listHtml = "";

// Loop through dataObject, replace placeholder tags
// with actual data, and generate final HTML
for (var key in dataObject) {
  listHtml += templateHtml.replace(/{{productId}}/g, dataObject[key]["productId"])
                          .replace(/{{storyTitle}}/g, dataObject[key]["storyTitle"])
                          .replace(/{{storySub}}/g, dataObject[key]["storySub"])
                          .replace(/{{storyDetails}}/g, dataObject[key]["storyDetails"])
                          .replace(/{{storyImage}}/g, dataObject[key]["storyImage"]);
}

// Replace the HTML of #list with final HTML
document.getElementById("list").innerHTML = listHtml;



function openPage(pageName,elmnt,color,fontcolor) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabcontent = document.getElementsByClassName("tabcontent-1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "";
  }
  tablinks = document.getElementsByClassName("tablink");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderBottom = "";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderBottomColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = '#50b194';
  elmnt.style.color = 'white';
  elmnt.style.borderBottom = '3px solid';
  elmnt.style.borderBottomColor = 'rgb(91, 55, 183)';


 

}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

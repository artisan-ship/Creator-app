function openPage(pageName,elmnt,color,fontcolor) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
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

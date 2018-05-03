
$(document).ready(function() {

$("#1").click(function() {
 document.getElementById("displaybox").value += '1';
});
  
$("#2").click(function() {
 document.getElementById("displaybox").value += '2';
});
  
$("#3").click(function() {
 document.getElementById("displaybox").value += '3';
});
  
$("#4").click(function() {
 document.getElementById("displaybox").value += '4';
});  

$("#5").click(function() {
 document.getElementById("displaybox").value += '5';
}); 
  
$("#6").click(function() {
 document.getElementById("displaybox").value += '6';
}); 
  
$("#7").click(function() {
 document.getElementById("displaybox").value += '7';
}); 
  
$("#8").click(function() {
 document.getElementById("displaybox").value += '8';
}); 
  
$("#9").click(function() {
 document.getElementById("displaybox").value += '9';
}); 
  
$("#0").click(function() {  document.getElementById("displaybox").value += '0';
}); 
  
$("#dot").click(function() {  document.getElementById("displaybox").value += '.';
});
  
 
$("#plus").click(function() {
 document.getElementById("displaybox").value += ' + ';
});
  
$("#minus").click(function() {
 document.getElementById("displaybox").value += ' - ';
});
  
$("#mult").click(function() {
 document.getElementById("displaybox").value += ' * ';
});
  
$("#div").click(function() {
 document.getElementById("displaybox").value += ' / ';
});
  
$("#equals").click(function() {
 document.getElementById("displaybox").value =  eval(document.getElementById("displaybox").value);
});  
  
$("#clear").click(function() {
 document.getElementById("displaybox").value =  '';
});   

$("#leftbrak").click(function() {
 document.getElementById("displaybox").value += '(';
});  
  
$("#rightbrak").click(function() {
 document.getElementById("displaybox").value += ')';
});  
  

}); 
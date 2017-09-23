 //document.getElementById('body2').style.backgroundImage= "url(images/citi1.jpg)";
 //alert("hello")
 var ii=0;
 
 
 
 repeat();
  
 
 function repeat() {
	 
	 document.getElementById("body1").style.transition = "all 1s";
	 if(ii==0) {
		
       document.getElementById('print').style.color= "black";		
		 
		 
	 }
	 if(ii==1) {
		
       document.getElementById('print').style.color= "skyblue";		
		 
		 
	 }
	 
	 if(ii==2) {
		
       document.getElementById('print').style.color= "teal";		
		 
		 
	 }
	  if(ii==3) {
		
       document.getElementById('print').style.color= "black";		
		 
		 
	 }
	  if(ii==6) {
		
       document.getElementById('print').style.color= "yellow";		
		 
		 
	 }

	
	  if(ii<7) {
	  var v ="url(images/bmw"+ii+".jpg)";
 
document.getElementById('body1').style.backgroundImage= v;


	ii++;
setTimeout(repeat, 4000);
	 }
	 
	 
	 else {
		// document.getElementById('body2').style.backgroundImage= "url(images/citi0.jpg)";
		 ii=0;
		  
		 

		 repeat();
	 }
	 
	 
	

 
 
 }
 
 
 
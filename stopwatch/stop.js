 var i=00;
 var k="start"
 var s=0;
 var m=0;
  var mm=0;
  var t="0";
  var h="0";
  var l="0";
 document.getElementById("start").onclick=start;
  document.getElementById("stop").onclick=stop;
   document.getElementById("reset").onclick=reset;
 //document.getElementById("print").innerHTML=""; 
 var print= document.getElementById("print");
 
 function start() {
s++;	 
k="start";
if(s<2){
move();	
}
	 
	 
 }
 function stop() {
	
 	
	
 k="stop";
 s=0;
 
	 
 }
 function reset() {
	i=0; 
	s=0;
	k="reset";
	m=0;
	mm=0;
	t="0";
	 document.getElementById("print").innerHTML="00:00:00";  
	
	 
	 
 }
 
 
 function move()  {
	
   if(k=="start") {
	   
	 
	 if(mm==60) {

     i++;
	 mm=0;

	 }	 
	   
	if(i==60){
		
		
     i=0;
	 m++;
	 
     

	}	
	 if(i>9)
	  {
       t="";  

	  }  
	  if(i<10) {
		
     t="0";  		
		  
	  }
	  
	  
	  if(m>9)
	  {
       h="";  

	  }  
	  if(m<10) {
		
     h="0";  		
		  
	  }
	   if(mm>9)
	  {
       l="";  

	  }  
	  if(mm<10) {
		
     l="0";  		
		  
	  }
	   
	print.innerHTML=h+m+":"+t+i+":"+l+mm; 
	
	mm++;
	
	setTimeout(move,14);
	
   
   
   
   
   
   
   
   }
   else if(k=="stop") {
	   
	 var temp=document.getElementById("print").innerHTML;

document.getElementById("print").innerHTML=temp;  
	   
	   
   }
   else if(k=="reset")
   {
	   
	 document.getElementById("print").innerHTML="00:00:00";  
	 i=0;
	 mm=0;
	 m=0;
	   
	   
   }
	 
 }
 
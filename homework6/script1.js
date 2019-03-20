function changeStyle(){
var	a= document.getElementById('imagine').width;
var	b= document.getElementById('imagine').height;
var	c=document.getElementById('imagine');
	console.log(a);
              c.style.width = (a*1.5)+"px";
              c.style.height = (b*1.5)+"px";
              c.style.borderRadius = (b*1.5)/2+"px";
           }
window.onload =function changePlace(){
	var	a= document.getElementById('menu')

              a.style.right = 0+"px";
              //a.style.height = (b*1.5)+"px";
             // a.style.borderRadius = (b*1.5)/2+"px";
           }
           function changePlacecenter(){
	var	a= document.getElementById('menu')
	var b= document.documentElement.clientWidth;
              a.style.right = (b/2-113/2)+"px";
           }

 


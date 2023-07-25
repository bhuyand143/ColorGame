var colors=genrancol(6);
var flag=1;
var sqr=document.querySelectorAll(".square");
var pickedcol=pickcolor();
var update=document.getElementById("coldis");
update.textContent=pickedcol;
var msg=document.getElementById("msg");
var headi=document.querySelector("h1");
var rbtn=document.getElementById("reset");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
easy.addEventListener("click",function()
{
	flag=0;
	this.classList.add("selected");
	hard.classList.remove("selected");
	colors=genrancol(3);
	pickedcol=pickcolor();
    for (var i = 0; i < sqr.length; i++) {
    	if(i<colors.length)
    	sqr[i].style.background=colors[i];
        else
        sqr[i].style.display="none";	
	}
    update.textContent=pickedcol;
    headi.style.background="steelblue";
})
hard.addEventListener("click",function()
{
	flag=1;
	this.classList.add("selected");
	easy.classList.remove("selected");
	colors=genrancol(6);
	pickedcol=pickcolor();
    for (var i = 0; i < sqr.length; i++) {
    	
    	sqr[i].style.background=colors[i];
        sqr[i].style.display="block";	
	}
    update.textContent=pickedcol;
    headi.style.background="steelblue";
})
rbtn.addEventListener("click",function(){
	if(flag==1)
	colors=genrancol(6);
	else
	colors=genrancol(3);
    pickedcol=pickcolor();
    for (var i = 0; i < sqr.length; i++) {
    	sqr[i].style.background=colors[i];
    }
    this.textContent="NEW COLORS";
    update.textContent=pickedcol;
    headi.style.background="steelblue";
    msg.textContent="";
    
})
for (var i = 0; i <sqr.length; i++)
 {
	sqr[i].style.background=colors[i];
	sqr[i].addEventListener("click",function(){
	var clickedcol=this.style.background;
	if(clickedcol===pickedcol){
	   msg.textContent="Correct!!!";
	   rbtn.textContent="Play Again?";
	   changecol(pickedcol);
	   headi.style.background=clickedcol;
	  
          }
          else{
          	msg.textContent="Try Again";
          	this.style.background="#232323";
          }
		});

 }
 function changecol(color1)
 {
 	for (var i = 0; i <colors.length; i++) {
 		sqr[i].style.background=color1;
 	}
 }
 function pickcolor()
 {
 	var num=Math.floor(Math.random()*colors.length);
 	return colors[num];
 }
 function genrancol(no)
 {
 	var arr=[];
 	for (var i = 0; i<no; i++) {
 	arr[i]=rancol();	
 	}
 	return arr;
 }
 function rancol(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
   	var col="rgb("+r + ", "+ g + ", " + b + ")";
   	return col;
 }
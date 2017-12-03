var buttons = document.querySelectorAll(".item");
var checking =true;
var count=0;
var alertpop = document.querySelector(".alert-conatin");
var popup = document.querySelector(".popup");


popup.addEventListener("click", function(){
	alertpop.innnerHTML="";
	this.style.display = "none";
});



for(var i=0; i<buttons.length;i++){	
	buttons[i].addEventListener("click", function(event){
		if(count>7){
			alertpop.innerHTML="DRAW !!!";
			popup.style.display = "block";
				for(var i=0; i<buttons.length;i++){
					buttons[i].innerHTML="";
			}
			count=0;
			return;
		}
		count++;
		if(checking==true){
			event.target.innerHTML = "X";
			event.target.style.color = "blue";
			checking =false;
		}else{
			event.target.innerHTML ="O";
			event.target.style.color = "red";
			checking=true;
		}
		win();
		
	})
}


function win(){
	if(buttons[0,3,6].innerHTML=="X"){
			alertpop.innerHTML="X win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[1,4,7].innerHTML=="X"){
			alertpop.innerHTML="X win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[2].innerHTML=="X"&&buttons[5].innerHTML=="X"&&buttons[8].innerHTML=="X"){
			alertpop.innerHTML="X win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[0].innerHTML=="X"&&buttons[1].innerHTML=="X"&&buttons[2].innerHTML=="X"){
			alertpop.innerHTML="X win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[3].innerHTML=="X"&&buttons[4].innerHTML=="X"&&buttons[5].innerHTML=="X"){
			alertpop.innerHTML="X win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[6].innerHTML=="X"&&buttons[7].innerHTML=="X"&&buttons[8].innerHTML=="X"){
			alertpop.innerHTML="X win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[0].innerHTML=="X"&&buttons[4].innerHTML=="X"&&buttons[8].innerHTML=="X"){
			alertpop.innerHTML="X win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[2].innerHTML=="X"&&buttons[4].innerHTML=="X"&&buttons[6].innerHTML=="X"){
			alertpop.innerHTML="X win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[0].innerHTML=="O"&&buttons[3].innerHTML=="O"&&buttons[6].innerHTML=="O"){
			alertpop.innerHTML="O win";
			popup.style.display = "block";
		for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[1].innerHTML=="O"&&buttons[4].innerHTML=="O"&&buttons[7].innerHTML=="O"){
			alertpop.innerHTML="O win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[2].innerHTML=="O"&&buttons[5].innerHTML=="O"&&buttons[8].innerHTML=="O"){
			alertpop.innerHTML="O win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[0].innerHTML=="O"&&buttons[1].innerHTML=="O"&&buttons[2].innerHTML=="O"){
			alertpop.innerHTML="O win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[3].innerHTML=="O"&&buttons[4].innerHTML=="O"&&buttons[5].innerHTML=="O"){
			alertpop.innerHTML="O win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[6].innerHTML=="O"&&buttons[7].innerHTML=="O"&&buttons[8].innerHTML=="O"){
			alertpop.innerHTML="O win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[0].innerHTML=="O"&&buttons[4].innerHTML=="O"&&buttons[8].innerHTML=="O"){
			alertpop.innerHTML="O win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
	if(buttons[2].innerHTML=="O"&&buttons[4].innerHTML=="O"&&buttons[6].innerHTML=="O"){
			alertpop.innerHTML="O win";
			popup.style.display = "block";
			for(var i=0; i<buttons.length;i++){
				buttons[i].innerHTML="";
			}
			count=0;
	}
}



// var arr=["X", "X", "X"];
// if(arr[0,1,2]=="X"){
// 	console.log("yes");
// }
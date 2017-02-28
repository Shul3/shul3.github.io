var num = [false,false,false,false,false];
var rate = 0;

function update(starNr) {
    
	var tmp = parseInt(starNr);
	
		
	for(var x=0; x<num.length; x++) {
		
		if(x == tmp && num[x] == false) {
			for(var y=0; y< x+1; y++) {
				
				document.getElementById(y.toString()).style.background = 'red';
				num[y] = true;
			}
			
		}
		
		else if(x == tmp && num[x] == true) {
			for(var y=0; y < num.length; y++) {
				if( y > x) {
					document.getElementById(y.toString()).style.backgroundImage = "url('/assets/resource/brickwall.png')";
					num[y] = false;
				}	
			}
		}
	}
	
	
}

/*function rate() {
	rate = 0;
	for(var i=0;i<num.length; i++) {
		if(num[i] == true) {
			rate++;
		}
	//alert(rate);
}*/
	
/*function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}
function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}*/

function mOut(starNr) {
	var tmp = parseInt(starNr);
	if(num[tmp] == false) {
		document.getElementById(tmp.toString()).style.backgroundImage = "url('/assets/resource/brickwall.png')";
	}
	else {
		document.getElementById(tmp.toString()).style.background = 'red';
	}
}


window.onload = loadRating();

function loadRating(){
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function (){
		
		if(this.readyState === 4 && this.status === 200){
			var response = this.responseText;
			var obj = JSON.parse(reponse);
			document.getElementByClass("rating").innerHTML = 'Rating ' + obj.msg;
		}
	}

	xhttp.open("GET",
		"http://rolandsson.nu/jakob/Jensen/SJK16/api/gettestservice.php?msg=" + vote.toString(), true);
alert(response);
	//Här startar vi vår "parallela" händelse
	xhttp.send();
}
//API-Key d8f5a9b1a7119c46
//Visa receptbetyg
//GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=d8f5a9b1a7119c46&recipe=cake1
//Rösta på ett receptbetyg
//GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=d8f5a9b1a7119c46&recipe=cake1&rating=4

var num = [false,false,false,false,false];
var rate = 0;

window.onload = loadRating();

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
	rate =0;
	for(var i=0;i<num.length; i++) {
		if(num[i] == true) {
			rate++;
		}
	}
	loadDoc();
	//loadRating();
	
}

	
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
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		var obj = JSON.parse(this.responseText);
      //document.getElementById("demo").innerHTML =  'Rating <strong>' + obj.rating + '</strong> of <em>' + obj.votes + '</em> votes.';
	  
    }
  };
  xhttp.open("GET", "http://edu.oscarb.se/sjk15/api/recipe/?api_key=d8f5a9b1a7119c46&recipe=cake1&rating=" + rate, true);
  xhttp.send();
}



function loadRating(){
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function (){
		
		if(this.readyState === 4 && this.status === 200){
			var obj = JSON.parse(this.responseText);
			document.getElementById("demo").innerHTML =  ' Rating <strong>' + obj.rating + '</strong> of <em>' + obj.votes +'</em> votes.';
		}
	}

	xhttp.open("GET",
		"http://edu.oscarb.se/sjk15/api/recipe/?api_key=d8f5a9b1a7119c46&recipe=cake1", true);
	
	xhttp.send();
}
var clear = false;
 
function update(xx){

	if(clear) {
		reset();
		clear = false;
	};
	
	if(xx == '+' || xx == '-') {
		var x1 = document.getElementById("result").value;
		var tmp = x1.substr(x1.length - 1, 1);
		
		if(!(tmp === '+' || tmp === '-')) 
		{
			var x = document.getElementById("result").value += xx;
			var txt = x.replace("undefined","");
			document.getElementById("result").innerHTML = txt;
		}
	}
	else {
		var x = document.getElementById("result").value += xx;
		var txt = x.replace("undefined","");
		document.getElementById("result").innerHTML = txt;
	}
	}
09

    function equalto(){
		
		var inp = document.getElementById("result");
		var res = document.getElementById("result").value;
		var txt = res.replace("undefined","");
		if(!(txt == "")) {
			var res2 = document.getElementById("results").value += txt + ' = ' + eval(txt) + '<br>';
			var txt2 = res2.replace("undefined","");
			document.getElementById("results").innerHTML = txt2;
			document.getElementById("result").innerHTML = eval(txt);
			clear = true;
			document.getElementById("result").value = '';
		}	
	
	}
13
     
14
    function reset(){
15
        document.getElementById("result").innerHTML = "";
    }
	
var clear = false;
 
function update(signOper){

	if(clear) {
		reset();
		clear = false;
	};
	
	if(signOper == '+' || signOper == '-') {
		var x1 = document.getElementById("result").value;
		var tmp = x1.substr(x1.length - 1, 1);
		
		if(!(tmp === '+' || tmp === '-')) 
		{
			var strOper = document.getElementById("result").value += signOper;
			var txt = strOper.replace("undefined","");
			document.getElementById("result").innerHTML = txt;
		}
	}
	else {
		var strOper = document.getElementById("result").value += signOper;
		var txt = strOper.replace("undefined","");
		document.getElementById("result").innerHTML = txt;
	}
	}

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
  
    function reset(){

        document.getElementById("result").innerHTML = "";
    }
	
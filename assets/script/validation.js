function pnCheck() {
    var x = document.getElementById("idNumber");
    var mystring = x.value;
	
	var numbers = new Array();
	var sum = 0;
	
	for (var i =0; i < mystring.length; i++){
        if (i%2 == 0) {
        	numbers[i] = parseInt(mystring[i]) * 2;
        }
		else {
			numbers[i] = parseInt(mystring[i]);
		}
		 if((10 - numbers[i]) > 0) {
        	sum += numbers[i];
        } else if((10 - numbers[i]) == 0){
        	sum += 1;
        } else {
        	sum += numbers[i] - 9;
        }
	};
	
	if(mystring.length > 10) {
		sum = sum - numbers[0] - numbers[1];
	}
				
	if(sum%10 == 0) {
		document.getElementById("idNumberResult").innerHTML = ' = Ok ';
		x.style.background = "lightgreen";
	} else {
		document.getElementById("idNumberResult").innerHTML = ' = inte Ok ';
		x.style.background = "red";
	}
	
}
function pnResult(x) {
    x.style.background = "lightgrey";
}



function yearCheck() {
	var x = document.getElementById("leapYear");
	var year = parseInt(x.value);
	
	var  isLeapYear = Boolean((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0));
	
	if(isLeapYear)  {
		document.getElementById("leapYearResult").innerHTML = x.value +  ' is a leap year';
		x.style.background = "lightgreen";
	}
	else {
		document.getElementById("leapYearResult").innerHTML = x.value +  ' is a not leap year';
		x.style.background = "red";
	}
}

function sumNum() {
	var x = document.getElementById("numberSum");
	var xx = x.value;
	
	var sum = 0;
	for(var i=0; i< xx.length; i++) {
		sum += parseInt(xx[i]);
	}
	document.getElementById("numberSumResult").innerHTML = ' = '  + sum ;
		x.style.background = "lightgreen";
}

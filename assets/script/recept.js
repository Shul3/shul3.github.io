var arrIngr = new Array();

function setLocalCakeCount() {
    "use strict";
    if (typeof (Storage) !== "undefined") {
        
        if (window.sessionStorage.getItem("cakeCount")) {
            var localCakeCount;
            localCakeCount = document.getElementById("numCakes").value;
            window.sessionStorage.setItem("cakeCount", localCakeCount);
        } else {
            window.sessionStorage.setItem("cakeCount", 2);
        }
    }
}


function updateRecipe() {
    "use strict";
    var i, numCakes, asideElement, ingrList;
    numCakes = document.getElementById("numCakes").value;
    if (numCakes < 2 || numCakes > 12) {
        numCakes = 2;
        document.getElementById("numCakes").value = 2;
    }
    asideElement = document.getElementsByTagName("aside")[0];
    ingrList = asideElement.getElementsByTagName("li");
    for (i = 0; i < ingrList.length; i++) {
        var tempStr = ingrList[i].textContent;
        var tempNumber = parseInt(tempStr.match(/[0-9]+/));
        if (typeof (arrIngr[i]) === "undefined") {
            arrIngr[i] = tempNumber;
        }
        tempNumber = arrIngr[i] * numCakes;
        tempStr = tempStr.replace(/[0-9]+/, tempNumber);
        ingrList[i].textContent = tempStr;
    }
    setLocalCakeCount();
}

window.oninput = function () {
    "use strict";
    updateRecipe();
};

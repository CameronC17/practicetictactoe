/*
	1	2	3
	4	5	6
	7	8	9
*/

var turnCounter = 0;
var tableArray = [null, null, null, null, null, null, null, null, null];
var winner = null;

window.onload = function() {
	var buttons = Array.from(document.getElementsByTagName("button"));

	buttons.forEach(function(button) {
    button.addEventListener("click", function() {
    	if (tableArray[this.id-1] == null) {
    		if (turnCounter % 2 == 0) {
    			this.textContent = "X";
    			tableArray[this.id - 1] = "X";
    			turnCounter++;
    		} else {
    			this.textContent = "O";
    			tableArray[this.id - 1] = "O";
    			turnCounter++;
    		}

    		checkWin();

    	}
    	});
	});

	function checkWin() {
		//check horizontal
		for (var i = 0; i < 8; i+=3) {
			if (tableArray[i] == "X" && tableArray[i + 1] == "X" && tableArray[i + 2] == "X") {
				winner = "X";
				window.alert("Winner is: " + winner);
			}
			else if (tableArray[i] == "O" && tableArray[i + 1] == "O" && tableArray[i + 2] == "O") {
				winner = "O";
				window.alert("Winner is: " + winner);

			}
		}
		//chekc vertical
		
	}

}
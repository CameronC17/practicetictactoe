/*
	1	2	3
	4	5	6
	7	8	9
*/

var turnCounter = 0;
var tableArray = [null, null, null, null, null, null, null, null, null];
var winner = null;
var scoreboard = [0,0];

window.onload = function() {
	var buttons = Array.from(document.getElementsByTagName("button"));

	buttons.forEach(function(button) {
    button.addEventListener("click", function() {
    	if (this.id == "clear") {
    		resetBoard();
    	} else if (tableArray[this.id-1] == null) {
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
			}
			else if (tableArray[i] == "O" && tableArray[i + 1] == "O" && tableArray[i + 2] == "O") {
				winner = "O";

			}
		}
		//check vertical
		for (var i = 0; i < 3; i++) {
			if (tableArray[i] == "X" && tableArray[i + 3] == "X" && tableArray[i + 6] == "X") {
				winner = "X";
			}
			else if (tableArray[i] == "O" && tableArray[i + 3] == "O" && tableArray[i + 6] == "O") {
				winner = "O";

			}
		}
		//check vertical
		if ((tableArray[0] == "X" && tableArray[4] == "X" && tableArray[8] == "X") || (tableArray[2] == "X" && tableArray[4] == "X" && tableArray[6] == "X")) {
			winner = "X";
		}
		if ((tableArray[0] == "O" && tableArray[4] == "O" && tableArray[8] == "O") || (tableArray[2] == "O" && tableArray[4] == "O" && tableArray[6] == "O")) {
			winner = "O";
		}

		//amend the scoreboard
		if (winner != null) {
			window.alert("The winner is: " + winner);
			if (winner == "X")
				scoreboard[0]++;
			else if (winner == "Y")
				scoreboard[1]++;
		}
	}

	function resetBoard() {
		tableArray = [null, null, null, null, null, null, null, null, null];
		turnCounter = 0;
		winner = null;
		for (var i = 0; i < buttons.length - 1; i++) {
			buttons[i].textContent = "";
		}
	}
}
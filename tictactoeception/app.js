/*
	1	2	3
	4	5	6
	7	8	9
*/


window.onload = function() {
  var game = new TTTMulti();
};

class TTTMulti {
  constructor() {
  	this.table = document.getElementById("scoreboard");
    this.board = [];
    this.winner = [null, null, null, null, null, null, null, null, null];
    this.globalWinner = null;
    this.turnCounter = 0;
    this.createGameBoard();
  }

  createGameBoard() {
  	for (var i = 1; i <= 9; i++) {
	  	//create the block div
	  	var div = document.createElement("div");
	  	//div.className = "block";
	  	div.setAttribute("class", "block");
	  	for (var j = 1; j <= 9; j++) {
	  		var buttonName = i.toString() + j.toString();
		  	var button = document.createElement("button");

		  	button.addEventListener("click", function(event) {
		  		this.clickedOn(event.target);
	      	}.bind(this));

		  	//button.id = buttonName;
		  	button.setAttribute("id", buttonName);
		  	button.style.cssText = 'width:40px;height:40px;display:inline-block;float:left;';
			div.appendChild(button);
		}
		div.style.cssText = 'display:inline-block;margin:17px;width:120px;height: 120px;float: left;';
		var element = document.getElementById("game");
		element.appendChild(div);
		this.board.push([null, null, null, null, null, null, null, null, null]);
	}

  }

  clickedOn(button) {
  	this.checkMarker(button);
  	this.checkWin();
  	this.updateScoreboard();
  	this.checkGlobalWin();
  }

  checkMarker(button) {
  	if (this.board[button.id.charAt(0) - 1][button.id.charAt(1) - 1] == null && this.winner[button.id.charAt(0) - 1] == null) {
  		if (this.turnCounter % 2 == 0) {
  			button.textContent = "X";
  			this.board[button.id.charAt(0) - 1][button.id.charAt(1) - 1] = "X";
  			this.turnCounter++;
  		} else {
  			button.textContent = "O";
  			this.board[button.id.charAt(0) - 1][button.id.charAt(1) - 1] = "O";
  			this.turnCounter++;
  		}
  	}
  }

  checkWin() {
  	//for each table
  	for (var x = 0; x < 9; x++) {

  		//check horizontal
		for (var i = 0; i < 8; i+=3) {
			if (this.board[x][i] == "X" && this.board[x][i + 1] == "X" && this.board[x][i + 2] == "X") {
				this.winner[x] = "X";
			}
			else if (this.board[x][i] == "O" && this.board[x][i + 1] == "O" && this.board[x][i + 2] == "O") {
				this.winner[x] = "O";

			}
		}
		//check vertical
		for (var i = 0; i < 3; i++) {
			if (this.board[x][i] == "X" && this.board[x][i + 3] == "X" && this.board[x][i + 6] == "X") {
				this.winner[x] = "X";
			}
			else if (this.board[x][i] == "O" && this.board[x][i + 3] == "O" && this.board[x][i + 6] == "O") {
				this.winner[x] = "O";

			}
		}
		//check diagonal
		if ((this.board[x][0] == "X" && this.board[x][4] == "X" && this.board[x][8] == "X") || (this.board[x][2] == "X" && this.board[x][4] == "X" && this.board[x][6] == "X")) {
			this.winner[x] = "X";
		}
		if ((this.board[x][0] == "O" && this.board[x][4] == "O" && this.board[x][8] == "O") || (this.board[x][2] == "O" && this.board[x][4] == "O" && this.board[x][6] == "O")) {
			this.winner[x] = "O";
		}
  	}

  }

  updateScoreboard() {
  	var scoreboard = [0,0];
  	for (var i = 0; i < 9; i++) {
  		if (this.winner[i] == "X")
  			scoreboard[0]++;
  		else if (this.winner[i] == "O")
  			scoreboard[1]++;
  	}
  	this.table.rows[1].cells[0].innerHTML = scoreboard[0];
	this.table.rows[1].cells[1].innerHTML = scoreboard[1];
  }

  checkGlobalWin() {
  	//check horizontal
		for (var i = 0; i < 8; i+=3) {
			if (this.winner[i] == "X" && this.winner[i + 1] == "X" && this.winner[i + 2] == "X") {
				this.globalWinner = "X";
			}
			else if (this.winner[i] == "O" && this.winner[i + 1] == "O" && this.winner[i + 2] == "O") {
				this.globalWinner = "O";

			}
		}
		//check vertical
		for (var i = 0; i < 3; i++) {
			if (this.winner[i] == "X" && this.winner[i + 3] == "X" && this.winner[i + 6] == "X") {
				this.globalWinner = "X";
			}
			else if (this.winner[i] == "O" && this.winner[i + 3] == "O" && this.winner[i + 6] == "O") {
				this.globalWinner = "O";

			}
		}
		//check vertical
		if ((this.winner[0] == "X" && this.winner[4] == "X" && this.winner[8] == "X") || (this.winner[2] == "X" && this.winner[4] == "X" && this.winner[6] == "X")) {
			this.globalWinner = "X";
		}
		if ((this.winner[0] == "O" && this.winner[4] == "O" && this.winner[8] == "O") || (this.winner[2] == "O" && this.winner[4] == "O" && this.winner[6] == "O")) {
			this.globalWinner = "O";
		}

		if (this.globalWinner != null) {
			window.alert("THE GLOBAL WINNER IS: " + this.globalWinner);
		}
  }

}

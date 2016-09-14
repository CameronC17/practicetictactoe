//	1	2	3
//	4	5	6
//	7	8	9


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
  	this.checkIndividualWin();
  	this.checkGlobalWin();
  	this.updateScoreboard();
  }

  checkIndividualWin() {
  	for (var i = 0; i < 9; i++) {
  		var hasAnyoneWon = this.newCheckWin(this.board[i]);
  		if (hasAnyoneWon != null);
  			this.winner[i] = hasAnyoneWon;
  	}
  	console.log(this.winner);
  }

  checkGlobalWin() {
  	var anyWinner = this.newCheckWin(this.winner);
  	if (anyWinner != null) {
  		this.globalWinner = anyWinner;
  		window.alert("THE GLOBAL WINNER IS: " + this.globalWinner);
  	}
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

  newCheckWin(whatArray) {
  	var whoHasWon = null;

  	//check horizontal
	for (var i = 0; i < 8; i+=3) {
		if (whatArray[i] == "X" && whatArray[i + 1] == "X" && whatArray[i + 2] == "X") {
			whoHasWon = "X";
		}
		else if (whatArray[i] == "O" && whatArray[i + 1] == "O" && whatArray[i + 2] == "O") {
			whoHasWon = "O";

		}
	}
	//check vertical
	for (var i = 0; i < 3; i++) {
		if (whatArray[i] == "X" && whatArray[i + 3] == "X" && whatArray[i + 6] == "X") {
			whoHasWon = "X";
		}
		else if (whatArray[i] == "O" && whatArray[i + 3] == "O" && whatArray[i + 6] == "O") {
			whoHasWon = "O";

		}
	}
	//check diagonal
	if ((whatArray[0] == "X" && whatArray[4] == "X" && whatArray[8] == "X") || (whatArray[2] == "X" && whatArray[4] == "X" && whatArray[6] == "X")) {
		whoHasWon = "X";
	}
	if ((whatArray[0] == "O" && whatArray[4] == "O" && whatArray[8] == "O") || (whatArray[2] == "O" && whatArray[4] == "O" && whatArray[6] == "O")) {
		whoHasWon = "O";
	}

	return whoHasWon;
  }

}
var msg = document.getElementById('turnMessage');
var turn = "X";
var winner = false;


function setMsg(turn) {
	if (winner == true) {
		msg.innerHTML = "Congratulations " + turn + ". You won!";	
	} else {
		msg.innerHTML = "It is " + turn + "'s turn";
	}
}


function cellArray() {
		var c = [0]
	for (var i = 1; i < 10; i++) {
		c.push(document.getElementById('c'+i).innerHTML);
	}
	return c;

}


function checkWin() {
	c = cellArray();

	if (c[1]==turn && c[2]==turn && c[3]==turn) {
		winner = true;
	} else if (c[4]==turn && c[5]==turn && c[6]==turn) {
		winner = true;
	} else if (c[7]==turn && c[8]==turn && c[9]==turn) {
		winner = true;
	} else if (c[1]==turn && c[4]==turn && c[7]==turn) {
		winner = true;
	} else if (c[2]==turn && c[5]==turn && c[8]==turn) {
		winner = true;
	} else if (c[3]==turn && c[6]==turn && c[9]==turn) {
		winner = true;
	} else if (c[1]==turn && c[5]==turn && c[9]==turn) {
		winner = true;
	} else if (c[3]==turn && c[5]==turn && c[7]==turn) {
		winner = true;
	} else {
		winner = false;
	}

	if (winner == true) {
		setMsg(turn);
	}
}


function changeTurn(cellData) {
		if (cellData === "X") {
			cellData = "O";
		} else 	{
			cellData = "X"
		}	
	return cellData;	
}

function game(cell) {
	var data = cell.innerHTML;

	if (winner == false) {
		if (data == "  ") {
			cell.innerHTML=turn;
			checkWin();	
		} else {
			alert('This cell is filled. Enter in empty cells only.');
		}
	}	

	if (data == "  " && winner != true) {
		turn = changeTurn(turn);
		setMsg(turn)
	}

}

function restartGame() {
	location.reload();
}
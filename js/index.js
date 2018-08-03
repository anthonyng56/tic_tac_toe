var p = true;
function boxOne() {
	if (p === true) {
		$('#one').html('X');
		p = false;
		$('#one').unbind('click');
	} else {
		$('#one').html('O');
		p = true;
		$('#one').unbind('click');
	}
}
$('#one').click(boxOne);

function boxTwo() {
	if (p === true) {
		$('#two').html('X');
		p = false;
		$('#two').unbind('click');
	} else {
		$('#two').html('O');
		p = true;
		$('#two').unbind('click');
	}
}
$('#two').click(boxTwo);

function boxThree() {
	if (p === true) {
		$('#three').html('X');
		p = false;
		$('#three').unbind('click');
	} else {
		$('#three').html('O');
		p = true;
		$('#three').unbind('click');
	}
}
$('#three').click(boxThree);

function boxFour() {
	if (p === true) {
		$('#four').html('X');
		p = false;
		$('#four').unbind('click');
	} else {
		$('#four').html('O');
		p = true;
		$('#four').unbind('click');
	}
}
$('#four').click(boxFour);

function boxFive() {
	if (p === true) {
		$('#five').html('X');
		p = false;
		$('#five').unbind('click');
	} else {
		$('#five').html('O');
		p = true;
		$('#five').unbind('click');
	}
}
$('#five').click(boxFive);

function boxSix() {
	if (p === true) {
		$('#six').html('X');
		p = false;
		$('#six').unbind('click');
	} else {
		$('#six').html('O');
		p = true;
		$('#six').unbind('click');
	}
}
$('#six').click(boxSix);

function boxSeven() {
	if (p === true) {
		$('#seven').html('X');
		p = false;
		$('#seven').unbind('click');
	} else {
		$('#seven').html('O');
		p = true;
		$('#seven').unbind('click');
	}
}
$('#seven').click(boxSeven);

function boxEight() {
	if (p === true) {
		$('#eight').html('X');
		p = false;
		$('#eight').unbind('click');
	} else {
		$('#eight').html('O');
		p = true;
		$('#eight').unbind('click');
	}
}
$('#eight').click(boxEight);

function boxNine() {
	if (p === true) {
		$('#nine').html('X');
		p = false;
		$('#nine').unbind('click');
	} else {
		$('#nine').html('O');
		p = true;
		$('#nine').unbind('click');
	}
}
$('#nine').click(boxNine);

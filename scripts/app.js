let second = 0;
let minute = 0;
let hour = 0;
let game = false;
let startGame = document.getElementById("startGame");
let resetGame = document.getElementById("resetGame");
let timeSpent = document.getElementById("timeSpent");
let stepMoved = document.getElementById("stepMoved");
let life1 = document.getElementById("gratipay1");
let life2 = document.getElementById("gratipay2");
let life3 = document.getElementById("gratipay3");
let life4 = document.getElementById("gratipay4");
let life5 = document.getElementById("gratipay5");
let card = document.querySelectorAll(".card");


function addTime() {
	second++;
	if (second>=60) {
		second = 0;
		minute++;
		if (minute>=60) {
			minute = 0;
			hour++;
		}
	}

	let h;
	if (hour!=0) {
		if (hour>=10) {
			h = hour.toString();
		} else {
			h = "0"+hour.toString();
		}
	} else {
		h = "00";
	}

	let m;
	if (minute!=0) {
		if (minute>=10) {
			m = minute.toString();
		} else {
			m = "0"+minute.toString();
		}
	} else {
		m = "00";
	}

	let s;
	if (second!=0) {
		if (second>=10) {
			s = second.toString();
		} else {
			s = "0"+second.toString();
		}
	} else {
		s = "00";
	}

	timeSpent.textContent = h+":"+m+":"+s;
	setTimer();
}

function setTimer() {
	t = setTimeout(addTime, 1000);
}

function stopTimer() {
	clearTimeout(t);
	timeSpent.textContent = "00:00:00";
	second = 0;
	minute = 0;
	hour = 0;
}

function initImage() {
	card.forEach(card => {
		card.firstElementChild.classList.add("hidden");
	})
}

function begin() {
	if (game == false) {
		let size = card.length;
		for (var i = 0; i<size; i++) {
			var temp1 = Math.floor(Math.random()*size);
			var temp2 = Math.floor(Math.random()*size);
			card[temp2].after(card[temp1]);
		}
		setTimeout(initImage, 1000);
		game = true;
		setTimer();
	}
}

startGame.addEventListener("click", begin);
resetGame.addEventListener("click", reset);

function date() {
	let currentDate = new Date();
	let dateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	};
	let date = currentDate.toLocaleDateString("en-GB", dateOptions);
	document.getElementById("header_date").innerHTML = date;
}

function getCurrentTime() {
	let ((this.getHours() < 10) ? "0" : "") + ((this.getHours() > 12) ? (this.getHours() - 12) : this.getHours()) + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds() + ((this.getHours() > 12) ? (' PM') : ' AM');
};

function greet() {
	let currentTime = new Date();
	let greet = Math.floor(currentTime.getHours() / 6);
	switch (greet) {
		case 0:
			document.getElementById("header_greet").innerHTML = "Good night.";
			break;
		case 1:
			document.getElementById("header_greet").innerHTML = "Good morning.";
			break;
		case 2:
			document.getElementById("header_greet").innerHTML = "Good afternoon.";
			break;
		case 3:
			document.getElementById("header_greet").innerHTML = "Good evening.";
			break;
	}
}

function loadFunctions() {
	date();
	getCurrentTime();
	greet();
}

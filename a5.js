function makeBigger() {
	// area font size 24pt
	document.getElementById("userText").style.fontSize = "24pt";
}

function fancifyText() {
	const area = document.getElementById("userText");
	const fanc = document.getElementById("fancyRadio").checked;
	if (fanc) {
		alert("fancyShmancy selected!");
		area.style.fontWeight = "bold";
		area.style.color = "blue";
		area.style.textDecoration = "underline";
	} else {
		alert("BoringBetty selected!");
		area.style.fontWeight = "normal";
		area.style.color = "black";
		area.style.textDecoration = "none";
	}
}

function mooifyText() {
	const area = document.getElementById("userText");
	let text = area.value.toUpperCase();
	text = text.split(" ").join("_");
	// adding moooo
	let sentences = text.split(".");
	for (let i = 0; i < sentences.length; i++) {
		let words = sentences[i].trim().split(" ");
		if (words.length > 0 && words[0] !== "") {
			words[words.length - 1] = words[words.length - 1] + "-Moo";
			sentences[i] = words.join(" ");
		}
	}
	area.value = sentences.join(".");
}

const clicktext = document.querySelector("#click-to-enter");

function buttonDel() {
	const elem = document.getElementById("click-to-enter");
	elem.parentNode.removeChild(elem);
}

const muza = new Audio();

muza.loop = true;
muza.src = "sound.mp3";

function zagrajtoguwno() {
	muza.play();
}

clicktext.addEventListener("click", () => {
	buttonDel();
	document.querySelector("body").classList.add("container");
});

console.log(`:)`);

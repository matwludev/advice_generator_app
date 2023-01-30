const adviceTxt = document.querySelector(".advice_text");
const adviceNum = document.querySelector(".advice_num");
const generateBtn = document.querySelector("#generate");

const adviceGen = async () => {
	const advice = await fetch("https://api.adviceslip.com/advice", {
		cache: "no-cache",
	});
	const adviceJson = await advice.json();
	console.log(adviceJson);
	adviceNum.textContent = adviceJson.slip.id;
	adviceTxt.textContent = '"' + adviceJson.slip.advice + '"';
};

window.addEventListener("load", adviceGen);
generateBtn.addEventListener("click", adviceGen);

const adviceTxt = document.querySelector(".advice_text");
const adviceNum = document.querySelector(".advice_num");
const generateBtn = document.querySelector("#generate");

const adviceGen = async () => {
	try {
		const advice = await fetch("https://api.adviceslip.com/advice", {
			cache: "no-cache",
		});

		if (!advice.ok) {
			alert("Api problems. Try again later");
		} else {
			const adviceJson = await advice.json();
			adviceNum.textContent = adviceJson.slip.id;
			adviceTxt.textContent = '"' + adviceJson.slip.advice + '"';
		}
	} catch (e) {
		alert(e);
	}
};

window.addEventListener("load", adviceGen);
generateBtn.addEventListener("click", adviceGen);

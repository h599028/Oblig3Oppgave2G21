
class Dice {
	#resultat;

	constructor() {
		this.#resultat = 0;
	}

	roll() {
		let resultat = Math.floor(Math.random() * 6) + 1;
		document.getElementById("resultat").innerHTML = resultat;
	}

}

class DiceController {

	dice = new Dice();

	constructor(rootElement) {
		this.rootElement = rootElement;

		const dicebutton = rootElement.querySelector("*[data-dicebutton]");
		dicebutton.addEventListener("click", this.#rollDice.bind(this));
	}

	#rollDice() {
		this.dice.roll()
	}

}

function init() {
	const rootElement = document.getElementById("root");
	new DiceController(rootElement);
}

document.addEventListener('DOMContentLoaded', init)
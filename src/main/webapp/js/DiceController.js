
class Dice {


    roll() {
        let resultat = Math.floor(Math.random() * 6) + 1;
        document.getElementById("resultat").innerHTML = resultat;
    }
    getValue(){
        return value;
    }

}

class DiceController {
    /**
     * Initialiserer Demo
     * @param {String} rootElement - HTML container-elementet (DIV) med HTML button
     *                 som aktiverer demonstrasjonene.
     */
    constructor (rootElement) {
        this.rootElement = rootElement

        const dicebutton = rootElement.getElementById("*[data-dicebutton]");
        dicebutton.addEventListener("click",this.#rollDice.bind(this));

        diceoutputElement.innerText = Dice.getValue();

        console.log(dice.getValue())

        //rootElement.querySelector("span[data-diceoutput]").textContent = ;
    }



    /**
     * Metode som setter ny header
     * @private
     * @listens Button:click
     */
    #rollDice() {
        Dice.roll()
    }

}




function init() {
    const rootElement = new DiceController("root");
    new DiceController(rootElement);
}

document.addEventListener('DOMContentLoaded', init)
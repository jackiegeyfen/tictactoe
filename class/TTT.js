const Screen = require("./screen.js");
const Cursor = require("./cursor.js")

class TTT {
    constructor(){
this.playerTurn = "O";
this.cursor= new Cursor();
this.grid= [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
];
Screen.initialize();
Screen.setGridlines(true);
Screen.setMessage(`Player ${this.playerTurn}'s turn`)
Screen.setBackgroundColor(0,0, "correctYellow")
    }
}
module.exports= TTT;

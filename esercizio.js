function randomNumber(min, max) {
    return Math.floor(Math.random() * 100 + 1);
}
function winner(random, player1, player2) {
    var winner1 = Math.abs(random - player1);
    var winner2 = Math.abs(random - player2);
    if (winner1 === winner2) {
        return "I giocatori hanno gli stessi numeri";
    }
    else if (winner1 < winner2) {
        return "Player1 è andato più vicino ad indovinare";
    }
    else if (winner2 < winner1) {
        return "player2 è andato più vicino ad indovinare";
    }
    else {
        return "errore";
    }
}
var player1 = 10;
var player2 = 20;
var random = randomNumber(1, 100);
console.log("Numero casuale =", random);
if (player1 === random) {
    console.log("Player1 ha indovinato il numero");
}
else if (player2 === random) {
    console.log("Player2 ha indovinato il numero");
}
else {
    var result = winner(random, player1, player2);
    console.log(result);
}

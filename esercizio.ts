function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * 100 + 1);
}

function winner(random: number, player1: number, player2: number): string {
  const winner1: number = Math.abs(random - player1);
  const winner2: number = Math.abs(random - player2);

  if (winner1 === winner2) {
    return "I giocatori hanno la distanza uguale ";
  } else if (winner1 < winner2) {
    return "Player1 è andato più vicino ad indovinare";
  } else if (winner2 < winner1) {
    return "player2 è andato più vicino ad indovinare";
  } else {
    return "errore";
  }
}

const player1: number = 10;
const player2: number = 20;

const random: number = randomNumber(1, 100);

console.log("Numero casuale =", random);

if (player1 === random) {
  console.log("Player1 ha indovinato il numero");
} else if (player2 === random) {
  console.log("Player2 ha indovinato il numero");
} else {
  const result: string = winner(random, player1, player2);
  console.log(result);
}

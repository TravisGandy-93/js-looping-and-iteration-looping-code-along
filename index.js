// Code your solutions in this file
function writeCards(cards, event) {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful ${event} wishes`);
  }

  return cards;
}

function countDown(i) {
    while ( i > 0) {
      console.log(i--);
    }
  
    return i;
  }
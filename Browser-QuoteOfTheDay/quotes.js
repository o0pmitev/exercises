const button = document.querySelector('.btn');

const getRandomQuote = () => {
  const quotes = [
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "Don't watch the clock; do what it does. Keep going.",
    "The secret of getting ahead is getting started.",
    "Well done is better than well said.",
    "You miss 100% of the shots you don’t take.",
    "A goal is a dream with a deadline.",
    "Outstanding people have one thing in common: An absolute sense of mission.",
    "Trying is winning in the moment.",
    "Fall down seven times and stand up eight.",
    "You just can't beat the person who never gives up.",
    "There is little success where there is little laughter.",
    "We cannot solve our problems with the same thinking we used when we created them."
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const randomNumber = getRandomInt(parseInt(quotes.length));
  const inputField = document.querySelector('#form');
  inputField.value = quotes[randomNumber];
}

getRandomQuote()
button.addEventListener('click', getRandomQuote);


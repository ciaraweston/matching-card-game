// Make a 10 card memory game - users must be able to select two cards and check if they are a match.
// If they are a match, they will stay flipped. If not, they will flip back over. Game is over when all cards are matched and flipped over.


// VARIABLES

const characters = document.querySelectorAll('.Card')

// FUNCTIONS

function shuffleCards() {
  let character1 = 'BlackPanther',
    character2 = 'Killmonger',
    character3 = 'Nakia',
    character4 = 'Okoye',
    character5 = 'Shuri',
    characterNames = [character1, character2, character3, character4, character5]

  //concat will return and merge the character names 
  //using math.random will return a number between 0-1, while sort returns a    number between -5, assigning each number by the array

  characterNames = characterNames.concat(characterNames).sort(() => Math.random() - 0.5)
  characters.forEach((el, i) => {
    el.dataset.value = characterNames[i]
    console.log("dataset value = " + el.dataset.value)
  })
}
shuffleCards()

//CHARACTERS

let arrImg = [
  'blackpanther.png',
  'killmonger.png',
  'nakia.png',
  'okoye.png',
  'shuri.png',
]
//ADD EVENT LISTENER

characters.forEach(el => el.addEventListener('click', checkForMatch))

// when using data-value this will store the character name in the HTML

let clicked = []
let count = 0

function checkForMatch(click) {
  click.target.src = `images/${click.target.dataset.value}.png`
  clicked.push(click.target)
  if (clicked.length === 2) {

    if (clicked[0].dataset.value === clicked[1].dataset.value) {
      count++
    } else {
      setTimeout(() => {
        clicked.forEach(el =>
          el.src = `images/blackpanthercover.png`)
      }, 500);

      // console.log('change')
    }
    setTimeout(() => {
      clicked = []
    }, 501)
  }
  if (count === 5) {
    setTimeout(() => {
      alert('Wakada Forever!')
    }, 310)
  }
}
const reset = document.getElementById('reset');
reset.addEventListener('click', () => location.reload());








// check length of array 
// if array = two we check if the length is two. 
// if its two we run a compare function
// if theyre the same then we disable does two and add one to a counter 
// when counter is a certain length the game is over 


//define a card and set the innerHTML of that card to one of the city names
    // wrap it in the function
// Define a function by putting an eventListener on each of the cards
        // expect that the value will show how many times you clicked on the console
        // keep track of how many cards we have flipped over
        // If we have 2 cards flipped over we want to check if they're equal
        // If they're not equal it would be not a match and the cards will just flip back over
        // If they are equal they stay flipped
// Define a check game over function
        // When there is no more cards the game will be over
// Write a function to shuffle the cards after
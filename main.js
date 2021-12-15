// Make a 10 card memory game - users must be able to select two cards and check if they are a match.
// If they are a match, they will stay flipped. If not, they will flip back over. Game is over when all cards are matched and flipped over.

const characters = document.querySelectorAll('.Card')


function shuffleCards() {
  let character1 = 'BlackPanther',
    character2 = 'Killmonger',
    character3 = 'Nakia',
    character4 = 'Okoye',
    character5 = 'Shuri',
    characterNames = [character1, character2, character3, character4, character5]


  characterNames = characterNames.concat(characterNames).sort(() => Math.random() - 0.5)
  characters.forEach((el, i) => {
    el.dataset.value = characterNames[i]
    console.log("dataset value = " + el.dataset.value)
  })
}
shuffleCards()



let arrImg = [
  'blackpanther.png',
  'killmonger.png',
  'nakia.png',
  'okoye.png',
  'shuri.png',
]


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
      alert('WAKANDA FOREVER!')
    }, 310)
  }
}
const reset = document.getElementById('reset');
reset.addEventListener('click', () => location.reload());

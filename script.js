let button = 1;
let colors = ['pink', '#FF6969', '#9CA777', '#643A6B', '#05BFDB', '#FFDCB6', "#ECC9EE", '#F7D060', '#FF6D60', '#F7D060', '#F3E99F', '#98D8AA', '#B2A4FF', '#FEFF86', '#19376D', '#A9907E', '#159895', '#408E91', '#FFD966', '#8F43EE', '#539165', '#E7B10A', '#4C4B16', '#BFACE2', '#F9DBBB', '#FDD36A', '#AACB73', '#FFD4D4', '#7286D3', '#FFF6BD', '#FFD4B2', '#CEEDC7', '#86C8BC', '3C2A21#', '#FF597B', '#460C68', '#181D31', '#2D033B', '#DC3535', '#285430', '#0008C1', '#DC5F00', '#', '#', '#', '#42032C', '#A10035', '#3120E0', '#FF1E00', '#59CE8F', '#FFB4B4', '#1A4D2E', '#18978F', '#D21312', '#E74646', '#CD0404 ', '#850000', '#FA9494'];
let n = 0;

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function add() {
  document.querySelector('#ball').innerHTML = button++
  document.getElementById('clicker').style.backgroundColor = colors[n]
  document.getElementById('ball').style.color = colors[n]
  for (let m = 1; m < colors.length; m++) {

    if (document.querySelector('#ball').innerHTML == 100 * m - 1)
     n++
  }
   
}
shuffle(colors) 



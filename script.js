let button = 1;
let colors = [ '' , 'red' , 'yellow','green','purple', 'white'];
let n=0
function add() {
  document.querySelector('#ball').innerHTML = button++
  document.getElementById('clicker').style.backgroundColor = colors[n]
 for(let m =1 ; m < colors.length ; m++)
  {
   if( document.querySelector('#ball').innerHTML == 100*m)
    n++
  }
}


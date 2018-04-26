const up = document.querySelector('.top');
// up.classList.toggle()

const turnRed = function(e){
  console.log(e);
  setInterval(()=> this.classList.toggle('red'), 1000);
}

const startStreetLight = function(e) {
  disable();
  let green = document.querySelector('.bot');
  let yellow = document.querySelector('.mid');
  let red = document.querySelector('.top');
  green.classList.toggle('green');
  setInterval(()=> {
    if (green.classList.contains('green')) {
      green.classList.toggle('green');
      red.classList.toggle('red');
    } else if (red.classList.contains('red')) {
      red.classList.toggle('red');
      yellow.classList.toggle('yellow');
    } else {
      yellow.classList.toggle('yellow');
      green.classList.toggle('green');
    }
  }, 1500);

}

const disable = () => {
  document.getElementsByClassName('buttonStart').disabled = 'disabled';
}
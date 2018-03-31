const up = document.querySelector('.top');
// up.classList.toggle()

const turnRed = function(e){
  console.log(e);
  setInterval(()=> this.classList.toggle('red'), 1000);
}

const startStreetLight = function(e) {
  console.log('start');
  disable();
  let green = document.querySelector('.bot');
  let yellow = document.querySelector('.mid');
  let red = document.querySelector('.top');
  green.classList.toggle('green');
  setTimeout(()=> {
    green.classList.toggle('green');
    red.classList.toggle('red');
  }, 5000);

}

const disable = () => {
  document.getElementsByClassName('buttonStart').disabled = 'disabled';
}
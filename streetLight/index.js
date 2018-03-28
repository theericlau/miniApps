const up = document.querySelector('.top');
console.log(up);

// up.classList.toggle()

const turnRed = function(e){
  console.log(e);

  setInterval(()=> this.classList.toggle('red'), 1000);
}

up.addEventListener("click", turnRed);
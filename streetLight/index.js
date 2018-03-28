const up = document.querySelector('.top');
console.log(up);

// up.classList.toggle()

const turnRed = function(e){
  console.log(e);
}

up.addEventListener("click", turnRed);
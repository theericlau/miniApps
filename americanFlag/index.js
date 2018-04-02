const starRow = [...document.querySelectorAll('div.star-row')];
console.log(starRow);

const blueContainer = document.getElementById('blue-box');

const starDiv = document.createElement('div');
starDiv.classList.add('.star');
starDiv.innerHTML= `&#10029`;

const starRowSix = document.createElement('div');
starRowSix.classList.add('star-row-six');

const starRowFive = document.createElement('div');
starRowFive.classList.add('star-row-five')


const addStarRows = (node) => {
  let sixStar = 0;
  let fiveStar = 1;

  while (sixStar < 6){
    blueContainer.appendChild(starDiv)
  }

}

starRow.forEach(node => {
  node.appendChild(div);
})
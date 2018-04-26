const blueContainer = document.getElementById('blue-box');

// const starDiv = document.createElement('div');
// starDiv.classList.add('star');
// starDiv.innerHTML= `&#10029`;

// const starRowSix = document.createElement('div');
// starRowSix.classList.add('star-row-six');

// const starRowFive = document.createElement('div');
// starRowFive.classList.add('star-row-five')


const addStarRows = () => {
  let sixStar = 0;
  let fiveStar = 1;

  while (sixStar < 6){
    let starRowSix = document.createElement('div');
    starRowSix.classList.add('star-row-six');

    let starRowFive = document.createElement('div');
    starRowFive.classList.add('star-row-five');

    // debugger;
    blueContainer.appendChild(starRowSix);
    if (fiveStar < 6){
      blueContainer.appendChild(starRowFive);
    }
    sixStar++;
    fiveStar++;
  }
};

addStarRows();



const starSix = [...document.querySelectorAll('div.star-row-six')];
const starFive = [...document.querySelectorAll('div.star-row-five')];

starSix.forEach(node => {
  let i = 0;
  while(i < 6) {
    let starDiv = document.createElement('div');
    starDiv.classList.add('star');
    starDiv.innerHTML = `&#10029`;
    node.appendChild(starDiv);
    i++;
  }
})

starFive.forEach(node => {
  let i = 0;
  while (i < 5) {
    let starDiv = document.createElement('div');
    starDiv.classList.add('star');
    starDiv.innerHTML = `&#10029`;
    node.appendChild(starDiv);
    i++;
  }
})
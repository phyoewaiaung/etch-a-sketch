var jsContainer = document.querySelector('.container');

createWeb(16);
/* Function that create 16*16 default grid */
function createWeb(num) {
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      var gridSquare = document.createElement('div');
      gridSquare.className = 'gridSquare';
      gridSquare.style.width = 960 / num + 'px';
      gridSquare.style.height = 960 / num + 'px';
      jsContainer.appendChild(gridSquare);
    }
  }
}

function clear() {
  while (jsContainer.firstChild) {
    jsContainer.removeChild(jsContainer.lastChild);
  }
}
mouseover();
/** Function that makes hover effect to squares */
function mouseover() {
  var hover = document.querySelectorAll('.gridSquare');
  hover.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', (e) => {
      e.target.style.background = 'blue';
    });
  });
}
var btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  var user = prompt('How many squares do you want per side Between (1-100)?');
  if (user >= 1 && user <= 100) {
    clear();
    createWeb(user);
    mouseover();
  } else {
    var user = prompt('Invalid number Type Between 1 and 100');
    clear();
    createWeb(user);
    mouseover();
  }
});

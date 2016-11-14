(function() {
  'use strict';

  const sectionElem = document.querySelector('section');
  const firstRow = document.querySelector('.row');

  for (let c = 0; c < 40; c++) {
    const createCell = document.createElement('div');
    createCell.classList.add('blankcell');
    firstRow.appendChild(createCell);
  }

  for (let i = 0; i < 39; i++) {
    const createRow = firstRow.cloneNode(true);
    createRow.classList.add('clearfix');
    sectionElem.appendChild(createRow);
  }
})();

(function() {
  'use strict';

  const table = document.querySelector('section');
  const buttons = document.querySelector('aside');
  const currentColor = document.getElementById('currentColor');
  const eraser = document.getElementById('eraser');
  currentColor.style.backgroundColor = 'white';
  eraser.style.backgroundColor = '#FFFFFF';

  eraser.addEventListener('click', (event) => {
    currentColor.style.backgroundColor = 'white';
  });

  table.addEventListener('click', (event) => {
    if (event.target.classList.contains('grid-col')) {
      return;
    }
    event.target.style.backgroundColor = currentColor.style.backgroundColor;
  });

  let draw;

  const handleMouseDown = () => {
    draw = true;
  }

  const handleMouseUp = () => {
    draw = false;
  }

  const handleMouseEnter = (event) => {
    if (event.target.classList.contains('grid-col')) {
      return;
    }
    if (draw) {
      event.target.style.backgroundColor = currentColor.style.backgroundColor;
    }
  };

  table.addEventListener('mousedown', handleMouseDown);
  table.addEventListener('mouseup', handleMouseUp);
  for (const row of table.children) {
    for (const cell of row.children) {
      cell.addEventListener('mouseenter', handleMouseEnter);
    }
  }

})();

function changeEventHandler(event) {
  const currentColor = document.getElementById('currentColor');
  currentColor.style.backgroundColor = event.target.value;
  console.log(currentColor.style.backgroundColor);
}

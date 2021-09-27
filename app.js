const board = document.querySelector('#board');
const colors = ['#EAF4DB', '#067420', '#538B04', '#E41BE2', '#1357D4', '#0FED3A', '#ED0F8C', '#E6F706']
const SQUEARS_NUMBER = 110;


for (let i = 0; i < SQUEARS_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square))
    
    square.addEventListener('mouseleave', () => 
        removeColor(square))
    
    board.append(square)
}


function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#350538';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const blackInkButton = document.querySelector('.black');
const rainbowInkButton = document.querySelector('.rainbow');
const gridSize = document.querySelector('.grid');
let gridNum;


// Function to store a user inputted number < 100 to change grid. 
const storeGrid = () => {

    while (true) {
        gridNum = prompt('Please type a number less than 100 to change grid size');

        if (isNaN(gridNum) || gridNum > 100) {
            alert('Please enter a valid number less than 100');
        } else {

            return gridNum;
        }
    }
}

// Event Listener to change grid size after pushing button 
gridSize.addEventListener('click', () => {
    container.innerHTML = '';
    const storedGrid = storeGrid();

    for (let i = 0; i < storedGrid; i++) {
        const row = document.createElement('div');
        row.classList.add('box');
        container.append(row);
        container.style.gridTemplateRows = `repeat(${storedGrid}, 1fr)`;
    }

    for (let i = 0; i < storedGrid; i++) {
        for (let j = 0; j < storedGrid; j++) {

            const column = document.createElement('div');
            column.classList.add('box');
            container.append(column);
            container.style.gridTemplateColumns = `repeat(${storedGrid}, 1fr)`;
        }
    }

    addBlackListener();
})

// Function to make a 16x16 grid.
const makeColumns = () => {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {

            const column = document.createElement('div');
            column.classList.add('box');
            container.append(column);
        }
    }
}

// Function to reset the grid back to 16 x 16.
const resetGrid = () => {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.style.gridTemplateRows = `repeat(16, 1fr)`;
    makeColumns();
}

// Click event listener to reset the grid and start again at 16x16 with black ink. 
resetButton.addEventListener('click', () => {
    resetGrid();
    addBlackListener();
});

// Function to fill each box with a black background.
const blackBoxes = (e) => {
    e.target.style.backgroundColor = 'black';
}

// Function to fill each box with a random background color. 
const coloredBoxes = (e) => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `rgb(${r}, ${g}, ${b}`;
    e.target.style.backgroundColor = color;
};

// Function to remove all event listeners within the container to reset grid properly.
const removeListeners = () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.removeEventListener('mouseenter', blackBoxes);
        box.removeEventListener('mouseenter', coloredBoxes);
    });
};

// Event listener to add the black ink for each box when mouse enters the box.
const addBlackListener = () => {

    removeListeners();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        box.addEventListener('mouseenter', blackBoxes)
    });
}

// Event listener to add the rainbow ink for each box when mouse enters the box.
const addColoredListener = () => {

    removeListeners();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', coloredBoxes);
    });
};

// Click listener to change the color of rainbow when used for the grid.
rainbowInkButton.addEventListener('click', () => {
    addColoredListener();
});

// Click listener to change the color of black when used for the grid.
blackInkButton.addEventListener('click', () => {
    addBlackListener();
})
// Functions called to start the project. 
makeColumns();
addBlackListener();
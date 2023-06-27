const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const blackInkButton = document.querySelector('.black');
const rainbowInkButton = document.querySelector('.rainbow');
let currentListener = null;

const makeRows = () => {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('box');
        container.append(row);
    }
}

const makeColumns = () => {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {

            const column = document.createElement('div');
            column.classList.add('box');
            container.append(column);
        }
    }
}

resetButton.addEventListener('click', () => {
    container.innerHTML = '';
    makeRows();
    makeColumns();
    addBlackListener();
});

const blackBoxes = (e) => {
    e.target.style.backgroundColor = 'black';
}

const removeListeners = () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.removeEventListener('mouseenter', blackBoxes);
        box.removeEventListener('mouseenter', coloredBoxes);
    });
};

const coloredBoxes = (e) => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `rgb(${r}, ${g}, ${b}`;
    e.target.style.backgroundColor = color;
};

const addBlackListener = () => {

    removeListeners();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        box.addEventListener('mouseenter', blackBoxes)
    });
}

const addColoredListener = () => {

    removeListeners();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', coloredBoxes);
    });
};

rainbowInkButton.addEventListener('click', () => {
    addColoredListener();
});

blackInkButton.addEventListener('click', () => {
    addBlackListener();
})

makeRows();
makeColumns();
addBlackListener();
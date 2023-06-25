
const container = document.querySelector('.container');

// for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//         const div = document.createElement('div');
//         container.append(div);
//     }
// }
const makeRows = () => {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.textContent = 'test'
        container.append(row);
    }
}

const makeColumns = () => {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {

            const column = document.createElement('div');
            column.classList.add('column');
            column.textContent = 'okay'
            container.append(column);
        }
    }
}

makeRows();
makeColumns();
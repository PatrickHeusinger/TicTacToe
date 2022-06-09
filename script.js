let storage = [];

let currentShape = 'cross';


function fillShape(id) {
    if (currentShape == 'cross') {
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }
    storage[id] = currentShape;
    console.log(storage);
    draw();
}


function draw() {
    for (let i = 0; i < storage.length; i++) {
        if (storage[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove(d - none);
        }
        if (storage[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove(d - none);
        }
    }
}
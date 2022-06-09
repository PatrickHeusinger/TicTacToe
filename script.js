let storage = [];

let currentShape = 'cross';


function fillShape(id) {
    if (currentShape == 'cross') {
        currentShape = 'circle';
        document.getElementById('player-1').classList.remove('player-inactiv');
        document.getElementById('player-2').classList.add('player-inactiv');
    } else {
        currentShape = 'cross';
        document.getElementById('player-2').classList.remove('player-inactiv');
        document.getElementById('player-1').classList.add('player-inactiv');
    }
    storage[id] = currentShape;
    console.log(storage);
    draw();
}


function draw() {
    for (let i = 0; i < storage.length; i++) {
        if (storage[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (storage[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkWinner() {
    let winner;

    if (storage[0] == storage[1] && storage[1] == storage[2] && storage[0]) {
        winner = storage[0];
    }
    if (storage[3] == storage[4] && storage[4] == storage[5] && storage[3]) {
        winner = storage[3];
    }
    if (storage[6] == storage[7] && storage[7] == storage[8] && storage[6]) {
        winner = storage[6];
    }
    if (storage[0] == storage[3] && storage[3] == storage[6] && storage[0]) {
        winner = storage[0];
    }
    if (storage[1] == storage[4] && storage[4] == storage[7] && storage[1]) {
        winner = storage[1];
    }
    if (storage[2] == storage[5] && storage[5] == storage[8] && storage[2]) {
        winner = storage[2];
    }
    if (storage[0] == storage[4] && storage[4] == storage[8] && storage[0]) {
        winner = storage[0];
    }
    if (storage[2] == storage[4] && storage[4] == storage[6] && storage[2]) {
        winner = storage[2];
    }
    if (!!winner) {
        console.log('Gewonnen:', winner);
    }

}
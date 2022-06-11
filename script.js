let storage = [];
let gameOver = false;
let currentShape = 'cross';


function fillShape(id) {
    if (!storage[id] && !gameOver) {
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
        draw();
        checkWinner();

    }

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
        document.getElementById('line-1').style.transform = 'scaleX(1.0)';
        document.getElementById('line-1').classList.remove('d-none');
    }
    if (storage[3] == storage[4] && storage[4] == storage[5] && storage[3]) {
        winner = storage[3];
        document.getElementById('line-2').style.transform = 'scaleX(1.0)';
        document.getElementById('line-2').classList.remove('d-none');
    }
    if (storage[6] == storage[7] && storage[7] == storage[8] && storage[6]) {
        winner = storage[6];
        document.getElementById('line-3').style.transform = 'scaleX(1.0)';
        document.getElementById('line-3').classList.remove('d-none');
    }
    if (storage[0] == storage[3] && storage[3] == storage[6] && storage[0]) {
        winner = storage[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1.0)';
        document.getElementById('line-4').classList.remove('d-none');
    }
    if (storage[1] == storage[4] && storage[4] == storage[7] && storage[1]) {
        winner = storage[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1.0)';
        document.getElementById('line-5').classList.remove('d-none');
    }
    if (storage[2] == storage[5] && storage[5] == storage[8] && storage[2]) {
        winner = storage[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1.0)';
        document.getElementById('line-6').classList.remove('d-none');
    }
    if (storage[0] == storage[4] && storage[4] == storage[8] && storage[0]) {
        winner = storage[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.0)';
        document.getElementById('line-7').classList.remove('d-none');
    }
    if (storage[2] == storage[4] && storage[4] == storage[6] && storage[2]) {
        winner = storage[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1.0)';
        document.getElementById('line-8').classList.remove('d-none');
    }
    if (!!winner) {
        gameOver = true;
        setTimeout(function() {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart').classList.remove('d-none');
        }, 1000);

    }

}

function restart() {
    gameOver = false;
    storage = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart').classList.add('d-none');

    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }



}
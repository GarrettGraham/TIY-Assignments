var board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r']];

console.log(board.join('\n') + '\n\n');

// Move the king's pawn forward 2
//board[4][4] = board[6][4];
//board[6][4] = ' ';
//console.log(board.join('\n'));


function print(board) {
    console.log(board.join('\n') + '\n\n')
}

function move(fromY, fromX, toY, toX) {
    board[toY][toX] = board[fromY][fromX];
    board[fromY][fromX] = ' ';
    print(board);
}


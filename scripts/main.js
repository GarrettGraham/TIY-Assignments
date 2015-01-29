var _ = require('lodash');

var board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r']];

function print(board){
  // Before any rows are printed, print the `<table>`...
  console.log('<table class="chessboard"><tbody><tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th>');

  _.forEach(board, function(row, rank){

      // Before any cells are printed...

      _.forEach(row, function(square, file){

          // In here, we have `rank`, `file`, and `square`...

      }); // END foreach(row)

      // After all the cells are printed...

  }); // END foreach(board)

  // After all the rows are printed...
  console.log('</table> <!-- .chessboard -->');
} // END print


//console.log(board.join('\n') + '\n\n');

// Move the king's pawn forward 2
//board[4][4] = board[6][4];
//board[6][4] = ' ';
//console.log(board.join('\n'));


//function print(board) {
//    console.log(board.join('\n') + '\n\n')
//}
//
//function move(fromY, fromX, toY, toX) {
//    board[toY][toX] = board[fromY][fromX];
//    board[fromY][fromX] = ' ';
//    print(board);
//}
//
//function move(8, 4, 7, 6); 

document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row:0, col:0, isMine: false, hidden: true},
    {row:0, col:1, isMine: false, hidden: true},
    {row:0, col:2, isMine: true, hidden: true},   
    {row:1, col:0, isMine: false, hidden: true},
    {row:1, col:1, isMine: false, hidden: true},
    {row:1, col:2, isMine: true, hidden: true},
    {row:2, col:0, isMine: true, hidden: true},
    {row:2, col:1, isMine: false, hidden: true},
    {row:2, col:2, isMine: false, hidden: true},       
  ]
}


/*let cellsObj = board["cells"]; --- referres to each object element of the array
for(let i = 0, len=cellsObj.length; i<len; i++) console.log(cellObj[1]) will return the array objects or elements
console.log(cellsObj[i["row"]] for individual properties
for (i = 0; i < board.cells.length; i++) {
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  // magic statement stuff happens here presumably
*/
var cell = board['cells'];

function startGame () {
  // write a loop to loop through board.cells to call countSurroundingMines
  // for each cell in board.cells 
  for(var i=0; i<cell.length; i++){

     cell[i].surroundingMines = countSurroundingMines(cell[i]);
  }
//   addEventListener() sets up a function that will be called whenever the specified event is delivered  
  document.addEventListener("left-click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}



// Define this function to look for a win condition:
// check for hidden, isMarked and isMine
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
//   create new array of cells still left unopened
var cellsLeft=cell.filter(function(cell){
  return cell.isMine && !cell.isMarked    // cell is unmarked mine
})
// if the length of this new array is more than 0 the game needs to continue ie return or exit function
if(cellsLeft.length>0){
  return
}
var stillHidden = cell.filter(function(cell){
  return cell.hidden && !cell.isMarked  // cells still hidden and not marked  
})
// is the length of array is more than 0 game hasn't finished, return or exit function
if(stillHidden >0){
  return
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//

  
//
//If I use filter() and get the length for isMine===true It will return cell objects in an array. 
// You should loop through 
// them, counting the number of times `cell.isMine` is true.
//  map() method creates a new array with the results of calling a provided function on every element
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell['row'], cell['col']);
  var mined = 0;
  for(var i=0; i<surrounding.length; i++){
    if(surrounding[i].isMine){
      mined++
    }
  }
  return mined; 
}
 
//  function countSurroundingMines (cell) {
//   var surrounding = lib.getSurroundingCells(cel['row'], cell['col'])
//   return surrounding.filter(function (nextCell) {
//     return nextCell.isMine
//   }).length;
// }   


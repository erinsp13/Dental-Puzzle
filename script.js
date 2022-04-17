//SIMPLE

//TIMER
window.onload = function () {
    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("button-start");
    let Interval;
  
  buttonStart.onclick = function (){
  
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }
  
  
  function startTimer () {
    tens++;
  
    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }
  
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
  
    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = "0";
        appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
  }
  
  }
  //PUZZLE FUNCTION
  function swapTiles(cell1,cell2) {
  let temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
  }
  
  function shuffle() {
  for (let row=1;row<=3;row++) { 
   for (let column=1;column<=3;column++) { 
  
    let row2=Math.floor(Math.random()*3 + 1); 
    let column2=Math.floor(Math.random()*3 + 1); 
     
    swapTiles("cell"+row+column,"cell"+row2+column2); 
  } 
  } 
  }
  
  function clickTile(row,column) {
  let cell = document.getElementById("cell"+row+column);
  let tile = cell.className;
  if (tile!="tile9") { 
       
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
      
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       } 
  }
  
  }
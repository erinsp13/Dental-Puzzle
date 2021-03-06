//TIMER
class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset")
    };

    this.interval = null;
    this.remainingSeconds = 120;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });

    this.el.reset.addEventListener("click", () => {
    const inputMinutes = prompt("Enter number of minutes:");

      if (inputMinutes < 60) {
      this.stop();
      this.remainingSeconds = inputMinutes * 60;
      this.updateInterfaceTime();
    }
  });
}

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
      this.el.control.classList.add("timer__btn--start");
      this.el.control.classList.remove("timer__btn--stop");
    } else {
      this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
      this.el.control.classList.add("timer__btn--stop");
      this.el.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateInterfaceControls();
  }

  static getHTML() {
    return `
			<span class="timer__part timer__part--minutes">00</span>
			<span class="timer__part">:</span>
			<span class="timer__part timer__part--seconds">00</span>
			<button type="button" class="timer__btn timer__btn--control timer__btn--start">
				<span class="material-icons">play_arrow</span>
			</button>
			<button type="button" class="timer__btn timer__btn--reset">
				<span class="material-icons">timer</span>
			</button>
      <button id="button-shuffle" onClick="shuffle();">Shuffle</button>
		`;
  }
}

new Timer(
	document.querySelector(".timer")
);

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
// WIN THE GAME
function isFinished(){
const currentTile = document.querySelectorAll(cell);
const currentCellOrder = [...currentCell].map ((p)=> p.className);
if(
  cell.toString() == currentCellOrder.toString()
){
  showModal();
}
}
  const showModal = () => {
    document.getElementsByClassName('.bg-modal').classList.remove("hide");
    console.log(showModal)
  }



//ClOSING MODAL
document.querySelector('.close').addEventListener('click', function() {
document.querySelector('.bg-modal').style.display = 'none';
});

const n = 20;
const array = [];
init();

function init() {
  for (let i = 0; i < n; i++) {
    array[i] = Math.random();
  }
  showBars();
}

function play() {
  const copy = [...array];
  const moves = bubbleSort(copy);
  animate(moves);
}

function animate(moves){
   if(moves.length==0){
    showBars();
    return;
   }
   const [i,j]=moves.shift();
   [array[i],array[j]]=[array[j],array[i]];
   showBars([i,j]);
   setTimeout(function(){
    animate(moves);    
   },120);
}

function bubbleSort(array) {
  const moves = [];
  do {
    var swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        swapped = true;
        moves.push([i - 1, i]);
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
  } while (swapped);
  return moves;
}

function showBars(indices) {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");

    if (indices && indices.includes(i)) {
      bar.style.backgroundColor="red";
    }
    container.appendChild(bar);
  }
}


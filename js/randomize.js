class Randomize {
  constructor() {
    this.rects = document.getElementsByClassName("rect_stroke");
  }

  getRandomHeights(amount_strokes) {
    // Return array of randomized heights in random order
    let heights = [] , max = (110+(5*amount_strokes));

    for(let i=110; i<max; i+=5) {heights.push(i)};

    return heights.sort(() => Math.random() - 0.5); 
  }
    
  Randomize(random_heights) {
    Array.from(this.rects).forEach((rect, ind) => {
      rect.style.height = random_heights[ind] + "px";
    });

    document.getElementById('status').innerHTML = 'Randomized'
  }
}
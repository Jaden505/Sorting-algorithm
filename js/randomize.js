class Randomize {
  constructor(amount_strokes) {
    self.rects = document.getElementsByClassName("rect_stroke");
    self.amount_strokes = amount_strokes;
  }

  getRandomHeights() {
    // Return array of randomized heights in random order
    let heights = [] , max = (110+(5*amount_strokes));

    for(let i=110; i<max; i+=5) {heights.push(i)};

    return heights.sort(() => Math.random() - 0.5); 
  }
    
  Randomize() {
    // Randomize all strokes height
    let random_heights = this.getRandomHeights()

    Array.from(rects).forEach((rect, ind) => {
      rect.style.height = random_heights[ind] + "px";
    });

    // for (let [rect, ind] of rects.entries()) {
    //   rect.height = random_heights[ind] + "px";
    // }

    document.getElementById('status').innerHTML = 'Randomized'
  }
}
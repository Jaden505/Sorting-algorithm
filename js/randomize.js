class Randomize {
  constructor() {
    self.rects = document.getElementsByClassName("rect_stroke");
  }

  getRandomHeights() {
    // Return array of randomized heights in random order
    let heights = [] , max = 50;

    for(let i=110; heights.push(i += 5) <= max;);

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
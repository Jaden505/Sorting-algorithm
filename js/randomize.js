class Randomize {
  constructor() {
    this.rects = document.getElementsByClassName("rect_stroke");
  }

  getRandomHeights(amount_strokes) {
    const height_addition = 490/amount_strokes;

    // Return array of randomized heights in random order
    let heights = [] , max = (main.rect_default_height+(height_addition*amount_strokes));

    for(let i=main.rect_default_height; i<max-1; i+=height_addition) {heights.push(i)};

    return heights.sort(() => Math.random() - 0.5); 
  }
    
  Randomize(random_heights) {
    Array.from(this.rects).forEach((rect, ind) => {
      rect.style.height = random_heights[ind] + "px";
    });
  }
}
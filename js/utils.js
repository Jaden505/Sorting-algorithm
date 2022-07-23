class Utils {
  constructor() {
    this.amount_strokes = 50;

    this.rangeSlider();
  }

  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  rangeSlider() {
    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    let rects = document.getElementById('rects');
  
    output.innerHTML = slider.value;
  
    slider.oninput = function() {
      output.innerHTML = this.value;
      utils.amount_strokes = this.value;
  
      // Recreate the rects
      rects.innerHTML = '';
      disp.createStrokes(this.value)

      // Update svg heights so it fits the screen
      let svgs = document.getElementsByClassName('svg_stroke');
      Array.from(svgs).forEach(svg => {
        svg.style.height = 110 + (this.value*5);        
      });
    }
  }
}

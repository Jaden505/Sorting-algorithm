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
  
      rects.innerHTML = '';
      disp.createStrokes(this.value)
    }
  }
}

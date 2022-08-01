class Utils {
  constructor() {
    this.rangeSliderAmount();
    this.rangeSliderSpeed();
  }

  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  fitRectsWidth(amount) {
      let rects = document.getElementsByClassName('rect_stroke');
      let fit_width = (window.innerWidth*0.7798) / amount;

      Array.from(rects).forEach(rect => {
        rect.parentNode.style.width = fit_width + 'px';
        rect.style.width = fit_width + 'px'; 
      });
  }

  rangeSliderAmount() {
    let slider = document.getElementById("amountRange");
    let output = document.getElementById("arrSize");
  
    output.innerHTML = slider.value;
  
    slider.oninput = function() {
      output.innerHTML = this.value;
      main.amount_strokes = this.value;
  
      // Recreate the rects
      disp.createStrokes(this.value)
      utils.fitRectsWidth(this.value);
    }
  }

  rangeSliderSpeed() {
    let slider = document.getElementById("speedRange");
    let output = document.getElementById("sortSpeed");
  
    output.innerHTML = slider.value;
  
    slider.oninput = function() {
      output.innerHTML = this.value;
      main.sort_speed = 101-this.value;
    }
  }
}

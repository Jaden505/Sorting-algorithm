class Display {
  constructor() {
    self.red_style = "fill:rgb(255,0,0);stroke-width:1;stroke:rgb(0,0,0)";
    self.green_style = "fill:rgb(0,255,0);stroke-width:1;stroke:rgb(0,0,0)";
    self.white = "fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)";

    self.rects = document.getElementsByClassName("rect_stroke")
  }

  async Analyse() {
    document.getElementById('status').innerHTML = 'Analyzing';

    for (let rect of rects) {
      rect.style.fill = "rgb(255,0,0)";

      await sleep(10);
    }

    for (let rect of rects) {
      rect.style = self.white;
    }
  }

  async Sorted() {
    for (let rect of rects) {
      rect.style.fill = "rgb(0,255,0)";
      
      await sleep(10);
    }

    for (let rect of rects) {
      rect.style.fill = "white";
    }

    document.getElementById('status').innerHTML = 'Sorted';
  }

  createStrokes(strokes_count) {
    let rect = `<svg class="svg_stroke">
                  <rect width="10" height="110" class="rect_stroke"/>
                </svg>`

    for (let i = 0; i<strokes_count; i++) {
      document.getElementById('rects').insertAdjacentHTML('afterbegin', rect)
    }
  }

}
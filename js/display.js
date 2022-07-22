class Display {
  constructor() {
    self.red = "rgb(255,0,0)";
    self.green = "rgb(0,255,0)";
    self.white = "rgb(255,255,255)";

    self.rects = document.getElementsByClassName("rect_stroke")
  }

  async Analyse() {
    document.getElementById('status').innerHTML = 'Analyzing';

    for (let rect of rects) {
      rect.style.fill = self.red;

      await sleep(10);
    }

    for (let rect of rects) {
      rect.style.fill = self.white;
    }

    document.getElementById('status').innerHTML = 'Sorting';
  }

  async Sorted() {
    document.getElementById('status').innerHTML = 'Sorted';

    for (let rect of rects) {
      rect.style.fill = self.green;

      await sleep(10);
    }

    for (let rect of rects) {
      rect.style.fill = self.white;
    }
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
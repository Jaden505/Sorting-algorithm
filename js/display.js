class Display {
  constructor() {
    this.red = "rgb(255,0,0)";
    this.green = "rgb(0,255,0)";
    this.white = "rgb(255,255,255)";

    this.rects = document.getElementsByClassName("rect_stroke")
  }

  async Analyse() {
    document.getElementById('status').innerHTML = 'Analyzing';

    for (let rect of this.rects) {
      rect.style.fill = this.red;

      await utils.sleep(10);
    }

    for (let rect of this.rects) {
      rect.style.fill = this.white;
    }

    document.getElementById('status').innerHTML = 'Sorting';
  }

  async Sorted() {
    document.getElementById('status').innerHTML = 'Sorted';

    for (let rect of this.rects) {
      rect.style.fill = this.green;

      await utils.sleep(10);
    }

    for (let rect of this.rects) {
      rect.style.fill = this.white;
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
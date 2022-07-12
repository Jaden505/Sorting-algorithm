
async function Analyzing() {
    document.getElementById('status').innerHTML = 'Analyzing';

    for (const rcty of y) {
      rcty.style = 'fill:rgb(255,0,0);stroke-width:1;stroke:rgb(0,0,0)';
      await sleep(10);
    }

    for (const rcty of y) {
      rcty.style = 'fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)';
    }
  }

async function Sorted() {
    for (const rcty of y) {
      rcty.style = 'fill:rgb(0,255,0);stroke-width:1;stroke:rgb(0,0,0)';
      await sleep(10);
    }

    for (const rcty of y) {
      rcty.style = 'fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)';
    }

    document.getElementById('status').innerHTML = 'Sorted';
  }

  function CreateRects() {
    elem = `<svg width="10" id="rectup">
            <rect width="10" id="rectdown" style="fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)"/>
          </svg>`
    for (let i = 0; i < 100; i++) {
      document.getElementById('rects').insertAdjacentHTML('afterbegin', elem)
    }
  }
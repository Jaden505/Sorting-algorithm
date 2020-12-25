function CreateRects() {
  elem = `<svg width="10" id="rectup">
          <rect width="10" id="rectdown" style="fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)"/>
        </svg>`
  for (let i = 0; i < 100; i++) {
    document.getElementById('rects').insertAdjacentHTML('afterbegin', elem)
  }
}

CreateRects()

let x = document.querySelectorAll("#rectup");
let y = document.querySelectorAll("#rectdown");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function GetRandomHeights() {
  random_heights = []

  for (let i = 10; i < 110; i++) {
    random_heights.push(i);
  }

  return random_heights
}

function Randomize() {
  random_heights = GetRandomHeights()

  for (const rctx of x) {
    let random_nr = random_heights[Math.floor(Math.random() * random_heights.length)];
    rctx.style.height = random_nr
    random_heights.splice(random_heights.indexOf(random_nr), 1);
  }

  document.getElementById('status').innerHTML = 'Randomized'
}

async function Sort() {
  Analyzing()

  await sleep(1000)

  number = 10

  document.getElementById('status').innerHTML = 'Sorting';

  for (let z = 0; z < 100; z++) {
  for (rctx of x) {
      if (rctx.style.height == number + 'px') {
        ordered_rect = x[number-10]
        replacement_rect = rctx.style.height
        ordered_replacement = ordered_rect.style.height

        // console.log(rctx.style.height, ordered_rect.style.height)

        ordered_rect.style.height = replacement_rect
        rctx.style.height = ordered_replacement

        number += 1
        await sleep(50)
        }
    }
  }
  Sorted()
}

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


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
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
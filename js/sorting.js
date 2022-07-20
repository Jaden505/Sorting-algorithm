class QuickSort {
  constructor() {
    self.rects = document.getElementsByClassName("rect_stroke");
  }

  getHeights() {
    return Array.from(rects).map(rect => parseInt(rect.style.height, 10));
  }

  async Sort(heights) {
    if (heights.length <= 1) {
      return heights;
    }

    let pivot = heights[0];

    let left = [];
    let right = [];

    for (let i=1; i<heights.length; i++) {
      // heights[i] < pivot ? left.push(heights[i]) : right.push(heights[i])

      // If left
      if (heights[i] < pivot) { 
        left.push(heights[i])

        this.displaySorting(pivot, heights[i], 'left')
      }
      // If right
      else { 
        right.push(heights[i])

        this.displaySorting(pivot, heights[i], 'right')
      }

      await new Promise(r => setTimeout(r, 30));
    }
    
    return this.Sort(left).concat(pivot, this.Sort(right)); 
  }

  insertAfter(parent_node, newNode, referenceNode) {
    parent_node.insertBefore(newNode, referenceNode.nextSibling);
}

  displaySorting(pivot_height, rect_height, pos) { 
    let pivot = Array.from(rects).find(rect => parseInt(rect.style.height, 10) == pivot_height);
    let rect = Array.from(rects).find(rect => parseInt(rect.style.height, 10) == rect_height);

    let pivot_index = Array.from(rects).indexOf(pivot);
    let parent_node = document.getElementById('rects');
    
    if (pos == 'left') {
      parent_node.insertBefore(rect.parentNode, Array.from(rects)[pivot_index].parentNode);
    }
    else if (pos == 'right') {
      this.insertAfter(parent_node, rect.parentNode, Array.from(rects)[pivot_index].parentNode);
    }
  }
}
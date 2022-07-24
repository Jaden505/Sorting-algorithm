class QuickSort extends SortController {
  constructor() {
    super();
  }

   async Sort(heights) {
    if (heights.length <= 1) {
      return heights;
    }

    let pivot = heights[0];

    let left = [];
    let right = [];

    for (let i=1; i<heights.length; i++) {
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

      await utils.sleep(30);
    }

    return Array(await this.Sort(left)).concat(pivot, await this.Sort(right));
  }

  displaySorting(pivot_height, rect_height, pos) { 
    let pivot = Array.from(this.rects).find(rect => parseInt(rect.style.height, 10) == pivot_height);
    let rect = Array.from(this.rects).find(rect => parseInt(rect.style.height, 10) == rect_height);

    let pivot_index = Array.from(this.rects).indexOf(pivot);
    
    if (pos == 'left') {
      this.parent_node.insertBefore(rect.parentNode, Array.from(this.rects)[pivot_index].parentNode);
    }
    else if (pos == 'right') {
      this.insertAfter(this.parent_node, rect.parentNode, Array.from(this.rects)[pivot_index].parentNode);
    }
  }
}
class InsertionSort extends SortController {
    constructor() {
        super();
    }
    
    async Sort(heights) {
        for (let i = 1; i < heights.length; i++) {
            let key = heights[i];
            let j = i - 1;
            while (j >= 0 && heights[j] > key) {
                heights[j+1] = heights[j];

                j -= 1;
            }
            await this.displaySorting(heights[j+1], key)

            heights[j+1] = key;
        }

        return heights;
    }
  
    async displaySorting(key, left_key) { 
        await utils.sleep(main.sort_speed);

        let left_key_elem = Array.from(this.rects).find(rect => parseInt(rect.style.height, 10) == left_key);
        let key_elem = Array.from(this.rects).find(rect => parseInt(rect.style.height, 10) == key);

        this.parent_node.insertBefore(left_key_elem.parentNode, key_elem.parentNode);
    }
  }
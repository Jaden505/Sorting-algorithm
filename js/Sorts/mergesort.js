class MergeSort extends SortController {
    constructor() {
        super();
    }

    async Sort(heights) {
        if (heights.length <= 1) {
            return heights;
        }
        
        const middle = Math.floor(heights.length / 2);
        const left = heights.slice(0, middle);
        const right = heights.slice(middle);

        // Using recursion to combine the left and right
        return this.merge(
            heights, heights[middle],
            await this.Sort(left),
            await this.Sort(right)
        );
    }
    
    async merge (heights, middle, left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;
        
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) { 
                if (resultArray.length != 0) {
                    await this.displaySorting(left[leftIndex], resultArray[resultArray.length -1])
                } else {
                    await this.displaySorting(left[leftIndex], middle, true)
                }

                resultArray.push(left[leftIndex]);
                leftIndex++;
            } 
            
            else {
                if (resultArray.length != 0) {
                    await this.displaySorting(left[leftIndex], resultArray[resultArray.length -1])
                } else {
                    await this.displaySorting(left[leftIndex], heights[heights.length -1], true)
                }

                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
        }
        
        return resultArray
                .concat(left.slice(leftIndex))
                .concat(right.slice(rightIndex));
    }

    async displaySorting(pivot_height, target_height, insert_before=false) {
        await utils.sleep(main.sort_speed);

        let pivot_rect = Array.from(this.rects).find(rect => parseInt(rect.style.height, 10) == pivot_height);
        let target_rect = Array.from(this.rects).find(rect => parseInt(rect.style.height, 10) == target_height);


        if (insert_before) {
            this.parent_node.insertBefore(pivot_rect.parentNode, target_rect.parentNode);
        }
        else {
            this.insertAfter(this.parent_node, pivot_rect.parentNode, target_rect.parentNode);
        }
    }
}
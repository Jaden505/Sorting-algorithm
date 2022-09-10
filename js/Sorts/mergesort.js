class MergeSort extends SortController {
    constructor() {
        super();

        this.main_heights = this.getHeights();
    }

    async Sort(heights) {
        if (heights.length <= 1) {
            return heights;
        }
        
        let middle = Math.floor(heights.length / 2);

        const left = heights.slice(0, middle);
        const right = heights.slice(middle);


        // Using recursion to combine the left and right
        return await this.merge(
            heights[middle],
            await this.Sort(left),
            await this.Sort(right)
        );
    }
    
    async merge (middle, left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;
        
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] > right[rightIndex]) {                 
                resultArray.push(left[leftIndex]);
                await this.displaySorting(left[leftIndex], middle)

                leftIndex++;
            } 
            
            else {
                resultArray.push(right[rightIndex]);
                await this.displaySorting(right[rightIndex], middle)
                
                rightIndex++;
            }
        }

        return resultArray
                .concat(left.slice(leftIndex))
                .concat(right.slice(rightIndex));
    }

    async displaySorting(pivot_height, target_height) {
        await utils.sleep(main.sort_speed);

        Array.from(this.rects).forEach((rect, ind) => {
            if (rect.style.height != this.main_heights[ind]) {rect.style.height = this.main_heights[ind]}
        });

        this.main_heights = this.getHeights()
    }
}
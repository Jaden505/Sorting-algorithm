class SelectionSort extends SortController {
    constructor() {
        super();
    }

    async Sort(heights) {
        const selectionSort = async array => {
            const arr = Array.from(array);
            
            for (let i = 0; i < arr.length - 1; i++) {
              let minPos = i;

              for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minPos]) {
                    minPos = j;
                }
              }

              if (i !== minPos) {
                [arr[i], arr[minPos]] = [arr[minPos], arr[i]];

                await utils.sleep(30);
                this.displaySorting(arr[minPos], arr[i]);
              }
            }
            return arr;
          };
          
          console.log(await selectionSort(heights));
    }

    displaySorting(key_height, min_key_height) {
        console.log(key_height, min_key_height)

        let key = Array.from(this.rects).find(rect => parseInt(rect.style.height, 10) == key_height);
        let min_key = Array.from(this.rects).find(rect => parseInt(rect.style.height, 10) == min_key_height);

        // this.parent_node.insertBefore(min_key.parentNode, key.parentNode);
        key.style.height = min_key_height;
        min_key.style.height = key_height;
    }
}
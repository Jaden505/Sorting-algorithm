class Main {
    constructor() {
        // Init classes
        self.disp = new Display();
        self.rand = new Randomize();
        self.sorting = new QuickSort();

        self.amount_strokes = 50;

        // Call startup functions
        disp.createStrokes(amount_strokes)        
        this.Listeners()
    }

    Listeners() {
        // Buttons
        let randomize_button = document.getElementById('randomize');
        let quicksort_button = document.getElementById('quickSort');

        // Listeners for button click
        randomize_button.addEventListener('click', function() {
            rand.Randomize();
        });
        quicksort_button.addEventListener('click', async function() {
            await disp.Analyse();

            let rect_heights = await sorting.getHeights();
            
            await sorting.Sort(rect_heights);

            await disp.Sorted();
        });
    }
}

const m = new Main();


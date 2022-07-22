class Main {
    constructor() {
        self.amount_strokes = 50;

        // Init classes
        self.disp = new Display();
        self.rand = new Randomize(amount_strokes);
        self.qs  = new QuickSort();
        self.is = new InsertionSort();

        // Call startup functions
        disp.createStrokes(amount_strokes)        
        this.Listeners()
    }

    Listeners() {
        // Buttons
        let randomize_button = document.getElementById('randomize');
        let quicksort_button = document.getElementById('quickSort');
        let insertionsort_button = document.getElementById('insertionSort');

        // Listeners for button click
        randomize_button.addEventListener('click', function() {
            rand.Randomize();
        });

        quicksort_button.addEventListener('click', async function() {
            await disp.Analyse();
            await qs.Sort(qs.getHeights());
            // await disp.Sorted();
        });
        insertionsort_button.addEventListener('click', async function() {
            await disp.Analyse();
            await is.Sort(is.getHeights());
            // await disp.Sorted();
        });
    }
}

const m = new Main();


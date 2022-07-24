class Main {
    constructor() {
        // Init classes
        self.utils = new Utils();
        self.disp = new Display();
        self.rand = new Randomize();
        self.qs  = new QuickSort();
        self.is = new InsertionSort();
        self.ss = new SelectionSort();

        // Call startup functions
        disp.createStrokes(utils.amount_strokes);
        this.Listeners();
    }

    Listeners() {
        // Buttons
        let randomize_button = document.getElementById('randomize');
        let quicksort_button = document.getElementById('quickSort');
        let insertionsort_button = document.getElementById('insertionSort');
        let selectionsort_button = document.getElementById('selectionSort');

        // Listeners for button click
        randomize_button.addEventListener('click', function() {
            let heights = rand.getRandomHeights(utils.amount_strokes);

            rand.Randomize(heights);
        });

        quicksort_button.addEventListener('click', async function() {
            await disp.Analyse();
            await qs.Sort(qs.getHeights());
            await disp.Sorted();
        });

        insertionsort_button.addEventListener('click', async function() {
            await disp.Analyse();
            await is.Sort(is.getHeights());
            await disp.Sorted();
        });

        selectionsort_button.addEventListener('click', async function() {
            await disp.Analyse();
            await ss.Sort(ss.getHeights());
            await disp.Sorted();
        });
    }
}

const m = new Main();


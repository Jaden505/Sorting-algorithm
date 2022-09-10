class Main {
    constructor() {
        // Init classes
        self.utils = new Utils();
        self.disp = new Display();
        self.rand = new Randomize();
        self.sc = new SortController();
        self.qs  = new QuickSort();
        self.is = new InsertionSort();
        self.ss = new SelectionSort();
        self.ms = new MergeSort();

        // Set variables used in other files
        this.rect_default_height = 110;
        this.amount_strokes = document.getElementById('amountRange').value;
        this.sort_speed = document.getElementById('speedRange').value;

        // Call startup functions
        disp.createStrokes(this.amount_strokes);
        utils.fitRectsWidth(this.amount_strokes)
        this.Listeners();
    }

    Listeners() {
        // Buttons
        let randomize_button = document.getElementById('randomize');
        let run_button = document.getElementById('run');
        let reset_button = document.getElementById('reset');
        let sortings = document.getElementById('sortings');

        // Listener for run button
        run_button.addEventListener('click', async function() {
            let sort_type = sortings.value;
            let heights = sc.getHeights();

            await disp.Analyse();

            switch (sort_type) {
                case 'Quick Sort':
                    await qs.Sort(heights);
                    break;
                case 'Insertion Sort':
                    await is.Sort(heights);
                    break;  
                case 'Selection Sort':
                    await ss.Sort(heights);
                    break;
                case 'Merge Sort':
                    await ms.Sort(heights);
                    break;
            }

            await disp.Sorted();
        });

        // Listener for reset button
        reset_button.addEventListener('click', function() {
                // Reset slider
                document.getElementById('amountRange').value = 200; 
                document.getElementById('arrSize').innerHTML = 200;

            disp.createStrokes(200)}
        );
        
        // Listener for randomize button 
        randomize_button.addEventListener('click', function() {
            let heights = rand.getRandomHeights(this.amount_strokes);

            rand.Randomize(heights);
        }.bind(this));

        // Listener for window size change to adjust widths of the strokes
        window.onresize = () => utils.fitRectsWidth(main.amount_strokes);
    }
}

const main = new Main();


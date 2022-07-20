class Main {
    constructor() {
        // Init classes
        self.disp = new Display();
        self.rand = new Randomize();
        self.sorting = new Sort();

        self.amount_strokes = 50;
    }

    Listeners() {
        // Buttons
        let randomize_button = document.getElementById('randomize');

        // Listeners for button click
        randomize_button.addEventListener('click', function() {
            rand.Randomize();
        });
    }
}

const m = new Main();

m.Listeners()

m.disp.createStrokes(amount_strokes)

m.sorting.quickSort()
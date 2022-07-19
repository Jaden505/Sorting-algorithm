let disp = new Display();
let rand = new Randomize();

disp.createStrokes(50)

let randomize_button = document.getElementById('randomize');

randomize_button.addEventListener('click', function() {
    rand.Randomize();
});
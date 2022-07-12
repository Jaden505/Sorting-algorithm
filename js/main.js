function createStrokes(amount) {
    for (let i=0; i<amount; i++) {
        const svg = document. createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute ("width", "20" );
        svg.setAttribute ("height", "100" );

        const rect = document. createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute ("width", "20" );
        svg.setAttribute ("height", "100" );
        svg.setAttribute ("style", "fill: white;")

        svg.appendChild(rect)

        document.appendChild(svg);
    }
}

createStrokes(1)
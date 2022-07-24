class SortController {
    constructor() {
        this.rects = document.getElementsByClassName("rect_stroke");
        this.parent_node = document.getElementById('rects');
    }

    getHeights() {
        return Array.from(this.rects).map(rect => parseInt(rect.style.height, 10));
    }

    insertAfter(parent_node, newNode, referenceNode) {
        parent_node.insertBefore(newNode, referenceNode.nextSibling);
    }
}
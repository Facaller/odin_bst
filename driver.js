import { Tree } from "./bst.js";

export class Driver {
    constructor () {
        this.tree = new Tree(this.getRandomNumbers());
    }

    getRandomNumbers () {
        const numbers = [];
        for (let i = 0; i < 13; i++) {
            numbers.push(Math.floor(Math.random() * 100));
        }
        return numbers;
    }
    
    testBST () {
        const tree = this.tree;
        console.log("Created Tree with numbers:", tree.array);
        console.log("Is the tree balanced?", this.tree.isBalanced());
    }
}


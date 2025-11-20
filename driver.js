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
        console.log("Pre order print:");
        this.tree.preOrderForEach(node => {console.log(node);});
        console.log("Post order print:");
        this.tree.postOrderForEach(node => {console.log(node);});
        console.log("In order print:");
        this.tree.inOrderForEach(node => {console.log(node);});
        console.log("Insert value 199", this.tree.insert(199));
        console.log("Insert value 136", this.tree.insert(136));
        console.log("Insert value 153", this.tree.insert(153));
        console.log("Insert value 107", this.tree.insert(107));
        console.log("Is the tree balanced?", this.tree.isBalanced());
        console.log("Rebalance the tree", this.tree.reBalance());
        console.log("Is the tree balanced?", this.tree.isBalanced());
        console.log("Pre order print:");
        this.tree.preOrderForEach(node => {console.log(node);});
        console.log("Post order print:");
        this.tree.postOrderForEach(node => {console.log(node);});
        console.log("In order print:");
        this.tree.inOrderForEach(node => {console.log(node);});
        console.log("Delete value 199", this.tree.deleteItem(199));
        console.log("Delete value 136", this.tree.deleteItem(136));
        console.log("Delete value 153", this.tree.deleteItem(153));
        console.log("Delete value 107", this.tree.deleteItem(107));
        console.log("Is the tree balanced?", this.tree.isBalanced());
        console.log("Rebalance the tree", this.tree.reBalance());
        console.log("Is the tree balanced?", this.tree.isBalanced());
        console.log("Pre order print:");
        this.tree.preOrderForEach(node => {console.log(node);});
        console.log("Post order print:");
        this.tree.postOrderForEach(node => {console.log(node);});
        console.log("In order print:");
        this.tree.inOrderForEach(node => {console.log(node);});
    }
}


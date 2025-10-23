class Node {
    constructor (data) {
        this.data  = data;
        this.left  = null;
        this.right = null;
    }
}

class Tree {
    constructor (array) {
        this.array = array;
        this.root  = this.buildTree(this.cleanArray(array));
    }

    cleanArray (array) {
        let cleanArray = array;

        cleanArray = new Set(cleanArray);
        cleanArray = Array.from(cleanArray);
        cleanArray.sort((a, b) => a - b);

        return cleanArray;
    }

    buildTree (array, start, end) {
        if (start > end) return null;
        
        let mid = Math.floor((start + end) / 2);
        let value = array[mid];
        const rootNode = new Node(value);
        
        rootNode.left = this.buildTree(array, start, mid - 1);
        rootNode.right = this.buildTree(array, mid + 1, end);
        
        return rootNode;
    }

    insert (value) {
        const root = this.root;
        if (value === root) return;

        if (value > root.data) {
            
        }
    }
}
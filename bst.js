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
        this.root  = this.buildTree(this.cleanArray(array), 0, this.cleanArray(array).length - 1);
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

    insert (value, node = this.root) {
        if (value === node.data) return;
        if (node === null) return new Node (value);

        if (node.left === null && value < node.data) {
            node.left = new Node(value);
            return;
        }
        if (node.right === null && value > node.data) {
            node.right = new Node(value);
            return;
        }

        if (value < node.data) {
            this.insert(value, node.left)
        } else if (value > node.data) {
            this.insert(value, node.right)
        }
    }
// delete from parent, not the node itself. So we need a reference to the parent
    deleteItem (value, node = this.root, parent = null) {
        if (node === null) return null;
        let tempNode = null;
        
        if (value === node.data) {
            if (node.left === null && node.right === null) {
                if (parent.left === node) {
                    parent.left = null;
                } else {
                    parent.right = null
                }
                return;
            }

            if (node.left === null || node.right === null) {
                tempNode = node.left || node.right;
                
                if (parent.left === node) {
                    parent.left = tempNode;
                } else {
                    parent.right = tempNode
                }
                return;
            }

            
        }

        if (value < node.data) {
            this.deleteItem(value, node.left, node)
        }
        if (value > node.data) {
            this.deleteItem(value, node.right, node)
        }
    }
}
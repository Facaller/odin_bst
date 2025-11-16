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

    deleteItem (value, node = this.root, parent = null) {
        if (node === null) return null;
        let tempNode = null;
        const isRoot = parent === null;
        
        if (value === node.data) {
            if (node.left === null && node.right === null) {
                if (isRoot) {
                    this.root = null;
                } else {
                    if (parent.left === node) {
                        parent.left = null;
                    } else {
                        parent.right = null
                    }
                }
                return;
            }

            if (node.left === null || node.right === null) {
                tempNode = node.left || node.right;
                
                if (isRoot) {
                    this.root = tempNode;
                } else {
                    if (parent.left === node) {
                        parent.left = tempNode;
                    } else {
                        parent.right = tempNode
                    }
                }
                return;
            }

            tempNode = this.findSuccessor(node);
            node.data = tempNode.data;
            this.deleteItem(tempNode.data, node.right, node)
        }

        if (value < node.data) {
            this.deleteItem(value, node.left, node)
        }
        if (value > node.data) {
            this.deleteItem(value, node.right, node)
        }
    }

    findSuccessor (node) {
        let successor = node.right;
        while (successor && successor.left) {
            successor = successor.left;
        }
        return successor
    }

    find (value, node = this.root) {
        if (value === node.data) return node;
        if (node === null) return null;

        if (value < node.data) {
            return this.find(node.left);
        } else {
            return this.find(node.right);
        }
    }

    levelOrderForEach (callback, node = this.root) {
        if (!callback) throw new Error ('Callback required');
        if (node === null) return null;

        const queue = [];
        queue.push(node);

        while (queue.length !== 0) {
            const current = queue[0];
            callback(current);

            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
            queue.shift();
        }
    }

    inOrderForEach (callback, node = this.root) {
        if (!callback) throw new Error ('Callback required');
        if (node === null) return null;
        
        this.inOrderForEach(callback, node.left);
        callback(node.data);
        this.inOrderForEach(callback, node.right);
    }

    preOrderForEach (callback, node = this.root) {
        if (!callback) throw new Error ('Callback required');
        if (node === null) return null;

        callback(node.data);
        this.preOrderForEach(callback, node.left);
        this.preOrderForEach(callback, node.right);
    }

    postOrderForEach (callback, node = this.root) {
        if (!callback) throw new Error ('Callback required');
        if (node === null) return null;

        this.postOrderForEach(callback, node.left);
        this.postOrderForEach(callback, node.right);
        callback(node.data);
    }

    height (value, node = this.root) {
        if (node === null) return -1;

        if (value === node.data) {
            const leftHeight = this.height(value, node.left);
            const rightHeight = this.height(value, node.right);

            return Math.max(leftHeight, rightHeight) + 1;
        }

        if (value < node.data) return this.height(value, node.left);
        if (value > node.data) return this.height(value, node.right);
        return null;
    }

    depth (value, node = this.root) {
        if (node === null) return null;
        if (value === node.data) return 0;
    
        if (value < node.data) return this.depth(value, node.left) + 1;
        if (value > node.data) return this.depth(value, node.right) + 1;
    }

    heightHelper(node) {
        if (node === null) return -1;
    
        const leftHeight = this.heightHelper(node.left);
        const rightHeight = this.heightHelper(node.right);
    
        return Math.max(leftHeight, rightHeight) + 1;
    }

    isBalanced (node = this.root) {
        if (node === null) return true;

        const leftHeight = this.heightHelper(node.left);
        const rightHeight = this.heightHelper(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    reBalance (node = this.root) {
        if (node === null) return null;

        
    }
}

//           50
//         /    \
//       30      70
//      /  \    /  \
//     20   40 60   80
//    /  \      /
//   10   25   55
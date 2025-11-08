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
        if (node === null) return null;
        if (!callback) throw new Error ('Callback required');

        const queue = [];
        const current = queue[0];
        
        queue.push(node);

        if (queue.length !== 0) {
            console.log(current);

            if (node.left !== null) {
                queue.push(current.left);
                return this.levelOrderForEach(current, node.left);
            }
            if (node.right !== null) {
                queue.push(current.right);
                return this.levelOrderForEach(current, node.right);
            }
            queue.pop(0);
        }
    }
}
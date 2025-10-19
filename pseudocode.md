Step-by-Step Plan to Build a Binary Search Tree
1. Fix the Node constructor

You’ll want to make sure each node stores:

The data.

A left child (another node or null).

A right child (same).

Think about what left and right should default to when you create a new node. You don’t need to fix this now, just be aware that your constructor needs to support that.

2. Clean & Prepare the Input Array

In your Tree class constructor, you're receiving an array. A BST must be built from a sorted and unique array to ensure it's balanced.

So, your first internal step will be to:

Remove duplicates from the array.

Sort the array in ascending order.

This becomes your source for building a balanced BST.

3. Build the Tree

Create a method inside the Tree class (often called buildTree) that:

Takes the sorted array.

Recursively builds a balanced BST by:

Choosing the middle element as the root.

Building the left subtree from the left half.

Building the right subtree from the right half.

This is a core recursive algorithm. No code yet — but try to picture how the middle becomes the root, and how that splits the problem smaller each time.

4. Set the Root of the Tree

After building the tree with your buildTree method, store the root node as a property of the Tree class (e.g. this.root), so you can access it later.

5. Add Utility Methods to the Tree

After you’ve built the tree, you’ll want to add typical BST functionality, like:

Basic Operations:

insert(value) — to add a value to the tree.

delete(value) — to remove a value.

find(value) — to find and return the node with that value.

These will require recursive logic and careful handling of edge cases (e.g., deleting a node with two children).

6. Tree Traversal Methods

Add different ways to traverse the tree:

Level-order (breadth-first)

Pre-order (root, left, right)

In-order (left, root, right)

Post-order (left, right, root)

Each of these helps in different contexts — e.g., in-order traversal of a BST gives sorted values.

7. Height & Depth

Add methods to calculate:

The height of a node (longest path to a leaf).

The depth of a node (distance from the root).

Understanding these will help you later when balancing trees.

8. Balance Check & Rebalancing

You’ll want to:

Add a method to check if the tree is balanced (i.e., the height difference between left and right subtrees is ≤ 1).

If it's unbalanced, add a rebalance() method to rebuild it using an in-order traversal (i.e., sorted array again).

Because that’s not how class syntax in JavaScript is intended to be used.

Here’s how class methods work:

You define them outside the constructor, but still inside the class body, like this:

class Tree {
    constructor(array) {
        // Call methods like this:
        this.root = this.buildTree(this.cleanArray(array));
    }

    cleanArray(array) {
        // sorting, deduplication logic here
    }

    buildTree(array) {
        // recursive logic to create the tree
    }
}


So the constructor calls methods — it doesn’t contain the full logic itself.
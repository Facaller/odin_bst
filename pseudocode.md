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
********

What is Happening in the Code?

Here’s the method for finding the inorder successor again:

findInorderSuccessor(node) {
    let current = node.right; // Start by going to the right child
    while (current && current.left) { // Keep going left as long as we can
        current = current.left;
    }
    return current; // When we reach the leftmost node, return it
}


Let’s break it down:

let current = node.right;
The first step is to look at the right child of the node you are deleting. Why? Because the inorder successor is always in the right subtree of the node you're trying to delete. So we start by moving to the right.

while (current && current.left) {
Now that we are at the right child, we want to keep moving left as long as possible. The reason we do this is because the inorder successor is always the leftmost node of the right subtree. So, as long as there’s a node with a left child, we keep moving left.

current = current.left;
This line moves us to the left child. We repeat this step until we reach a node that has no left child, which will be the leftmost node in that subtree — the inorder successor.

return current;
When we find that there’s no left child anymore, current will be the inorder successor, and we return that node.

Why This Approach Works

The reason this works is that in an inorder traversal, you visit the left child first, then the node itself, and then the right child. The inorder successor is the next node that would be visited in this traversal. This happens to be the leftmost node of the right subtree, as it’s the smallest node greater than the node you’re deleting.

Rewriting the Code in a More Explicit Way

I understand that you're trying to keep things clear and explicit. Let's rewrite this logic in a way that’s closer to your current style:

findInorderSuccessor(node) {
    // First, we need to check if the node has a right child.
    if (node.right !== null) {
        // If the node has a right child, go to that right child.
        let successor = node.right;

        // Now, we need to keep moving left until we reach the leftmost node.
        while (successor.left !== null) {
            // Move left
            successor = successor.left;
        }

        // Once we've found the leftmost node, return it as the successor.
        return successor;
    }

    // If the node does not have a right child, there is no inorder successor in this case.
    // (In your delete method, this case isn't needed, since we only handle nodes with 2 children.)
    return null;
}

Key Changes to Make It More Explicit

Checking the right child: We explicitly check if node.right exists first, just to make it clearer that we are looking for the inorder successor in the right subtree.

Using successor: Instead of just naming the variable current, we use successor to make it clear that this is the node we are looking for.

While loop condition: Instead of checking current && current.left, we specifically check if successor.left !== null — it’s more explicit about what we’re checking (that we want to keep moving left until we hit a node with no left child).
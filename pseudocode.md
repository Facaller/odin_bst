🧩 Step 1: Clarify what “height” means

Height of a node = number of edges on the longest path from that node down to a leaf.
So:

A leaf node has height 0.

A null (nonexistent) child can be thought of as contributing -1 (or 0, depending on convention).

Height = 1 + max(left height, right height).

🧭 Step 2: Split your task into two phases

Your function is trying to do two separate things:

Search phase: Find the node whose data matches the value given.

Height phase: Once found, calculate how tall its subtree is.

Right now, your code mixes the two — it keeps passing the same value down even after it’s found the node, which causes the recursion to go in circles.

🪜 Step 3: In the “search” part, only recurse until you find the node

So:

If the current node’s data is greater than the value → go left.

If smaller → go right.

If equal → stop searching — you’ve found the node you care about.
At that point, don’t recurse by searching again. Instead, start measuring.

So far, your “search” part is almost right — you just need to make sure it returns the result of the recursive call (not just calls it).

🌿 Step 4: Once you find the node, measure its height

Now you switch modes — you’re no longer comparing values.
From here:

You look at the node’s left and right children.

For each one, you recursively determine its height.

If the child is null, you return -1 (or 0 if you prefer).

Otherwise, the recursion gives you how tall that subtree is.

Take the greater of those two heights.

Add 1 (for the current node).

This gives you the height of the current node.

⚠️ Step 5: Don’t manually increment counters

Your instinct to create leftHeight and rightHeight variables is good — but you shouldn’t increment them manually.
Instead, those variables should hold the return value from the recursive calls that measure height.

So think of it like:

“Let’s ask the left subtree how tall it is.”

“Let’s ask the right subtree how tall it is.”

“Take the taller one and add one for myself.”

🧠 Step 6: Return the height value

Every recursive call must return something — not just compute it.
If you forget to return the result of a recursive call, the parent function won’t get the value back, and your recursion will “die” early (returning undefined).

So, make sure both:

The search phase returns the recursive result when recursing left/right.

The measurement phase returns its calculated height.

🌳 Step 7: Test your mental model

Try walking through an example in your head:
Let’s say your tree is like this:

      8
     / \
    4   12
   / \
  2   6


If you call height(4):

You search: 4 < 8 → go left, find node 4.

At node 4:

Left child = node 2 → height = 0

Right child = node 6 → height = 0

So node 4’s height = 1 + max(0, 0) = 1

If you call height(8):

Found root immediately.

Left subtree (rooted at 4) has height 1.

Right subtree (rooted at 12) has height 0.

So node 8’s height = 1 + max(1, 0) = 2.

✅ Step 8: Summarize adjustments

To fix your method:

Keep the search phase as it is — but make sure to return when you recurse.

Once you find the node:

Don’t keep passing the value into recursive calls.

Instead, start measuring height using the node’s children.

Measure height by returning 1 + max(height(left), height(right)).

Always return results from recursion.
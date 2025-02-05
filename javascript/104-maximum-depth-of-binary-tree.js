class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === undefined || root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

const node4 = new TreeNode(7, null, null);
const node3 = new TreeNode(15, null, null);
const node2 = new TreeNode(20, node3, node4);
const node1 = new TreeNode(9, null, null);
const root = new TreeNode(3, node1, node2);

console.log(maxDepth(root));
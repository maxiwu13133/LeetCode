
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return root;
  }

  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

const node6 = new TreeNode(9, null, null);
const node5 = new TreeNode(6, null, null);
const node4 = new TreeNode(3, null, null);
const node3 = new TreeNode(1, null, null);
const node2 = new TreeNode(7, node5, node6);
const node1 = new TreeNode(2, node3, node4);
const root = new TreeNode(4, node1, node2);

console.log(invertTree(root));
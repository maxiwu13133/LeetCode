class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let total = 0;

  const traverse = (node) => {
    if (node) {
      traverse(node.right);
      total += node.val;
      node.val = total;
      traverse(node.left);
    }
  }

  traverse(root);
  return root;
};

const n1 = new TreeNode(0, null, null);
const n2 = new TreeNode(3, null, null);
const n3 = new TreeNode(2, null, n2);
const n4 = new TreeNode(1, n1, n3);
const n5 = new TreeNode(8, null, null);
const n6 = new TreeNode(7, null, n5);
const n7 = new TreeNode(5, null, null);
const n8 = new TreeNode(6, n7, n6);
const root = new TreeNode(4, n4, n8);

console.log(bstToGst(root));

const concatLinked = (root, total) => {
  total.push(root.val);
  if (root.next === null) {
    return;
  }
  concatLinked(root.next, total);
}

const arrToNum = (nums) => {
  let result = 0;
  let multiplier = 1;

  for (let i = 0; i < nums.length; i++) {
    result += nums[i] * multiplier;
    multiplier *= 10;
  }

  return result;
}

const numToLinked = (num) => {
  const totalLinked = new ListNode(num % 10);
  num = Math.floor(num / 10);
  let current = totalLinked;
  const n = String(num).length;
  for (let i = 0; i < n; i++) {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    current.next = new ListNode(remainder, null);
    current = current.next;
  }

  return totalLinked;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const nums1 = [];
  const nums2 = [];

  concatLinked(l1, nums1);
  concatLinked(l2, nums2);

  const total = arrToNum(nums1) + arrToNum(nums2);

  if (String(total).length === 1) return new ListNode(total, null);
  
  return numToLinked(total);;
};
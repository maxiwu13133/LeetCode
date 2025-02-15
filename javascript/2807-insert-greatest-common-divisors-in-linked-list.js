function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  const gcd = (a, b) => {
    if (b === 0) return a;

    return gcd(b, a % b);
  }

  let curr = head;
  while (curr.next) {
    curr.next = new ListNode(gcd(curr.val, curr.next.val), curr.next);
    curr = curr.next.next;
  }

  return head;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let next = null;
  let current = head;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};


const tail1 = new ListNode(5, null);
const x3 = new ListNode(4, tail1);
const x2 = new ListNode(3, x3);
const x1 = new ListNode(2, x2);
const head1 = new ListNode(1, x1);

const tail2 = new ListNode(2, null);
const head2 = new ListNode(1, tail2);

const head3 = new ListNode(null, null);


console.log(reverseList(head1));
console.log(reverseList(head2));
console.log(reverseList(head3));

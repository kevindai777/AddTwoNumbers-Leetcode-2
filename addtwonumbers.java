//Java Solution

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        ListNode newNode = new ListNode(-1);
        ListNode temp = newNode;
        
        while (l1 != null || l2 != null) {
            int a = (l1 != null) ? l1.val : 0;
            int b = (l2 != null) ? l2.val : 0;
            
            int sum = a + b + carry;
            carry = sum / 10;
            temp.next = new ListNode(sum % 10);
            
            if (l1 != null) {
                l1 = l1.next;
            }
            
            if (l2 != null) {
                l2 = l2.next;
            }
            
            temp = temp.next;
        }
        if (carry > 0) {
            temp.next = new ListNode(carry);
        }
        
        return newNode.next;
    }
}
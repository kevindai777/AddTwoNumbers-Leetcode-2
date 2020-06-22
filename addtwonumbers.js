//Objective is to add two linked lists together, from front to back
//For example, (2->4->3) + (5->6->4) = (7->0->8)

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let l1 = new Node(2)
l1.next = new Node(4)
l1.next.next = new Node(3)

let l2 = new Node(5)
l2.next = new Node(6)
l2.next.next = new Node(4)


//O(n) solution since you're traversing over each list

let sumHead, sumTail
let carry = 0
    
while (l1 !== null || l2 !== null) {
    //check if the nodes have values and are not null
    let a = l1 && l1.val
    let b = l2 && l2.val 
        
    //Here, we use the sum to update the carry (if it goes over 10)
    //as well as to make our new node, which is mod 10 of the sum
    let sum = a + b + carry
    carry = Math.floor(sum / 10)
    let newNode = new Node(sum % 10)
    
    //Create a new linked list with a head and tail
    if (!sumHead) {
        sumHead = newNode
        sumTail = sumHead
    } else {
        sumTail.next = newNode
        sumTail = sumTail.next 
    }
    
    //Iterate over both linked lists
    if (l1 !== null) {
        l1 = l1.next
    }
        
    if (l2 !== null) {
        l2 = l2.next
    }
}

//If there's a leftover carry by the last node, make it its own node
if (carry > 0) {
    sumTail.next = new Node(carry)
}
    
return sumHead
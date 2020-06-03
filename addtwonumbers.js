//Objective is to add two linked lists together, from front to back
//For example, (2->4->3) + (5->6->4) = (8->0->7)

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
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


//O(n) solution since you're traversing each list once

let sumHead, sumTail
let carry = 0
    
while (l1 !== null || l2 !== null) {
    let a = l1 && l1.data
    let b = l2 && l2.data 
        
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
    
if (carry > 0) {
    sumTail.next = new Node(carry)
}
    
return sumHead
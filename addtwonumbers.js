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
  
    addNoteToFront(data) {
      this.head = new Node(data, this.head) //the new node's 'next' will be the given 'this.head' a.k.a you're shifting the old node over
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

let l1 = new LinkedList()

l1.addNodeToBack(4)
l1.addNodeToBack(5)
l1.addNodeToBack(6)

let l2 = new LinkedList()

l2.addNodeToBack(7)
l2.addNodeToBack(8)
l2.addNodeToBack(9)


//O(n) solution since you're traversing each list once

let sumHead, sumTail
let carry = 0
    
while (l1 !== null || l2 !== null) {
    let a = l1 && l1.val 
    let b = l2 && l2.val 
        
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
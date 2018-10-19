/*
 *  A linked list is a collection of Nodes. There is a head
 *  at the beginning, and a tail at the end. I include a length
 *  method because I don't want to search the entire chain if I
 *  need to insert something and I already know the index I
 *  would like to insert it at.
 */

class Node {
  constructor(value, prev, next){
    this.value = value
    this.next = next
    this.prev = prev
  }//constructor
}//Node

class LinkedList {
  constructor(head, tail, length){
    this.head = head
    this.tail = tail
    this.length = length
  }//constructor

  getLength = () => this.length

  addNode(value, prev, next){
    //if head is NULL, create new head
    const newNode = new Node(value, prev, next)
    if(this.head === null){
      this.head = newNode
      this.tail = newNode
      this.length = 1
    } else {
    //else the new node is a tail
    //add the node, and update the tail and len props
      const prevTail = this.tail
      prevTail.next = newNode
      this.tail = newNode
      this.length++
    }//if-else
  }//addNode
  
  removeNode(value){}//removeNode
  moveToHead(value){}//moveToHead
  moveToTail(value){}//moveToTail
}//LinkedList



interface ListNode {
  value: any;
  prev?: ListNode;
  next?: ListNode;
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

interface DoublyLinkedList {
  head: ListNode;
  tail: ListNode;
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {	
	this.head.prev = node;
	
	node.next = this.head;
    
	this.head = node;
  }

  setTail(node) {
    // to set the tail, we must take the tail, make its next the new node.
    // make the new nodes prev the tail. 
    // then change the tail
    
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  insertBefore(node, nodeToInsert) {
    if (this.containsNode(nodeToInsert, this.head)) {
      this.remove(nodeToInsert)
    }

    nodeToInsert.prev = node.prev;
    
    nodeToInsert.next = node;
    
    node.prev.next = nodeToInsert;
    
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (this.containsNode(nodeToInsert, this.head)) {
      this.remove(nodeToInsert)
    }

    nodeToInsert.next = node.next;

    node.next.prev = nodeToInsert;

    nodeToInsert.prev = node;

    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    if (!this.containsNode(node, this.head)) return;

    if (node.prev) {
      node.prev.next = node.next;
    }
    
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head === node.next;
    }
    
    if (this.tail === node) {
      this.tail === node.prev;
    }
  }

  containsNodeWithValue(value) {
    // Write your code here.
  }

  containsNode(node, head) {
    if (!head) return false;

    if (this.areNodesEqual(node, head)) return true
    
    return this.containsNode(node, head.next);
  }

  areNodesEqual(node1, node2) {
    if (!(node1.value === node2.value)) return false;

    if (node1.next === node2.next && node1.prev === node2.prev) {
      return true
    }

    return false;
  }
}
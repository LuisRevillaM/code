
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

  setHead(node:ListNode) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (this.containsNode(node, this.head)) {

      this.remove(node);
    }

    this.head.prev = node;

    node.next = this.head;

    this.head = node;
  }

  setTail(node:ListNode) {
    if (this.containsNode(node, this.head)) {
      this.remove(node);
    }

    if (!this.tail) {
      this.tail = node;
      this.head = node;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  insertBefore(node:ListNode, nodeToInsert:ListNode) {
    if (this.containsNode(nodeToInsert, this.head)) {
      this.remove(nodeToInsert)
    }

    if (this.areNodesEqual(this.head, node)) {
      this.head = nodeToInsert;
    }

    nodeToInsert.prev = node.prev;

    nodeToInsert.next = node;

    if (node.prev) {
      node.prev.next = nodeToInsert;
    }

    node.prev = nodeToInsert;
  }

  insertAfter(node:ListNode, nodeToInsert:ListNode) {
    if (this.containsNode(nodeToInsert, this.head)) {
      this.remove(nodeToInsert)
    }
    if (this.areNodesEqual(this.tail, node)) {
      this.tail = nodeToInsert;
    }
    nodeToInsert.next = node.next;

    if (node.next) {
      node.next.prev = nodeToInsert;
    }

    nodeToInsert.prev = node;

    node.next = nodeToInsert;
  }

  insertAtPosition(position:number, nodeToInsert:ListNode) {
    if (this.containsNode(nodeToInsert, this.head)) {
      this.remove(nodeToInsert)
    }

    let current = this.head;

    for (let counter = 1; Boolean(current) == true; counter++) {
      if (counter === position) {
        this.insertBefore(current, nodeToInsert);
        current = null;
      } else {
        current = current.next;
      }
    }
  }

  removeNodesWithValue(value:any) {
    this.findAndRemove(this.head, value);
  }

  findAndRemove(head:ListNode, value) {
    if (!head) return;

    const next = head.next;

    if (head.value === value) {
      this.remove(head);
    }

    this.findAndRemove(next, value);
  }
  remove(node:ListNode) {
    if (!this.containsNode(node, this.head)) return;


    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    node.prev = null;
    node.next = null;
  }

  containsNodeWithValue(value) {
    return this.findValueInList(this.head, value);
  }

  findValueInList(head:ListNode, value) {
    if (head.value === value) return true;

    if (!head.next) return false;

    return this.findValueInList(head.next, value);
  }

  containsNode(node:ListNode, head) {

    if (!head) return false;

    if (this.areNodesEqual(node, head)) return true

    return this.containsNode(node, head.next);
  }

  areNodesEqual(node1:ListNode, node2:ListNode) {
    if (node1.value !== node2.value) return false;

    if (node1.next === node2.next && node1.prev === node2.prev) {
      return true
    }

    return false;
  }
}
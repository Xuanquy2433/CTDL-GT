import React from "react";

function LinkedList() {
  console.log("Linked List");
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    insert(value) {
      this.length++;
      let node = new Node(value); // or use new Node(value);

      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
        return node;
      }

      this.head = this.tail = node;
      return node;
    }

    remove() {
      if (this.tail) {
        this.length--;

        const tailNode = this.tail;

        // search for the node before tail
        let currentNode = this.head;

        while (currentNode.next != tailNode) {
          currentNode = currentNode.next;
        }
        const beforeTail = currentNode;
        this.tail = beforeTail;
        this.tail.next = null;

        return tailNode;
      }
      return undefined;
    }

    print() {
      let current = this.head;
      while (current) {
        console.log(current);
        current = current.next;
      }
    }
  }
  const linkedList = new LinkedList();

  linkedList.insert(7);
  linkedList.insert(8);
  linkedList.print();
  linkedList.remove()
  linkedList.print();

  return <div></div>;
}

export default LinkedList;

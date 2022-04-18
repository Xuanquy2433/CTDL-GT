import React from "react";

function Queue() {

  //Vào trước ra trước (FIFO)
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.front = null;
      this.back = null;
    }

    isEmpty() {
      return !this.front;
    }
    
    enqueue(value) {
      let node = new Node(value);

      if (this.isEmpty()) {
        this.front = this.back = node;
      } else {
        this.back.next = node;
        this.back = node;
      }
      this.print();
    }
    
    print() {
      if (this.isEmpty()) {
        console.log("EMPTY QUEUE");
      } else {
        let tempArr = [];

        let tmp = this.front;

        while (tmp) {
          tempArr.push(tmp.value);
          tmp = tmp.next;
          console.log(tempArr.join(","));
        }
      }
    }

    dequeue() {
      let node = this.front;

      if (!this.isEmpty()) {
        this.front = this.front.next;
      }

      if (!this.back) {
        this.back = null;
      }

      this.print();
      return node;
    }
  }

  let q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5)

  q.dequeue()
  

  

  return <div></div>;
}

export default Queue;

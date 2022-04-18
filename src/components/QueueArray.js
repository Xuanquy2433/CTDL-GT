import React from "react";

function QueueArray() {
  console.log("QueueArray");
  class Queue {
    constructor() {
      this.ele = [];
    }

    enqueue(node) {
      console.log("After push");
      this.ele.push(node);
    }

    dequeue() {
      console.log("After pop");
      if (this.ele.length > 0) {
        return this.ele.shift();
      } else {
        return console.log("emty");
      }
    }

    print() {
      console.log(this.ele);
    }
  }

  const queue = new Queue();

  queue.print();
  queue.enqueue(1);
  queue.print();
  queue.enqueue(2);
  queue.print();
  queue.enqueue(3);
  queue.print();
  queue.dequeue();
  queue.print();

  return <div>QueueArray</div>;
}

export default QueueArray;

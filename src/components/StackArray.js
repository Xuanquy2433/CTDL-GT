import React from "react";

function StackArray() {
  class Stack {
    constructor() {
      this.items = [];
    }

    push(ele) {
      this.items.push(ele);
    }
    pop() {
      this.items.pop();
    }
    peek() {
      return this.items[this.items.length - 1];
    }

    print() {
      console.log(this.items);
    }
  }

  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.print();

  return <div>StackArray</div>;
}

export default StackArray;

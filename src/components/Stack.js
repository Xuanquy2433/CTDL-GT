import React from "react";

function Stack() {
  // vào sau ra trước (LIFO)
  class Stack {
    constructor() {
      this.top = null;
    }

    push(ele) {
      var node = new newNode(ele);
      console.log(node);
      node.next = this.top;
      this.top = node;
    }

    pop() {
      var temp = this.top;
      this.top = this.top.next;
      temp = null;
    }

    display() {
      var temp = this.top;
      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }

  class newNode {
    constructor(data, next) {
      this.data = data;
      this.next = null;
    }
  }

  const top = new Stack();
  top.push(11);
  top.push(22);
  top.push(33);
  top.push(44);
  top.push(55);

  console.log("After PUSH...");
  top.display();
  top.pop();
  top.pop();

  console.log("After POP...");
  top.display();
  top.pop();

  return <div></div>;
}

export default Stack;

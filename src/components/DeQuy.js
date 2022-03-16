import React from "react";

function DeQuy() {
  const countDown = (number) => {
    if (number === 0) {
      return 1;
    }
    console.log("CountDown", number);
    countDown(number - 1);
  };

  countDown(10);

  const fib = (n) => {
    if (n === 1 || n === 2) {
      return 1;
    }
    if (n > 2) {
      return fib(n - 1) + fib(n - 2);
    }
  };

  console.log("fib", fib(20));

  const giaiThua = (number) => {
    if (number > 0) {
      return number * giaiThua(number - 1);
    }
    return 1;
  };

  return <div></div>;
}

export default DeQuy;

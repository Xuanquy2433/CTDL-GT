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
      /**
      fib(4) + fib(3)
      fib(3) + fib(2) + fib (2) + fib(1);
      fib(2) + fib(1) + fib(1) + fib(0) +  fib(1) + fib(0) + 1
      1 + 1 + 1 + 0 + 1 + 0 + 1


      **/
    }
  };

  console.log("fib", fib(5));

  // console.log('so fib thu 10 la: ',fib(10));

  const giaiThua = (number) => {
    if (number > 0) {
      return number * giaiThua(number - 1);
    }
    return 1;
  };

  /**
     5 * giaiThua(4)
     5 * ( 4 * giaiThua(3) )
     5 * (4 * (3 * giaiThua(2)))
     5 * (4 * (3 * (2 * giaiThua(1))))
     5 * (4 * (3 * (2 * (1 * giaiThua(0)))))
     5 * 4 * 3 * 2 * 1 * 1  
   * 
   * 
   */
  console.log("giai thua ", giaiThua(5));

  return <div></div>;
}

export default DeQuy;

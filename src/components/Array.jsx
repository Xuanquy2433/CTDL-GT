import React from "react";

function Array() {
  //     8. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
  //     - getLessThan(n): number[]
  //     - Ví dụ getLessThan(3) sẽ trả ra mảng [0,1,2]
  //     9. Sử dụng hàm (8) xuất ra console danh sách các số nhỏ hơn 100
  const getLessThan = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  };
  console.log(getLessThan(100));

  //   10. Viết hàm trả ra danh sách tất cả các số lẻ nhỏ hơn n
  //     - getOddlessThan(n): number[]
  // 11. Sử dụng hàm (9) xuất ra console danh sách toàn bộ số lẻ <1000

  const getOddlessThan = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      if (i % 2 !== 0) {
        arr.push(i);
      }
    }
    return arr;
  };
  console.log(getOddlessThan(1000));

  return <div></div>;
}

export default Array;

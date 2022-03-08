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

  return <div></div>;
}

export default Array;

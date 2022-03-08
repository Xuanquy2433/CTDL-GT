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

  //   Viết hàm trả ra danh sách in hoa tất cả các phần tử trong mảng. Đầu vào là một mang, đầu ra là mông mảng khác và tất cả các phần tử được in hoa
  //   - toUpperCase(arr) : string[]
  // 13. Sử dụng hàm (12) để in hoa mảng sở thích cá nhân
  const toUpperCase = (arr) => {
    let array = [];
    // arr.forEach((element) => {
    //   a.push(element.toUpperCase());
    // });
    // return a;
    arr.map((item, index) => {
      array.push(item.toUpperCase());
    });
    return array;
  };

  let array = ["Listen to music", "Chill", "Playing games", "Watching TV"];
  console.log(toUpperCase(array));

  //   18. Viết hàm tìm ra vị trí tất cả phần tử nằm trong mảng
  //     - find(arr, chuoiCanTim): numer[]
  // 19. Sử dụng hàm (19).
  //     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]
  //     - string cần tìm: bóng rổ
  //     - kết quả trả ra: vị trí [2,4]

  const find = (arr, n) => {
    arr.map((item, index) => {
      if (item == n) {
        console.log(index + 1);
      }
    });
  };
  let arrayFind = ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"];
  find(arrayFind, "bóng rổ");

  return <div></div>;
}

export default Array;

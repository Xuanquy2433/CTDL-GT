import React from "react";

function Function() {
  //    Chuỗi
  //     Tạo ra 5 biến s1, s2, s3, s4, s5 chứa 5 chuỗi
  //     1. Viết hàm nối 2 chuỗi . Ví dụ có 2 chuỗi S1, S2 mục tiêu sẽ trả ra một chuỗi gộp của S1 và S2 là S = S1 + S2
  //     2. Dưa vào hàm nối 2 chuỗi ở 1. Xuất ra màn hình một chuỗi S là gộp của 5 chuỗi S1, S2, S3, S4, S5
  const concat = (st1, ...args) => {
    return st1.concat(...args);
  };
  console.log(concat("abc", "123", "jkl", "bnm"));

  //     3. Viết hàm in hoa chuỗi truyền vào.
  //     4. Dựa vào hàm in hoa đã làm ở 3. Xuất ra màn hình in hoa của 5 chuỗi S1, S2, S3, S4, S5 và S = S1S2S3S4S5
  const upperCase = (st1, ...args) => {
    return st1.concat(...args).toUpperCase();
  };
  console.log(upperCase("abc"));
  //     5. Viết hàm kiểm tra chuỗi này có tồn tại trong chuỗi kia hay không.
  //     6. Sử dụng hàm 5 để kiểm tra S2 có tồn tại trong S1 không
  const include = (st1, ...args) => {
    return st1.includes(...args);
  };
  console.log(include("abc", "a"));
  //     7. sử dụng hàm [s.length] để xuất ra độ dài các chuỗi s1-s5 và độ sài của chuỗi S1S2S3S4S5
  const length = (st1, ...args) => {
    return st1.concat(...args).length;
  };
  console.log(length("abc", "123"));
  //     8. Sử dụng hàm có sẵn [string.substring(begin,end)] để cắt ra một chuỗi con của S1,S2,S3,S4,S5
  // từ vị trí số 1 tới vị trí số 3
  const substring = ( aa) => {
    console.log(aa.substring(1, 3));
  };
  substring("Lập trình");

  return <div></div>;
}

export default Function;

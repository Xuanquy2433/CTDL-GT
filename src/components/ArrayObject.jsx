import React from "react";
import { data } from "./data";

function ArrayObject() {
  //     7. Viết hàm tìm sản phẩm có giá > 5000000
  //     - timSanPhamCoGiaLonHon5Tr(mang)
  //     - Đầu vào: một mảng các sản phẩm
  //     - Đầu ra: Một mảng các sản phẩm có giá > 5000000
  // 8. Viết hàm tìm sản phẩm có giá > gia
  //     - timSanPhamTheoGia(mang, gia)
  //     - Đầu vào: một mảng các sản phẩm; và gia
  //     - Đầu ra: Một mảng các sản phẩm có giá > n
  /**
   *
   * @param {[]} arr
   * @param {Number} price
   * @returns
   */
  const searchPrice = (arr, price) => {
    let array = [];
    arr.map((item, index) => {
      if (item.gia > price) {
        array.push(item);
      }
    });
    return array;
  };

  console.log("SearchPrice: ", searchPrice(data, 5000000));
  // 11. Viết hàm tìm ra tất cả vị trí của sản phẩm có tên được truyền và
  // - timSanPhamTheoTen(mang, ten): number[]
  // - Đầu vào là một mảng và tên muốn tìm kiếm
  // - Đầu ra là mảng vị trí của sản phẩm có tên là  tên được tuyền vào
  /**
   *
   * @param {[]} arr
   * @param {String} name
   * @returns
   */
  const searchName = (arr, name) => {
    arr.map((item, index) => {
      if (item.ten == name) {
        console.log("vi tri: ", index);
      }
    });
  };
  searchName(data, "Iphone 5");

  //   14. Viết hàm sắp xếp một mảng các đối tượng theo giá tăng dần
  //   - sapXepTangDanTheoGia(mang): []
  //   - Đầu vào là một mảng
  //   - Đầu ra là một mảng sau khi đã được sắp xếp
  // 15. Viết hàm sắp xếp một mảng các đối tượng theo giá giảm dần
  //   - sapXepGiamDanTheoGia(mang): []
  //   - Đầu vào là một mảng
  //   - Đầu ra là một mảng sau khi đã được sắp xếp

  const sort = (arr) => {
    let array = [];
    array = arr.sort((a, b) => Number(a.gia) - Number(b.gia));
    return array;
  };
  console.log(sort(data));
  return <div></div>;
}

export default ArrayObject;

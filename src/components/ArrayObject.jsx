import React from "react";
import { data } from './data';

function ArrayObject() {
  //     7. Viết hàm tìm sản phẩm có giá > 5000000
  //     - timSanPhamCoGiaLonHon5Tr(mang)
  //     - Đầu vào: một mảng các sản phẩm
  //     - Đầu ra: Một mảng các sản phẩm có giá > 5000000
  // 8. Viết hàm tìm sản phẩm có giá > gia
  //     - timSanPhamTheoGia(mang, gia)
  //     - Đầu vào: một mảng các sản phẩm; và gia
  //     - Đầu ra: Một mảng các sản phẩm có giá > n
    const searchPrice = (arr,price) => {
        let array = []
        arr.map((item,index) => {
            if(item.gia > price){
                array.push(item)
            }
        })
        return array
    }

    console.log('SearchPrice: ',searchPrice(data, 5000000));
  return <div></div>;
}

export default ArrayObject;

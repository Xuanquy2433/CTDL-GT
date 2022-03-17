import React from "react";

function Search() {
  let array = [22, 12, 43, 23, 56, 32, 1, 7];

  const binarySeacrch = (arr, n, x) => {
    arr.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
    console.log(arr);
    let left = 0,
      right = n - 1,
      mid;
    while (left <= right) {
      mid = (left + right) / 2;
      if (arr[mid] == x) return true;
      else if (arr[mid > x]) right = mid - 1;
      else left = mid + 1;
    }
    return false;
  };

  return <div></div>;
}

export default Search;

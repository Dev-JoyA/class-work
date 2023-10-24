function multiplyArray (arr){
  
    let myArr = arr.map((arrs) => {return arrs * 2});
    myArr.unshift(myArr[0])
   return myArr
  }
  
  console.log(multiplyArray([1,2,3,4,5]))
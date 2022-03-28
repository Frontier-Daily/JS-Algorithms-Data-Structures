function copyMachine(arr, num) {
    let newArr = [];
    let para = [...arr]
    while (num >= 1) {
      // Only change code below this line
      // newArr.push(arr.slice())
      newArr.push(para.slice())
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));
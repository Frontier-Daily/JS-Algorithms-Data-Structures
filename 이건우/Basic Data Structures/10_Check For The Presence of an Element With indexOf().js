function quickCheck(arr, elem) {
    // Only change code below this line
  
    // Only change code above this line
    if(arr.indexOf(elem) === -1){
      return false;
    }
      return true;
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
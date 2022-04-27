function mutation(arr) {
    let testStr = arr[1].toLowerCase();
    let originStr = arr[0].toLowerCase();
    for(let i = 0; i < testStr.length; i++) {
        if(originStr.indexOf(testStr[i]) === -1) return false;
    }
    return true;
}

mutation(["hello", "hey"]);
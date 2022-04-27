function chunkArrayInGroups(arr, size) {
    for(let i = 0; i < arr.length; i++) {
        let spliceArr = arr.splice(i, size);
        arr.unshift(spliceArr);
    }
    return arr.reverse();
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
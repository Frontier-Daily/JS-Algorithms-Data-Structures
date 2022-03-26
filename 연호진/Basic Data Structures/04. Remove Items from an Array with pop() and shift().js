function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift("is", "not");
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
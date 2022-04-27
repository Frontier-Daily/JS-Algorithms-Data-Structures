function titleCase(str) {
    let newStr = str.split(" ");
    let updatedStr = [];
    for(let i in newStr) {
        updatedStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1).toLowerCase();
    }
    return updatedStr.join(" ");
}

titleCase("I'm a little tea pot");
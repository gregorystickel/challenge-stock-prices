function best (array) {
    let lowest = Math.min(...array);
    let highest = Math.max(...array);
    return highest - lowest;
}


console.log(best([2,8,4,1,12]));
// in arr ,out arr
function flatten(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (Array.isArray(val)) {
            res = res.concat(flatten(val));
        } else {
            res = res.concat([val])
        }
    }
    return res;
}

let arr = [1, [2, [3, 4, 5]]];
console.log(flatten(arr))
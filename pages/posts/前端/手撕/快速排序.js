let a = [5, 3, 2 ,1, 4, 11, -1, -5, -5];


function qSort(nums, l, r){
    if (l >= r) return;
    let pivot = nums[l];
    let i = l, j = r;
    while(i < j) {
        while (i < j && nums[j] >= pivot) j--;
        while (i < j && nums[i] <= pivot) i++;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    [nums[l], nums[i]] = [nums[i], nums[l]]
    qSort(nums, l, i-1);
    qSort(nums, i+1, r);
}

qSort(a, 0, a.length-1);
console.log(a)
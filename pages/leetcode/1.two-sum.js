/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30204
 *
 * [1] 两数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const m = new Map();
    const res = [];
    nums.forEach((v, i) => {
        if (m.has(target - v)) {
            res.push(m.get(target - v))
            res.push(i);
        } else{
            m.set(v, i);
        }
    })
    return res;
};
// @lc code=end

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */

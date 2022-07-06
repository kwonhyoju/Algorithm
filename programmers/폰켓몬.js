function solution(nums) {
    let result = [...new Set(nums)].length;
    let num = nums.length / 2;
    // console.log(nums.length/2);
    return result > num ? num : result;
}

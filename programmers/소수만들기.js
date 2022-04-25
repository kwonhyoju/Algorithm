function solution(nums) {
    let answer = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let num = nums[i] + nums[j] + nums[k];
                if (isPrime(num)) answer++;
            }
        }
    }
    return answer;
}

//소수 판별 함수
const isPrime = (num) => {
    //2이상의 숫자로 나눠지면 소수가 아님
    for (let p = 2; p < num; p++) {
        if (num % p === 0) return false;
    }
    return true;
};

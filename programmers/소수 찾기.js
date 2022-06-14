function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) answer++;
    }
    return answer;
}
function isPrime(x) {
    for (let j = 2; j <= Math.sqrt(x); j++) {
        if (x % j === 0) return false;
    }
    return true;
}

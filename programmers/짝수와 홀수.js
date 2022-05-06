function solution(num) {
    return num % 2 === 0 || num === 0 ? "Even" : "Odd";
    // return num % 2 ? "Odd" : "Even"; 0이 false 라는걸 이용
}

function solution(n) {
    let num = n.toString(3);
    let answer = num.toString().split("").reverse().join("");
    return parseInt(answer, 3);
}

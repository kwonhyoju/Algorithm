function solution(n) {
    let answer = n
        .map((i) => i.toString())
        .sort((a, b) => b + a - (a + b))
        .join("");
    console.log(answer[0]);
    return answer[0] === "0" ? "0" : answer;
}

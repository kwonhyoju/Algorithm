function solution(d, budget) {
    let answer = 0;
    let num = d.sort((a, b) => a - b);
    num.reduce((acc, value, idx) => {
        if (value + acc <= budget) {
            answer = idx + 1;
        }
        return value + acc;
    }, 0);
    return answer;
}

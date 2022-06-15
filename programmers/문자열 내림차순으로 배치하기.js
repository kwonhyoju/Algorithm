function solution(s) {
    let word = s.split("");
    let upper = [];
    let lower = [];
    let answer = [];
    word.map((value) => {
        if (value === value.toUpperCase()) {
            return upper.push(value);
        } else {
            return lower.push(value);
        }
    });

    return answer
        .concat(lower.sort().reverse(), upper.sort().reverse())
        .join("");
}

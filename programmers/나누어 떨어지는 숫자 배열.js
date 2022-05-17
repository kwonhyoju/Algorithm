function solution(arr, divisor) {
    let answer = arr
        .reduce((acc, value) => {
            value % divisor === 0 && acc.push(value);
            return acc;
        }, [])
        .sort((a, b) => a - b);

    return answer.length === 0 ? [-1] : answer;
}

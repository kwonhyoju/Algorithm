function solution(numbers) {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let filterNum = num.filter((i) => !numbers.includes(i));
    let answer = 0;
    for (let i = 0; i < filterNum.length; i++) {
        answer += filterNum[i];
    }
    return answer;
}

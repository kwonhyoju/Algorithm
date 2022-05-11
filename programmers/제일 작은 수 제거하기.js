function solution(arr) {
    let minNum = Math.min(...arr);
    let answer = arr.reduce((acc, value) => {
        value !== minNum && acc.push(value);
        return acc;
    }, []);
    // arr.splice(arr.indexOf(Math.min(...arr)),1); 최소값을 찾아서 배열에서 그 index를 찾은 후 바로 지움
    return answer.length === 0 ? [-1] : answer;
}

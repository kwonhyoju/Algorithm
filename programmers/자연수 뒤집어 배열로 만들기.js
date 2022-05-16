function solution(n) {
    // n.toString().split('').reverse().map(o => o = parseInt(o));
    // =>.split(''); split에서 ""이렇게 공백도 없이 넣으면 한글자씩 뜯어서 배열이 됨
    //[ '1', '2', '3', '4', '5' ]

    let totalLeng = n.toString().length;
    let answer = [];
    for (let i = totalLeng - 1; -1 < i; i--) {
        answer.push(Number(n.toString().substr(i, 1)));
    }

    return answer;
}

function solution(a, b) {
    let answer = 0;
    let sNum = 0;
    let bNum = 0;
    if (a === b) {
        answer = a;
    } else {
        if (a < b) {
            sNum = a;
            bNum = b;
        } else {
            sNum = b;
            bNum = a;
        }
        for (let i = sNum; i <= bNum; i++) {
            answer += i;
        }
    }

    return answer;
}

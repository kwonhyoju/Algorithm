function solution(num) {
    let answer = num;
    let i = 0;
    while (answer !== 1) {
        if (answer % 2 === 0) {
            answer = answer / 2;
        } else {
            answer = answer * 3 + 1;
        }
        i++;
    }
    return i > 500 ? -1 : i;
    // console.log(i);

    //아래 collatz function의 답
    // console.log( collatz(num) );
}

//재귀함수로 작성한 버전
//**while문으로 작성하는게 더 빠름**
// function collatz(num,count = 0) {
//     return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
// }

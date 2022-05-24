function solution(s, n) {
    let str = s.split("");
    let num = str.map((i) => {
        if (i == " ") {
            return i;
        } else {
            return i.toUpperCase().charCodeAt(0) + n > 90
                ? String.fromCharCode(i.charCodeAt(0) + n - 26)
                : String.fromCharCode(i.charCodeAt(0) + n);
        }
    });
    return num.join("");

    // let answer = num.reduce((total , value)=>{
    //     value+n > 90 ?
    //         total+=String.fromCharCode(value+n-26) : total+=String.fromCharCode(value+n)
    // if(96 < value < 123){
    //     let addNum = value+n > 122 ? (value+n-122)+96 : value + n;
    //     total+=String.fromCharCode(addNum);
    // }else if(64 < value < 91){
    //     let addNum = value+n > 90 ? (value+n-90)+64 : value + n;
    //     total+=String.fromCharCode(addNum);
    // }
    //     return total
    // },"");
    // console.log(answer);
    //공백 제거
    // return answer.replace(regExp, ' ');
}

function solution(numbers) {
    let total = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            total.push(numbers[i] + numbers[j]);
        }
    }
    // console.log([...new Set(total)]); new Set을 이용한 중복 제거
    return total
        .filter((value, idx) => total.indexOf(value) === idx)
        .sort((a, b) => a - b);

    //.filter((value,idx)=>{})
    //arrow function 안의 내용이 true면 배열에 return.

    //.indexOf(value,startIndex)
    // value로 들어온 값을 찾는데 "첫번째"로 나타나는 위치의 index를 return

    //.sort((a,b)=>{a-b});
    //음수가 리턴된다면 a < b를 의미하고,
    // 양수가 리턴된다면 a > b를 의미하고,
    // 0이 리턴된다면 a == b를 의미한다.

    //new Set을 이용한 중복제거
    //방법1
    //[...new Set(total)]
    //방법2
    // let array = [1,2,3,1];
    // let setArray = new Set(array);
    // let finalArray = [...setArray];//set객체를 배열의 형태로 저장해야 정상적으로 데이터가 출력됨
}

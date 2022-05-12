function solution(strings, n) {
    let arr = strings
        .map((value, idx) => {
            return value[n] + value;
        })
        .sort();

    return arr.map((word) => {
        return word.substring(1);
    });

    // [내가 생각한 과정]
    //     let test = strings.reduce((acc,value)=>{
    //         acc.push({idx:value[n]+value,value:value});
    //         return acc;
    //     },[]);
    //     //idx의 값에 n의 인덱스를 맨 앞으로 뺀 string을 집어 넣어야함
    //     // console.log(test);

    //     let arr = test.map((i,index)=>{
    //         return test[index].idx
    //             // .substring(1)
    //     }).sort(); //[ 'u', 'e', 'a' ]
}

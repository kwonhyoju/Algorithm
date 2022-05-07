function solution(arr) {
    return (
        arr.reduce((num, value) => {
            return num + value;
        }, 0) / arr.length
    );
}

function solution(n) {
    return n
        .toString()
        .split("")
        .reduce((acc, value) => {
            acc += Number(value);
            return acc;
        }, 0);
}

function solution(seoul) {
    let num = seoul.findIndex((value) => {
        return value === "Kim";
    });
    return "김서방은 " + num + "에 있다";
}

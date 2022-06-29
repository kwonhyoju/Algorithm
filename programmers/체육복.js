function solution(n, lost, reserve) {
    var answer = n - lost.length;

    let realLost = lost.filter((l) => !reserve.includes(l));
    let realReserve = reserve.filter((r) => !lost.includes(r));

    answer += lost.length - realLost.length;

    realLost.sort((a, b) => a - b); //진짜 잃어버린 애들을 순서대로
    // console.log(realLost); //진짜 잃어버린 애들
    // console.log(realReserve);//진짜 빌려줄 수 있는 애들

    realLost.forEach((l) => {
        console.log(l - 1);
        if (realReserve.length === 0) {
            return;
        }

        if (realReserve.includes(l - 1)) {
            realReserve = realReserve.filter((r) => r !== l - 1);
            answer++;
        } else if (realReserve.includes(l + 1)) {
            realReserve = realReserve.filter((r) => r !== l + 1);
            answer++;
        }
    });
    return answer;
}

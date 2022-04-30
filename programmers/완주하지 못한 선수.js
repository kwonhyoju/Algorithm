function solution(participant, completion) {
    //순서대로 만들고
    //이렇게 이름을 정렬 시키면 중복으로 이름이 나와도 다음 인덱스에서 걸러지기때문에 없는 이름이 됨
    participant.sort();
    completion.sort();

    for (var i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

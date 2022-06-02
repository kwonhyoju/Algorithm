function solution(s) {
    return s
        .split(" ")
        .map((v) => {
            //띄어쓰기를 기준으로 단어 단위로 잘라줌
            return v
                .split("")
                .map((w, idx) => {
                    //단어에서 홀짝 구분후 뭉치고
                    return idx % 2 ? w.toLowerCase() : w.toUpperCase();
                })
                .join("");
        })
        .join(" "); //묶인 단어에 공백 넣기
}

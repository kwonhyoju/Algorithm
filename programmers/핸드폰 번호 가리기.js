function solution(phone_number) {
    let lastWord = phone_number.slice(
        phone_number.length - 4,
        phone_number.length
    );
    let firstWord = "";

    for (let i = 0; i < phone_number.length - 4; i++) {
        firstWord += "*";
    }

    return firstWord + lastWord;
}

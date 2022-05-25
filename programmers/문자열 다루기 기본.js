function solution(s) {
    return (
        (4 === s.length || 6 === s.length) &&
        s.replace(/[^0-9]/g, "").length === s.length
    );
}

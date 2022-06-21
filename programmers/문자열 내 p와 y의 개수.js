function solution(s) {
    let test = s.split("").reduce(
        (acc, value) => {
            if (value === "p" || value === "P") {
                acc[0].push(value);
            } else if (value === "y" || value === "Y") {
                acc[1].push(value);
            }
            return acc;
        },
        [[], []]
    );
    return test[0].length === test[1].length;
    // s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

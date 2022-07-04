function solution(a, b) {
    let month = a < 10 ? "0" + a : a;
    let day = b < 10 ? "0" + b : b;
    let findDay = new Date("2016-0" + month + "-" + day).getDay();
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return week[findDay];
    // var date = new Date(2016, (a - 1), b);
    // return date.toString().slice(0, 3).toUpperCase();
}

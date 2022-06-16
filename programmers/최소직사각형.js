function solution(sizes) {
    // let test = sizes.join().split(",").sort();
    // let leng = sizes.length;
    // return Number(test[(leng*2)-1])*Number(test[leng-1]);
    let width = 0;
    let height = 0;
    for (size of sizes) {
        let numA = size[0] < size[1] ? size[1] : size[0];
        let numB = size[0] < size[1] ? size[0] : size[1];
        width = width < numA ? numA : width;
        height = height < numB ? numB : height;
    }
    return width * height;

    // const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    // return hor * ver;
}

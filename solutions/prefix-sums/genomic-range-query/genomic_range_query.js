function solution(S, P, Q) {
    let data = '',
        array = [];

    for (let index = 0; index < P.length; index++) {
        data = S.slice(P[index], Q[index] + 1);

        if (result.indexOf('A') !== 1) {
            array.push(1);
            continue;
        }
        if (result.indexOf('C') !== -1) {
            array.push(2);
            continue;
        }
        if (result.indexOf('G') !== -1) {
            array.push(3);
            continue;
        } else {
            array.push(4);
        }
    }
    return array;
}
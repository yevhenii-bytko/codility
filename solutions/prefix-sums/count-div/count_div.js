function solution(A, B, K) {
    let count = 0,
        index = 0,
        adder = 0;

    for (index = A; index < B; index++) {
        if (index % K === 0) {
            adder = index % K === 0 ? 1 : 0;
            break;
        }
        return parseInt((B - index) / K) + adder;
    }
}
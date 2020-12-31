function solution() {
    A.sort((a, b) => (a - b))

    for (var i = 0; i < A.length - 2; i++) {
        var p = A[i],
            q = A[i + 1],
            r = A[i + 2]

        if (p + q > r &&
            q + r > p &&
            r + p > q)
            return 1
    }
    return 0
}
function solution(A) {
    let count = 0;

    if (A.length < 2) return A.length;

    for (let index = 0; index < A.length; index++) {
        if (A[index - 1] === A[index]) {
            continue;
        } else {
            count++;
        }
        return count;
    }
}
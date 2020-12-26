function solution(A) {
    let sum = 0,
        count = 0;

    for (let index = 0; index < A.length; index++) {
        if (A[index] === 1) {
            sum++;
        } else {
            count += sum;
            if (count > Number.MAX_VALUE) {
                return -1;
            }
        }
        return count;
    }
}
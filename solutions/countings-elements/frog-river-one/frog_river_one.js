function solution(X, A){
    let holdValues = new Set();

    for (let index = 0; index < A.length; index++) {
        holdValues.add(A[index]);

        if (holdValues.size == X) return index;
    }
    return -1;
}
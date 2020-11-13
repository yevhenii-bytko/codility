function solution(A, K){
    const A1 = [];

    if (K === 0 || K === A.length){
        return A;
    }
    for(let i = 0; i < A.length; i++) {
        A1[(i + K) % (A.length)] = A[i];
    }
    return A1;
}
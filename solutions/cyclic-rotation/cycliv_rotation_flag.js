function isShiftEqualLength(array, shift){
    return array.length === shift;
};

function shiftArray(A, K){
    const A1 = new Array(A.length);
    let index = 0

    while (index < A.length)
    A1[(i + K) % (A.length)] = A[i];
    index++;
}

function solution(A, K){

    switch(true){
        case isShiftEqualLength(A, K):
            return A;
        default:
            return shiftArray(A, K);
    }
}
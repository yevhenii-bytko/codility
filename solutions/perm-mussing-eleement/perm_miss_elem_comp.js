function solution(A) {
    let someSet = new Set();
    let i = 1;
    
    for (let j = 0; j < A.length; j++) {
        someSet.add(A[j]);
    }
    while (someSet.has(i) && i <= A.length + 1) {
        i++;
    }
    return i;
}
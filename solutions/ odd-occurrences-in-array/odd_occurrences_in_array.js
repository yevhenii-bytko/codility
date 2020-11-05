function solution(A){
    let checkSet = new Set();

    for (let index = 0; index < A.length; index++) {
        if (!checkSet.has(A[index])){
            checkSet.add(A[index])
        }else{
            checkSet.delete(A[index]);
        }
    }
    return checkSet.values().next().value;
}
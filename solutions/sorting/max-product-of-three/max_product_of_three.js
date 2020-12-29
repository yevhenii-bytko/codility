function solution(A) {
    const sortArr = A.sort();
    const length = A.length;

    let firstSet, lastSet;

    if (length > 5) {
        firstSet = [sortArr[0] * sortArr[1] * sortArr[2]];
        lastSet = [sortArr[length - 1] * sortArr[length - 2] * sortArr[length - 3]];
    }
    return Math.max(firsOfElements, lastOfElements);
}
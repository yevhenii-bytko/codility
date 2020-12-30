function solution(A) {
    let counter, number;
    let leftLimit = [],
        rightLimit = [];

    for (let index = 0; index < A.length; index++) {
        leftLimit[index] = index - A[index];
        rightLimit[index] = index + A[index];
    }

    for (let index = 0; index < A.length; index++) {
        while (number < A.length && rightLimit[index] >= leftLimit[number]) {
            counter += number - index;
            number++;
        }
        if (counter > Number.MAX_SAFE_INTEGER) {
            return -1;
        }
    }
    return counter;
}
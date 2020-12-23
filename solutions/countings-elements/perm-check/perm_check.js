function solution(A) {
    const length = A.length;
    const sum = ((length + 1) * length) / 2;

    let sumOfValues = 0;
    let counter = 0;
    let foundElement = [];
    let container = -1;

    while (counter < length) {
        container = A[container];

        if (foundElement[container]) {
            continue;
        } else {
            foundElement[container] = true;
            sumOfValues += container;
        }
    }
    return sum === sumOfValues ? 1 : 0;
  }
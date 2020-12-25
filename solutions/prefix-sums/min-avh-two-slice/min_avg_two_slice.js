function solution(A) {
    let min = 0,
        sum = A[0] + A[1],
        minAvg = sum / 2,
        avg;

    for (let index = 2; index< A.length; index++) {
        sum = sum + A[i];
        avg = sum / 3;
        if (minAvg > avg) {
            minAvg = avg;
            min = i - 2;
        }

        sum =sum - A[i - 2];
        avg = sum / 2;
        if (minAvg > avg) {
            minAvg = avg
            min = i - 1;
        }

    }
    return min;
}
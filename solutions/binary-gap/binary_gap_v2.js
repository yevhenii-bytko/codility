function solution(N){
    const binary = (N >>> 0).toString(2);
    let finalGap = 0, tempGap = 0;

    for (let i = 0; i < binary.length; i++){
        if (binary[i] === '1') {
            if (tempGap > 0) {
                finalGap = Math.max(finalGap, tempGap);
            }
            tempGap = 0;
        } else {
            tempGap++;
        }
    }
    return finalGap;
}
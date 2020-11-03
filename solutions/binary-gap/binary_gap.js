function solution(N){
    const binaryStr = N.toString(2);
    let finalGap = 0, tempGap = 0;

    for (let i = 0; i < binaryStr.length; i++){
        if(binaryStr.charAt(i) === '1' && tempGap > 0){
            finalGap = Math.max(finalGap, tempGap);
            tempGap = 0;
        }
        if (binaryStr.charAt(i) === '0') {
            tempGap++;
        }
    }
    return finalGap;
};
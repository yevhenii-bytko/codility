
function isZero(number){
    return number == 0;
};

function isOne(number){
    return number == 1;
};

function isEmpty(gap){
    return gap === 0;
}

function toBinary(number){
    return (number >> 0).toString(2);
}

function solution(N){
    const binary = toBinary(N);
    let finalGap = 0, tempGap = 0;

    for (let i = 0; i < binary.length; i++) {
        switch(true){
            case isOne(binary[i]) && !isEmpty(tempGap): {
                finalGap = Math.max(finalGap, tempGap);
                tempGap = 0;
                break
            }
            case isZero(binary[i]):
                tempGap++;
                break;
        }
    }
    return finalGap;
}
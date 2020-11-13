function solution(A, K){
    const   receivedArray = A,
            length = receivedArray.length
    let     shift = K;
            finalArray = new Array(length);

    if (shift === length){
        return receivedArray;
    } else if (shift > length) {
        shift = shift - length;
    }

    for(let index = 0; index < length; index++){
        if (shift + index < length){
            finalArray[index] = receivedArray[length - shift + index];
        } else {
            finalArray[index] = receivedArray[shift + index - length];
        }
    }
    return finalArray;
}
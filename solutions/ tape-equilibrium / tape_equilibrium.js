function solution(A) {

    let sum = A.reduce((a, b) => a + b, 0);
    let difference = 0;
    let index = 0;

    for(let i=0; i<A.length; i++){
        let d = sum - A[i];
        if(diff < d){
            difference = d;
            index = i;
        }
    }

    return index;
}
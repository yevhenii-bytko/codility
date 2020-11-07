function solution (A) {

    if (A === undefined || A.length === 0){
        return -1;
    }

    const LENGTH = A.length;
    let count = (LENGTH + 1) * (LENGTH + 2) / 2;


    for (let index = 0; index < LENGTH; index++) {
        count -= A[index];
    }
    return count;
};
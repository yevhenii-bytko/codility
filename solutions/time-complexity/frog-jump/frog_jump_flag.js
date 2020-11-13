function isNoJump(position, finish){
    return position >= finish;
};

function isOneJump(position, finish, jumpLength){
    return jumpLength  >= finish - position;
};

function solution(X, Y, D){
    switch(true){
        case isNoJump(X, Y):
            return 0;
        case isOneJump(X, Y, D):
            return 1;
        default:
            let minimalJumps = parseInt((Y-X) / D);
            minimalJumps += ((Y-X)%D > 0 ? 1 : 0);
            return minimalJumps;
    }
}
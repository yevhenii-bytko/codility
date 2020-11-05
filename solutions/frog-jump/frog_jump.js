function solution(X, Y, D){
    if (X >= Y) {
        return 0
    } else if (X === Y) {
        return 0
    } else if (D >= (Y-X)) {
        return 1
    } else {
        minimalJumps = parseInt((Y-X) / D)
        minimalJumps += ((Y-X)%D > 0 ? 1 : 0)
        return minimalJumps
    }
}
function solution(N, A) {

    let counters = Array(N).fill(0)
    let max = 0
    let max_all = 0

    for(let i = 0; i < A.length; i++) {

        if(A[i] <= counters.length) {
            const c_index = A[i] - 1

            if(counters[c_index] < max_all) counters[c_index] = max_all

            const v = ++counters[c_index]

            max = v > max ? v : max
        }

        else max_all = max
    }

    if(max_all) counters = counters.map(v => v < max_all ? max_all : v)

    return counters
}
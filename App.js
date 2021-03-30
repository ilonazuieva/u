function isPowerOfTwo(n){
    let i = 1;
    while ( n >1 ){
        n = n/2;
    }

    return n===1;

}
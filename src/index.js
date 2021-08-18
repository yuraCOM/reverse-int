module.exports = function reverse (n) {
    n = n.toString().split('')
    console.log(n)
    // console.log(n[n.length - 1])
    if (n[0] === "-"){
        n.shift()
    }
    if(n[n.length - 1] === '0' ){
        n.pop()
    }
    n = Number(n.reverse().join(''))
    return n
}

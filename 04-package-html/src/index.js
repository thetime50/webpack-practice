// 06-打包html资源

function add(x, y) {
    return x + y
}

console.log(add(4, 5))

Array.from({ length: 3 }, (v, i, a) => {
    console.log(add(i, i))
    return i
})

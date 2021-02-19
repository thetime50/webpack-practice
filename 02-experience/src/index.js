// 04-webpack体验

import data from './data.json'
// import './index.css' // 不能引入css

console.log(data)

function add(x, y) {
    return x + y
}

console.log(add(4, 5))

Array.from({ length: 3 }, (v, i, a) => {
    console.log(add(i, i))
    return i
})


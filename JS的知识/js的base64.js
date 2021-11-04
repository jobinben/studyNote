
// 英文的转译为base64
let str = 'jobin'

let bs64 = btoa(str)

console.log('被转译后: ', bs64)

let preStr = atob(bs64)

console.log('被还原后: ', preStr)


// 有中文的转译为base64 需要提前转为url

let gkb_str = '嘉宾'

let gbk_bs64 = btoa(encodeURI(gkb_str))

console.log(gbk_bs64)

let gbk_str = decodeURI(atob(gbk_bs64))

console.log(gbk_str)
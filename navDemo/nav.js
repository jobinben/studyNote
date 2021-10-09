
/**
 * 获取本地缓存
 * @param {string} name 
 * @returns 缓存数据
 */
function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || null)
}

/**
 * 创建元素
 * @param {string} tagName 标签名称
 * @param {object} attribute 需要添加的属性
 * @returns 元素
 */
function createTag(tagName, attribute = {}) {
    let element = document.createElement(tagName)
    for(let key in attribute) {
        element[key] = attribute[key]
    }
    return element
}


const initImageUrl = 'https://i.loli.net/2021/09/29/MhWi3CBnrYG4Hlb.png'

// 编辑域名
function editDomain(e) {
    let key = e.target.id
    hash[key] = prompt('输入您的域名: ') || hash[key]
    localStorage.setItem('localData', JSON.stringify(hash))
    // 获取button同胞的上一个元素
    let preImage = e.target.previousSibling
    preImage.src = `http://${hash[key]}/favicon.ico`
    preImage.onerror =function(e) {
        e.target.src = initImageUrl
    }
}

// 添加Icon图片
function createImg(domain) {
    let img = createTag('img')
    if(domain) {
        img.src = `http://${domain}/favicon.ico`
    } else {
        img.src = initImageUrl
    }
    // 当图片请求失败
    img.onerror = function(e) {
        e.target.src = initImageUrl
    }
    return img
}



// 1. 初始化数据
let keys = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    length: 3
}

let hash = {
    q: 'qq.com',
    w: '52pojie.cn',
    e: 'h5.ele.me',
    n: 'nowcoder.com',
    m: 'nowcoder.com/ta/coding-interviews',
    g: 'gaitubao.com',
    r: 'ruike1.com',
    t: 'tuyoung.top',
    s: 'sm.ms'
}

let hashInLocalStorage = getFromLocalStorage('localData')

if (hashInLocalStorage) {
    hash = hashInLocalStorage
}




// 2. 生成键盘
for(let index = 0; index < keys['length']; index++) {
    let divWrapper = createTag('div', {className: 'row'})
    mainWrapper.appendChild(divWrapper)
    for(let i = 0; i < keys[index].length; i++) {
        let textKey = keys[index][i]
        let kbdx = createTag('kbd', {className: 'keyStyle'})
        let btn = createTag('button', {id: textKey, textContent: '编辑', onclick: editDomain})
        let span = createTag('span', {textContent: textKey})

        let img = createImg(hash[textKey])

        kbdx.appendChild(span)
        kbdx.appendChild(img)
        kbdx.appendChild(btn)
        divWrapper.appendChild(kbdx)
    }
}


document.onkeypress = function (e) {
    let key = e.key
    if (hash[key]) {
        window.open(`http://${hash[key]}`, '_blank')
    }
    console.log('url:', hash[key])
}
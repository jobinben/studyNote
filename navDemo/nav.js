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
    y: 'yuque.com/changyanwei-wlmrd/rbxc2v/bobswg',
    m: 'nowcoder.com/ta/coding-interviews',
    g: 'gaitubao.com',
    r: 'ruike1.com',
    t: 'tuyoung.top',
    s: 'sm.ms'
}

let hashInLocalStorage = JSON.parse(localStorage.getItem('localData') || null)

if (hashInLocalStorage) {
    hash = hashInLocalStorage
}

let index = 0
while (index < keys['length']) {
    let divWrapper = document.createElement('div')
    divWrapper.className = "row"
    mainWrapper.appendChild(divWrapper)

    let i = 0
    while (i < keys[index].length) {
        let kbdx = document.createElement('kbd')
        let span = document.createElement('span')
        let img = document.createElement('img')
        let textKey = keys[index][i]
        if(hash[textKey]) {
            img.src = `http://${hash[textKey]}/favicon.ico`
        } else {
            img.src = "//sm.ms/image/MhWi3CBnrYG4Hlb"
        }
        span.textContent = textKey
        kbdx.className = "keyStyle"
        let btn = document.createElement('button')
        btn.id = keys[index][i]
        btn.textContent = '编辑'
        btn.onclick = function (e) {
            let key = e.target.id
            hash[key] = prompt('输入您的域名: ') || hash[key]
            localStorage.setItem('localData', JSON.stringify(hash))
        }

        kbdx.appendChild(span)
        kbdx.appendChild(img)
        kbdx.appendChild(btn)
        divWrapper.appendChild(kbdx)
        i += 1
    }
    index += 1
}

document.onkeypress = function (e) {
    let key = e.key
    if (hash[key]) {
        window.open(`http://${hash[key]}`, '_blank')
    }
    console.log('url:', hash[key])
}
// 页面加载完成
setTimeout(() => {
    siteWelcome.classList.remove('active');
}, 1000);

window.onscroll = function () {
    if (window.scrollY > 60) {
        topNavBar.classList.add('active')
    } else {
        topNavBar.classList.remove('active')
    }

    // let specialTags = document.querySelectorAll('[data-x]')

    // console.log('window.scrollY: ', window.scrollY)
    // for (let i = 0; i < specialTags.length; i++) {
    //     console.log('specialTas', i, specialTags[i].offsetTop)
    // }
}

let liTags = document.getElementsByClassName('menuTigger')

for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (e) {
        let li = e.currentTarget
        li.classList.add('active')
    }

    liTags[i].onmouseleave = function (e) {
        let li = e.currentTarget
        li.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('.topNav > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        e.preventDefault();
        let a = e.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        // window.scrollTo(0, top - 80)
        slideAnimation(top - 80)
    }
}


function slideAnimation(targetTop) {
    let n = 25, // 一共动多少次
        duration = 500 / n,  // 多少时间动一次
        currentTop = window.scrollY, // 当前高度
        distance = (targetTop - currentTop) / n // 每次动多大的距离
    i = 0
    let timer = setInterval(() => {
        if (i >= n) {
            window.clearInterval(timer)
            return
        }
        i = i + 1
        window.scrollTo(0, currentTop + distance * i)
    }, duration)

}



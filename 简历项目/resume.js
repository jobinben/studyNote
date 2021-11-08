 // 页面加载完成
 setTimeout(() => {
    siteWelcome.classList.remove('active');
}, 1000);

window.onscroll = function() {
    if(window.scrollY > 60) {
        topNavBar.classList.add('active')
    } else {
        topNavBar.classList.remove('active')

    }
}

let liTags = document.getElementsByClassName('menuTigger')

for(let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function(e) {
        let li = e.currentTarget
        li.classList.add('active')
    }

    liTags[i].onmouseleave = function(e) {
        let li = e.currentTarget
        li.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('.topNav > ul > li > a')
for(let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function(e) {
        e.preventDefault();
        let a = e.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        window.scrollTo(0, top - 80)
    }
}
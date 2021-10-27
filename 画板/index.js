let drawFlag = false
let el = document.getElementById('cvs')
let ctx = el.getContext('2d');
let eraserEnabled = false // 是否开启橡皮擦
let eraserArea = 5 // 橡皮擦面积

// 自动设置画布宽高
autosetCanvasSize(el)
// 检查终端
checkFeature()
// 初始化画笔颜色
initPenColor()
// 监听工具
listenTool()



// 检查特性
function checkFeature() {
    if('ontouchstart' in document.body) {
        // 触摸屏
        // 监听触摸
        listenTouch(el, ctx)
    } else {
        // 非触摸屏
        // 监听鼠标
        listenMouse(el, ctx)
    }
}


function initPenColor() {
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'red'
}

function listenTool() {
    eraser.onclick = function () {
        eraserEnabled = true
        eraser.classList.add('active')
        pen.classList.remove('active')

    }
    pen.onclick = function () {
        eraserEnabled = false
        pen.classList.add('active')
        eraser.classList.remove('active')
    }

    red.onclick = function(){
        ctx.fillStyle = 'red'
        ctx.strokeStyle = 'red'
        red.classList.add('active')
        green.classList.remove('active')
        blue.classList.remove('active')
    }
    green.onclick = function(){
        ctx.fillStyle = 'green'
        ctx.strokeStyle = 'green'
        green.classList.add('active')
        red.classList.remove('active')
        blue.classList.remove('active')
    }
    blue.onclick = function(){
        ctx.fillStyle = 'blue'
        ctx.strokeStyle = 'blue'
        blue.classList.add('active')
        red.classList.remove('active')
        green.classList.remove('active')
    }

}

function listenTouch(canvas, ctx){
    let { lastPoint } = { x: undefined, y: undefined }
    canvas.ontouchstart = function (e) {
        
        let x = e.touches[0].clientX,
            y = e.touches[0].clientY;
        drawFlag = true
        lastPoint = { x, y }
        if (eraserEnabled) {
            ctx.clearRect(x, y, eraserArea, eraserArea)
            return;
        }
        drawCircle(x, y, 2) // 加上圆可以盖掉裂缝
    }
    // 移动鼠标
    canvas.ontouchmove = function (e) {
        let x = e.touches[0].clientX,
            y = e.touches[0].clientY;
        if (eraserEnabled && drawFlag) {
            ctx.clearRect(x, y, eraserArea, eraserArea)
            return;
        }
        if (drawFlag) {
            drawCircle(x, y, 2) // 加上圆可以盖掉裂缝
            let curPoint = { x, y }
            drawLine(lastPoint.x, lastPoint.y, curPoint.x, curPoint.y)
            lastPoint = curPoint // 起点等于上一次的终点
        }
    }
    // 抬起鼠标
    canvas.ontouchend = function (e) {
        drawFlag = false
    }
}

function listenMouse(canvas, ctx) {
    let { lastPoint } = { x: undefined, y: undefined }
    // 按下鼠标
    canvas.onmousedown = function (e) {
        let x = e.clientX,
            y = e.clientY;
        drawFlag = true
        lastPoint = { x, y }
        if (eraserEnabled) {
            ctx.clearRect(x, y, eraserArea, eraserArea)
            return;
        }
        drawCircle(x, y, 2) // 加上圆可以盖掉裂缝
    }
    // 移动鼠标
    canvas.onmousemove = function (e) {
        let x = e.clientX,
            y = e.clientY;
        if (eraserEnabled && drawFlag) {
            ctx.clearRect(x, y, eraserArea, eraserArea)
            return;
        }
        if (drawFlag) {
            drawCircle(x, y, 2) // 加上圆可以盖掉裂缝
            let curPoint = { x, y }
            drawLine(lastPoint.x, lastPoint.y, curPoint.x, curPoint.y)
            lastPoint = curPoint // 起点等于上一次的终点
        }
    }
    // 抬起鼠标
    canvas.onmouseup = function (e) {
        drawFlag = false
    }
}

function drawCircle(x, y, radius) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
}

function drawLine(x, y, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x, y) // 起点
    ctx.lineWidth = 5
    ctx.lineTo(x2, y2) //终点
    ctx.stroke() // 描线
    ctx.closePath()
}

function autosetCanvasSize(canvas) {
    function setCanvasSize() {
        let pageWidth = document.documentElement.clientWidth;
        let pageHeight = document.documentElement.clientHeight
        canvas.width = pageWidth
        canvas.height = pageHeight
    }
    setCanvasSize() // 设置canvas宽高
    window.onresize = function () { // 页面被放大缩小时更新
        setCanvasSize()
    }
}


// 冒泡
// 时间复杂度: O(n^2) 空间复杂度: O(1)


let arr = [2,15,3,1,6,7]
let temp, len = arr.length
for(let i = 0; i < len; i++ ){  
    for(let j = 0; j < (len - i - 1); j++) {
        if(arr[j] > arr[j+1]) {
             temp = arr[j]
             arr[j] = arr[j+1]
             arr[j+1] = temp
        }
    }
}
console.log(arr);


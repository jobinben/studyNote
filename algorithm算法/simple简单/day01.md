

# 斐波那契数列
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。n≤39

- 解法1: 动态规划
- 时间复杂度：O(n)
- 空间复杂度：O(1) 

```js
function Fibonacci(n) {
    // write code here
    // 1 1 2 3 5 8
    let a = 1,
        b = 1,
        i = 0,
        r = 0;
    if (n < 1) return 0;
    if (n <= 2) return 1
    for (i = 2; i < n; i++) {
        r = a + b
        b = a
        a = r
    }
    return r
}
```

- 解法2: 递归
- 时间复杂度： O(2^n)
- 空间复杂度：递归栈的空间

```js
// 公式: f(0) = 0 , f(1) = 1 , f(n) = f(n-1) + f(n - 2)
function Fibonacci(n)
{
    // write code here
    if(n === 0 || n === 1) return n;
    return Fibonacci(n -1) + Fibonacci(n - 2);
}
```

# 替换空格
请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

- 解法: replace() 和 正则表达式
- 时间复杂度: 猜测 O(n)
- 空间复杂度: 猜测 O(1)
  
```js
/**
* @param s string字符串 
* @return string字符串
*/
function replaceSpace( s ) {
    // write code here
    return s.replace(/\s/g, '%20')
}
```





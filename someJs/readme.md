### 一些有趣的js

> 实现console.log(mul(2)(3))  5

```javascript
function mul(x) {
  let res = y => mul(x * y)
  res.valueOf = () => x
  
  return res
}
console.log(mul(5)(7)(4)(1)(2))
```

> 找出某个数组的最大值，最小值

```javascript
let arr = [9,5,3,132,13,1,56,23,16465,1]

console.log(Math.max(...arr), Math.min(...arr))
console.log(Math.max.apply(null, arr), Math.min.apply(null, arr))
```

> 实现plus(2)(2)(16).toString()  20

```javascript
(function() {
  function plus(n) {
    let sum = n
    let _plus = n => {
      sum += n
      return _plus
    }
    _plus.toString = () => {
      return sum
    }
    return _plus
  }
  console.log(plus(1)(1)(2)(3)(5).toString())
})()
```

### 矩阵转置

```javascript
let arr = [
  [1,2,3,4],
  [5,6,7,8],
  [7,6,7,8],
  [8,5,3,3]
]
function changeArr(arr) {
  let temp
  for(let i = 1, len = arr.length; i < len; i++) {
    for(let j = 0; j < i; j++) {
      temp = arr[i][j]
      arr[i][j] = arr[j][i]
      arr[j][i] = temp
    }
  }
}
changeArr(arr)
console.log(arr)
```

### 冒泡排序

```javascript
/*
 * @冒泡排序
 * @遍历一个数组
 * @每遍历一次将最大值移动到最后 数组长度-1
 */
let arr = [23,564,132,56,45,165,7,89,1231,5646,1231]
function bubbleSort(arr) {
  let len = arr.length
  for(let i = len; i > 1; i--) {
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}
function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }
console.log(bubbleSort(arr))
```

### 二分查找

```javascript
/*
 * @二分查找
 * @设置上下限，通过基准来判断数的index
 */
function binSearch(arr, data) {
  let lower = 0
  let upper = arr.length - 1 
  while(lower <= upper) {
    let mid = Math.floor((lower + upper) / 2)
    if(arr[mid] < data) {
      lower = mid + 1
    } else if(arr[mid] > data) {
      upper = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
let arr = [7, 23, 45, 56, 89, 132, 165, 564, 1231, 1231, 5646]
console.log(binSearch(arr, 45))
```

### 类的继承

```javascript
/*
 * @类的继承
 */
function A(name, age) {
  this.name = name
  this.age = age
}
A.prototype.say = function() {
  console.log(this.name, this.age)
}
function B(name, age, skill) {
  A.apply(this, [name, age])
  this.skill = skill
}
B.prototype = Object.create(A.prototype)
B.prototype.toSkill = function() {
  console.log(this.skill)
}
let c = new B('nico', 12, 'javascript')
c.say()
c.toSkill()
```

### 闭包

```javascript
/*
 * @闭包
 */
for(var i = 0; i < 10; i++) {
  (function(i){setTimeout(function(){
    console.log(i)
  }, 1000 * i)})(i)
}
```

### repeat函数

> function repeat (func, times, wait) {
> }
> // 这个函数能返回一个新函数，比如这样用
> var repeatedFun = repeat(alert, 10, 5000)
> 调用这个 repeatedFun ("hellworld")
> 会alert十次 helloworld, 每次间隔5秒
>

```javascript
function repeat (func, times, wait) {
  return function() {
    let num = 0
    let _arguments = arguments
    function handler() {
      if(num < times) {
        num++
        func.apply(null, _arguments)
        setTimeout(handler, wait)
      }
    }
    setTimeout(handler, wait)
  }
}
// 这个函数能返回一个新函数，比如这样用
var repeatedFun = repeat(console.log, 3, 1000)
repeatedFun ("hellworld")
```

### stringconcat函数

> // 题目要求！
> var result1 = stringconcat("a", "b")  //result1 = "a+b"
> var stringconcatWithPrefix = stringconcat.prefix("hellworld");
> var result2 = stringconcatWithPrefix("a", "b")  // result2 = "hellworld+a+b"

```javascript
function stringconcat() {
  return Array.prototype.slice.call(arguments).join('+')
}
stringconcat.prefix = function (str) {
  return function() {
    let arr = [str].concat(Array.prototype.slice.call(arguments))
    return stringconcat.apply(null, arr)
  }
}
```

### 今日头条两道js题
#### 回文

> 题目要求：
> 现在有一个字符串，你要对这个字符串进行 n 次操作，每次操作给出两个数字：(p, l)表
> 示当前字符串中从下标为 p 的字符开始的长度为 l 的一个子串。你要将这个子串左右翻转后插在这
> 个子串原来位置的正后方，求最后得到的字符串是什么。字符串的下标是从 0 
> 开始的，你可以从样例中得到更多信息。
> 输入描述:
> 每组测试用例仅包含一组数据，每组数据第一行为原字符串，长度不超过 10 
> ，仅包含大小写字符与数字。接下来会有一个数字 n 表示有 n 个操作，再接下来有 n 
> 行，每行两个整数，表示每次操作的(p , l)。
> 保证输入的操作一定合法，最后得到的字符串长度不超过 1000。
> 输出描述:
> 输出一个字符串代表最后得到的字符串。
> 输入例子:
> ab
> 2
> 0 2
> 1 3
> 输出例子:
> abbaabb

```javascript
function palindromeDecoding(str) {
  return function(p ,l) {
    let newStr = str.split('').slice(p ,l).reverse().join('')
    str += newStr
    console.log(str)
  }
}
let start = palindromeDecoding('ab')
start(0, 2)
start(1, 3)
```

#### 出专辑

> 题目要求：
> 你作为一名出道的歌手终于要出自己的第一份专辑了，你计划收录 n 首歌而且每首歌的长度都是 s 
> 秒，每首歌必须完整地收录于一张 CD 当中。每张 CD 的容量长度都是 L 
> 秒，而且你至少得保证同一张 CD 内相邻两首歌中间至少要隔 1 秒。为了辟邪，你决定任意一张 CD 
> 内的歌数不能被 13 这个数字整除，那么请问你出这张专辑至少需要多少张 CD ？
> 输入描述:
> 每组测试用例仅包含一组数据，每组数据第一行为三个正整数 n, s, L。 保证 n ≤ 100 , s ≤ L 
> ≤ 10000 
> 输出描述:
> 输出一个整数代表你至少需要的 CD 数量。
> 输入例子:
> 7 2 6
> 输出例子:
> 4

```javascript
/*
 * @13整除尚未完成
 */
function putCd(n, s, l) {
   let cds = 0
   let i = n
   while(n > 1) {
     if((i * s + (i-1)) <= l) {
     cds += 1
     n = n - i
     i = n
    } else {
      i--
    }
   }
  if(n == 1) cds += 1
    return cds
}
console.log(putCd(7, 2, 6))
```

### 奇舞团
#### 跑马灯

```html
 <ul id="traffic">
    <li><span></span></li>
    <li><span></span></li>
    <li><span></span></li>
  </ul>
  ```

  ```css
  #traffic li 
  display: block
#traffic span
  display: inline-block
  width: 50px
  height: 50px
  background-color: #ccc
  border-radius: 50%
  margin: 5px
#traffic.wait li:nth-child(1) span
  background-color: #fff
#traffic.stop li:nth-child(2) span
  background-color: #f00
#traffic.pass li:nth-child(3) span
  background-color: #0f0
  ```

```javascript
let traffic = document.getElementById('traffic')
function start(traffic, stateList) {
  let currentStateIndex = 0
  setInterval(function() {
    let state = stateList[currentStateIndex]
    traffic.className = state
    currentStateIndex = (currentStateIndex + 1) % stateList.length
  }, 2000)
}
start(traffic, ['wait', 'stop', 'pass'])
```

#### 数组取值为10

```javascript
let list = [11,4,9,3,-1,-3,6,7,9,13]
function map(list) {
  let res = []
  /* 
   * @排序
   */
  list = list.sort((a, b) => a-b)
  console.log(list)
  /*
   * @二分算法
   */
  for(let i = 0, j = list.length - 1; i < j;) {
    let a = list[i], b = list[j]
    if(a + b === 10) {
      res.push([a, b])
      i++
      j--
    }else if(a + b < 10) {
      i++
    }else {
      j--
    }
  }
  return res
}
console.log(map(list))
```
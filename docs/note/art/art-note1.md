# ES6的新语法与特性总结(一)

## let 与 const

ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效。

特点：
- 块级作用域
- 不存在变量提升
- 暂时性死区
- 不允许重复声明

`const`声明一个只读的常量。一旦声明，常量的值就不能改变。
`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

特点：
- 只声明不赋值，就会报错
- 块级作用域
- 不存在变量提升
- 暂时性死区
- 不允许重复声明

## 解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

```js
let [a, b, c] = [1, 2, 3];
```

## 模板字符串

语法：使用(`)包裹字符串、使用${}插入变脸、函数等。。。

```js
// 普通字符串
`In JavaScript '\n' is a line-feed.` // 多行字符串
`In JavaScript this is
 not legal.`;

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
let name = "Bob",
  time = "today";
`Hello ${name}, how are you ${time}?`;
```

## 数值的扩展

### Number.isFinite(), Number.isNaN()

ES6 在Number对象上，新提供了`Number.isFinite()`和`Number.isNaN()`两个方法。

`Number.isFinite()`用来检查一个数值是否为有限的（finite），即不是Infinity。

`Number.isNaN()`用来检查一个值是否为NaN。

### Number.parseInt(), Number.parseFloat()

ES6 将全局方法`parseInt()`和`parseFloat()`，移植到Number对象上面，行为完全保持不变。

### Number.isInteger()

`Number.isInteger()`用来判断一个数值是否为整数。

## Math 对象的扩展

### Math.trunc()

`Math.trunc`方法用于去除一个数的小数部分，返回整数部分。
对于非数值，`Math.trunc`内部使用Number方法将其先转为数值。
对于空值和无法截取整数的值，返回NaN。

### Math.sign()

`Math.sign`方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

它会返回五种值。

- 参数为正数，返回+1；
- 参数为负数，返回-1；
- 参数为 0，返回0；
- 参数为-0，返回-0;
- 其他值，返回NaN。

### Math.cbrt()

`Math.cbrt()`方法用于计算一个数的立方根。

## 指数运算符

ES2016 新增了一个指数运算符（`**`）。

```js
2 ** 2; // 4
2 ** 3; // 8
```

## 函数参数的默认值

ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。

ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

```js
function log(x, y = "World") {
  console.log(x, y);
}

log("Hello"); // Hello World
log("Hello", "China"); // Hello China
log("Hello", ""); // Hello
```

### 函数的 length 属性

指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

### rest 参数

ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

### name 属性

函数的name属性，返回该函数的函数名。

```js
function foo() {}
foo.name; // "foo"
```

Function构造函数返回的函数实例，name属性的值为`anonymous`。

```js
new Function().name; // "anonymous"
```

bind返回的函数，name属性值会加上bound前缀。

## 箭头函数

ES6 允许使用“箭头”（`=>`）定义函数。

```js
var f = (v) => v;

// 等同于
var f = function (v) {
  return v;
};
```

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

### 使用注意点

箭头函数有几个使用注意点。

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

## 扩展运算符

扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

```js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```

## Array.from()

Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

```js
let arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。

## Array.of()

Array.of方法用于将一组值，转换为数组。

```js
Array.of(3, 11, 8); // [3,11,8]
Array.of(3); // [3]
Array.of(3).length; // 1
```

## 数组实例的 copyWithin()

数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

```js
Array.prototype.copyWithin(target, (start = 0), (end = this.length));
```

它接受三个参数。

- target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
- start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
- end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

## 数组实例的 find() 和 findIndex()

数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

```js
[1, 4, -5, 10].find((n) => n < 0);
// -5
```

数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

```js
[1, 5, 10, 15].findIndex(function (value, index, arr) {
  return value > 9;
}); // 2
```

这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。

另外，这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足。

```js
[NaN]
  .indexOf(NaN)
  // -1

  [NaN].findIndex((y) => Object.is(NaN, y));
// 0
```

上面代码中，indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。

## 数组实例的 fill()

fill方法使用给定值，填充一个数组。

```js
["a", "b", "c"].fill(7);
// [7, 7, 7]

new Array(3).fill(7);
// [7, 7, 7]
```

fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。

## 数组实例的 entries()，keys() 和 values()

ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

```js
for (let index of ["a", "b"].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ["a", "b"].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ["a", "b"].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

## 数组实例的 includes()

Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。ES2016 引入了该方法。

```js
[1, 2, 3]
  .includes(2) // true
  [(1, 2, 3)].includes(4) // false
  [(1, 2, NaN)].includes(NaN); // true
```

该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。

# 数组实例的 flat()，flatMap()

数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

```js
[1, 2, [3, 4]].flat();
// [1, 2, 3, 4]
```

上面代码中，原数组的成员里面有一个数组，flat()方法将子数组的成员取出来，添加在原来的位置。

flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为 1。

flat()的参数为 2，表示要“拉平”两层的嵌套数组。

如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。

flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。

flatMap()方法的参数是一个遍历函数，该函数可以接受三个参数，分别是当前数组成员、当前数组成员的位置（从零开始）、原数组。

flatMap()方法还可以有第二个参数，用来绑定遍历函数里面的this。

## 数组的空位

数组的空位指，数组的某一个位置没有任何值。比如，Array构造函数返回的数组都是空位。

```js
Array(3); // [, , ,]
```

上面代码中，Array(3)返回一个具有 3 个空位的数组。

注意，空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点。

ES5 对空位的处理，已经很不一致了，大多数情况下会忽略空位。

- forEach(), filter(), reduce(), every() 和some()都会跳过空位。
- map()会跳过空位，但会保留这个值
- join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。

## Array.prototype.sort() 的排序稳定性

排序稳定性（stable sorting）是排序算法的重要属性，指的是排序关键字相同的项目，排序前后的顺序不变。

```js
const arr = ["peach", "straw", "apple", "spork"];

const stableSorting = (s1, s2) => {
  if (s1[0] < s2[0]) return -1;
  return 1;
};

arr.sort(stableSorting);
// ["apple", "peach", "straw", "spork"]
```

上面代码对数组arr按照首字母进行排序。排序结果中，straw在spork的前面，跟原始顺序一致，所以排序算法stableSorting是稳定排序。

常见的排序算法之中，插入排序、合并排序、冒泡排序等都是稳定的，堆排序、快速排序等是不稳定的。不稳定排序的主要缺点是，多重排序时可能会产生问题。假设有一个姓和名的列表，要求按照“姓氏为主要关键字，名字为次要关键字”进行排序。开发者可能会先按名字排序，再按姓氏进行排序。如果排序算法是稳定的，这样就可以达到“先姓氏，后名字”的排序效果。如果是不稳定的，就不行。

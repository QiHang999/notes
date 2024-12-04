# JS 中的 this 指向问题

this 的特性：

- **this永远指向一个对象**；

- **this的指向完全取决于函数调用的位置**；

原理

```js
function fun(){
    console.log(this.s);
}
​
var obj = {
    s: '1',
    f: fun
}

var s = '2';
​
obj.f(); //1
fun(); //2
```
​
上述代码中，fun函数被调用了两次，显而易见的是两次的结果不一样；

obj.f()的调用中，因为运行环境在obj对象内，因此函数中的this指向对象obj;

而在全局作用域下调用 fun() ，函数中的 this 就会指向全局作用域对象window;

我们应该知道，在JS中，数组、函数、对象都是引用类型，在参数传递时也就是引用传递；

上面的代码中，obj 对象有两个属性，但是属性的值类型是不同的，在内存中的表现形式也是不同的；

因为函数在js中既可以当做值传递和返回，也可当做对象和构造函数，所有函数在运行时需要确定其当前的运行环境，this就出生了，所以，this会根据运行环境的改变而改变，同时，函数中的this也只能在运行时才能最终确定运行环境；

## 事件绑定中的this

事件绑定共有三种方式：行内绑定、动态绑定、事件监听；

- 行内绑定的两种情况：

```html
<input type="button" value="按钮" onclick="clickFun()">

<script>
    function clickFun(){
        this // 此函数的运行环境在全局window对象下，因此this指向window;
    }
</script>

<input type="button" value="按钮" onclick="this">
<!-- 运行环境在节点对象中，因此this指向本节点对象 -->
```

行内绑定事件的语法是在html节点内，以节点属性的方式绑定，属性名是事件名称前面加'on'，属性的值则是一段可执行的 JS 代码段；而属性值最常见的就是一个函数调用；

当事件触发时，属性值就会作为JS代码被执行，当前运行环境下没有clickFun函数，因此浏览器就需要跳出当前运行环境，在整个环境中寻找一个叫clickFun的函数并执行这个函数，所以函数内部的this就指向了全局对象window；如果不是一个函数调用，直接在当前节点对象环境下使用this，那么显然this就会指向当前节点对象；

- 动态绑定与事件监听：

```html
<input type="button" value="按钮" id="btn">
<script>
    var btn = document.getElementById('btn');
    btn.onclick = function(){
        this ;  // this指向本节点对象
    }
</script>
```

因为动态绑定的事件本就是为节点对象的属性(事件名称前面加'on')重新赋值为一个匿名函数，因此函数在执行时就是在节点对象的环境下，this自然就指向了本节点对象；

## 构造函数中的this

```js
function Pro(){
    this.x = '1';
    this.y = function(){};
}
var p = new Pro();
```

上述代码中，可以分为五个阶段：

- 1、创建一个空对象
- 2、将本对象的原型指向 Pro.prototype(对象继承Pro.prototype)
- 3、将构造函数中的this指向本对象
- 4、执行构造函数代码，为对象复制 x="1"  y=function 地址
- 5、返回本对象地址

new 一个构造函数并执行函数内部代码的过程就是这个五个步骤，当 JS 引擎指向到第3步的时候，会强制的将this指向新创建出来的这个对象；

## window定时器中的this

```js
var obj = {
  fun: function() { 
    this;
  }
}
setInterval(obj.fun,1000);      // this指向window对象
setInterval('obj.fun()',1000);  // this指向obj对象
```

`setInterval()` 是window对象下内置的一个方法，接受两个参数，第一个参数允许是一个函数或者是一段可执行的 JS 代码，第二个参数则是执行前面函数或者代码的时间间隔；

在上面的代码中，`setInterval(obj.fun,1000)` 的第一个参数是obj对象的fun ，因为 JS 中函数可以被当做值来做引用传递，实际就是将这个函数的地址当做参数传递给了 setInterval 方法，换句话说就是 setInterval 的第一参数接受了一个函数，那么此时1000毫秒后，函数的运行就已经是在window对象下了，也就是函数的调用者已经变成了window对象，所以其中的this则指向的全局window对象；

而在 `setInterval('obj.fun()',1000)` 中的第一个参数，实际则是传入的一段可执行的 JS 代码；1000毫秒后当 JS 引擎来执行这段代码时，则是通过 obj 对象来找到 fun 函数并调用执行，那么函数的运行环境依然在 对象 obj 内，所以函数内部的this也就指向了 obj 对象；

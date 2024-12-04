# JS中apply、call和bind的区别

> 在JS中，这三者都是用来改变函数的`this`对象的指向的，他们有什么样的区别呢。
> 在说区别之前还是先总结一下三者的相似之处：
> 1、都是用来改变函数的`this`对象的指向的。
> 2、第一个参数都是`this`要指向的对象。
> 3、都可以利用后续参数传参。

那么他们的区别在哪里的，先看一个例子。

```js
var obj1 = {
  name: "小王",
  gender: "男",
  age: 24,
  say: function() {
    alert(this.name + " , " + this.gender + " ,今年" + this.age)              
  }
}
var obj2 = {
  name: "小红",
  gender: "女",
  age: 18
}
obj1.say();
// 本身没什么好说的，显示的肯定是小王，男，今年24
```

那么如何用`obj1`的`say`方法来显示`obj2`的数据呢?

- 对于call可以这样：

```js
obj1.say.call(obj2);
```

- 对于apply可以这样：

```js
obj1.say.apply(obj2);
```

- 对于bind来说需要这样：

```js
obj1.say.bind(obj2)();

// 如果直接写obj1.say.bind(obj2)是不会有任何结果的，看到区别了吗？call和apply都是对函数的直接调用，而bind方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。
```

那么call和apply有什么区别呢？我们把例子稍微改写一下。
```js
var obj1 = {
  name: "小王",
  gender: "男",
  age: 24,
  say: function(school, grade) {
    alert(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade)              
  }
}
var obj2 = {
  name: "小红",
  gender: "女",
  age: 18
}
```

可以看到`say`方法多了两个参数，我们通过`call/apply`的参数进行传参。

- 对于call来说是这样的

```js
obj1.say.call(obj2,"实验小学","六年级");
```   

- 对于apply来说是这样的

```js
obj1.say.apply(obj2,["实验小学","六年级"]);
```

看到区别了吗，**call后面的参数** 与say方法中是一一对应的，而apply的第二个参数是一个 **数组**，数组中的元素是和say方法中一一对应的，这就是两者最大的区别。

- 对于bind怎么传参呢？它可以像`call`那样传参。

```js
obj1.say.bind(obj2,"实验小学","六年级")();
```

但是由于`bind`返回的仍然是一个函数，所以我们还可以在调用的时候再进行传参。

```js
obj1.say.bind(obj2)("实验小学","六年级");
```

# Python3 基础语法

## 编码

默认情况下，Python 3 源码文件以 UTF-8 编码，所有字符串都是 unicode 字符串。

## 标识符

- 第一个字符必须是字母表中字母或下划线'_'。
- 标识符的其他的部分有字母、数字和下划线组成。
- 标识符对大小写敏感。
在 Python 3中，非 ASCII 编码的标识符也是允许的了。

## Python 保留字

保留字即关键字，我们不能把它们用作任何标识符名称。Python 的标准库提供了一个关键词模块，我们可以使用它来查看当前版本的所有保留字：

```python
['False', 'None', 'True', '__peg_parser__', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

## 注释

Python 中单行注释以 # 开头，多行注释采用三对单引号（'''）或者三对双引号（"""）将注释括起来。

```python
#这是单行注释

"""
这是多行注释
这是多行注释
"""
'''
也可以用三个单引号来进行多行注释
'''
```

> 实际上python注释只有一种，就是单行注释，多行注释的这种使用方法类似于java的javadoc，三引号的这种使用方法实际上是用来声明多行长字符串的。

## 缩进

Python 最具特色的就是使用缩进来表示代码块。缩进的空格数是可变的，但是同一个代码块的语句必须包含相同的缩进空格数。

## 标准数据类型

Python 中有六个标准的数据类型：

- Number（数字）
- String（字符串）
- List（列表）
- Tuple（元组）
- Set（集合）
- Dictionary（字典）

Python3 的六个标准数据类型中：

- 不可变数据（3 个）：Number（数字）、String（字符串）、Tuple（元组）；
- 可变数据（3 个）：List（列表）、Dictionary（字典）、Set（集合）。

> 可变数据和不可变数据是相对于引用地址来说的，不可变数据类型不允许变量的值发生变化，如果改变了的变量的值，相当于新建了一个对象，而对于相同的值的对象，内部会有一个引用计数来记录有多少个变量引用了这个对象。可变数据类型允许变量的值发生变化。对变量进行修改操作只会改变变量的值，不会新建对象，变量引用的地址也不会发生变化，不过对于相同的值的不同对象，在内存中则会存在不同的对象，即每个对象都有自己的地址，相当于内存中对于同值的对象保存了多份，这里不存在引用计数，是实实在在的对象。
> 简单地讲，可变数据和不可变数据的“变”是相对于引用地址来说的，不是不能改变其数据，而是改变数据的时候会不会改变变量的引用地址。

## 类型判断

python可以用type函数来检查一个变量的类型，使用方法如下：

```python
x = "W3Cschool"
type(x)
<type 'str'>
x=100
type(x)
<type 'int'>
x=('1','2','3')
type(x)
<type 'tuple'>
x = ['1','2','3']
type(x)
<type 'list'>
```

## 字符串

- Python 中单引号和双引号使用完全相同，但单引号和双引号不能匹配。
- 使用三对引号('''或""")可以囊括一个多行字符串。
- 与其他语言相似，python也使用 '\'作为转义字符
- 自然字符串， 通过在字符串前加 r 或 R。 如 r"this is a line with \n" 则\n会显示，并不是换行。
- Python 允许处理 unicode 字符串，加前缀 u 或 U， 如 u"this is an unicode string"。
- 字符串是不可变的。
- 按字面意义级联字符串，如"this " "is " "string"会被自动转换为this is string。
- 字符串可以用 + 运算符连接在一起，用 * 运算符重复。
- Python 中的字符串有两种索引方式，从左往右以 0 开始，从右往左以 -1 开始。
- Python中的字符串不能改变（详见上一小点的引用）。
- Python 没有单独的字符类型，一个字符就是长度为 1 的字符串。
- 字符串的截取的语法格式如下：变量 [头下标: 尾下标: 步长]。

> 关于字符串的更多内容，请前往字符串小节进行学习。

```python
word = '字符串'
sentence = "这是一个句子。"
paragraph = """这是一个段落，
可以由多行组成"""
```

实例：

```python
#!/usr/bin/python3
 
str='W3Cschool'
 
print(str)                 # 输出字符串
print(str[0:-1])           # 输出第一个到倒数第二个的所有字符
print(str[0])              # 输出字符串第一个字符
print(str[2:5])            # 输出从第三个开始到第五个的字符
print(str[2:])             # 输出从第三个开始后的所有字符
print(str[1:5:2])          # 输出从第二个开始到第五个且每隔两个的字符
print(str * 2)             # 输出字符串两次
print(str + '你好')         # 连接字符串
 
print('------------------------------')
 
print('hello\nW3Cschool')      # 使用反斜杠(\)+n转义特殊字符
print(r'hello\nW3Cschool')     # 在字符串前面添加一个 r，表示原始字符串，不会发生转义
```

以上实例输出结果：

```python
W3Cschool
W3Cschoo
W
Csc
Cschool
3s
W3CschoolW3Cschool
W3Cschool你好
------------------------------
hello
W3Cschool
hello\nW3Cschool
```

这里的 r 指 raw，即 raw string，会自动将反斜杠转义，例如：

```python
print('\n')       # 输出空行
print(r'\n')      # 输出 \n
\n
```

## 空行

函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用两行空行分隔，以突出函数入口的开始。

空行与代码缩进不同，空行并不是 Python 语法的一部分。书写时不插入空行，Python 解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。

记住：空行也是程序代码的一部分。

> 在PEP8中介绍了一些python代码的格式，其中介绍了函数之间要有两行空行，如果python代码没有使用两行空行的话，部分IDE会出现修改提示（比如pycharm）。这样的代码不影响运行，但对于代码阅读不利，

## 输入&等待用户输入
input函数可以用来接受输入，它可以传入一个字符串，当input函数调用的时候，会在控制台打印这个字符串（所以这个字符串通常被用来做输入的提示信息）。

> input函数会读取输入内容直到读到回车，也就是说，内容输入完毕后要按回车键才能执行。

```python
input("这是一个简单的input信息") # 这是一个简单的input样例，他输出input信息并接受一个字符串
x=input("请输入X的值：") # 这是一个常见的input样例，他输出提示信息，然后接受一个字符串并将值传递给一个变量X
print(x) # 打印变量，可以看到输入的x的值
print(type(x)) #查看这个变量的类型

x = int(input("请输入一个数值：")) # 配合强制类型转换，可以将字符串转变为int类型（字符串类型不能参与计算）
# 也可以分步写成：
#x=input("请输入一个数值：") # 接受一个字符串
#x=int(x)   #将x转换为int型

# 这里强制转换也可以转换为其他类型，详细的转换方法请参考基本数据类型的强制转换相关内容

print(x) # 打印变量，可以看到输入的x的值
print(type(x)) #查看这个变量的类型

input("\n\n按下 enter 键后退出。") 
# 其实这里并没有接受任何内容，input函数以enter作为结尾，所以只有输入回车后才会结束input函数
```

以上代码中 ，"\n\n"在结果输出前会输出两个新的空行。一旦用户按下 enter 键时，程序将退出。

## 同一行显示多条语句

Python 可以在同一行中使用多条语句，语句之间使用分号 (;) 分割，以下是一个简单的实例：

实例:

```python
#!/usr/bin/python3
 
import sys; x = 'W3Cschool'; sys.stdout.write(x + '\n')
```

使用脚本执行以上代码，输出结果为：

```python
W3Cschool
```

使用交互式命令行执行，输出结果为：

```python
import sys; x = 'W3Cschool'; sys.stdout.write(x + '\n')
W3Cschool
10
```

此处的 10 表示字符数。

> python以回车作为语句结束的标志，一行一句语句的特色使得Python更加易读，而在一行中显示多条语句的这种行为会破坏python的可读性，不建议使用！

## 多个语句构成代码组

缩进相同的一组语句构成一个代码块，我们称之代码组。

像 if、while、def 和 class 这样的复合语句，首行以关键字开始，以冒号 ( : ) 结束，该行之后的一行或多行代码构成代码组。

我们将首行及后面的代码组称为一个子句 (clause)。

如下实例：

```python
if expression : 
  suite
elif expression : 
  suite 
else : 
  suite
```

## print 输出

print函数是python的基本输出函数，他可以将变量输出（或者说，打印）到控制台。在第一个python程序中，我们就用到了print函数：

```python
#!/usr/bin/python3
print("Hello, World!") #"Hello,World!"是一个字符串变量
str = "Hello,World!"
print(str) #上一种helloworld的另一种写法
```

print 默认输出是换行的，如果要实现不换行需要在变量末尾加上 end=""：

实例:

```python
#!/usr/bin/python3
 
x="a"
y="b"
# 换行输出
print( x )
print( y )
 
print('---------')
# 不换行输出
print( x, end=" " )
print( y, end=" " )
print()
```

以上实例执行结果为：

```python
a
b
---------
a b
```

> 关于print的内容，本章只是粗略介绍，目的是为了能够基础使用print函数。后续章节中有print函数的详细介绍。

## import 与 from...import

在 Python 用 import 或者 from...import 来导入相应的模块。

将整个模块 (somemodule) 导入，格式为：​ `import somemodule​`

从某个模块中导入某个函数,格式为：​ `from somemodule import somefunction​`

从某个模块中导入多个函数,格式为：​ `from somemodule import firstfunc, secondfunc, thirdfunc​`

将某个模块中的全部函数导入，格式为：​ `from somemodule import *​`

## 导入 sys 模块

```python
import sys
print('================Python import mode==========================')
print ('命令行参数为:')
for i in sys.argv:
    print (i)
print ('\n python 路径为',sys.path)
```

## 导入 sys 模块的 argv,path 成员

```python
from sys import argv,path  #  导入特定的成员
 
print('================python from import===================================')
print('path:',path) # 因为已经导入path成员，所以此处引用时不需要加sys.path
```

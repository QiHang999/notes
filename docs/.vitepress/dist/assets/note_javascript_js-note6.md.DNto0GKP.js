import{_ as a,c as s,j as e,a as n,o as r}from"./chunks/framework.C2O9Ofdp.js";const m=JSON.parse('{"title":"Js 的函数节流和函数防抖的区别","description":"","frontmatter":{},"headers":[],"relativePath":"note/javascript/js-note6.md","filePath":"note/javascript/js-note6.md","lastUpdated":null}'),o={name:"note/javascript/js-note6.md"};function l(i,t,c,d,p,u){return r(),s("div",null,t[0]||(t[0]=[e("h1",{id:"js-的函数节流和函数防抖的区别",tabindex:"-1"},[n("Js 的函数节流和函数防抖的区别 "),e("a",{class:"header-anchor",href:"#js-的函数节流和函数防抖的区别","aria-label":'Permalink to "Js 的函数节流和函数防抖的区别"'},"​")],-1),e("ul",null,[e("li",null,"函数节流是指一定时间内 js 方法只执行一次。"),e("li",null,"函数防抖是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次")],-1),e("p",null,"函数节流是声明一个变量当标志位，记录当前代码是否在执行，如果正在执行，取消这次方法执行，直接 return，如果空闲，正常触发方法执行函数防抖是需要一个延时器来辅助实现，延迟执行需要执行的代码，如果方法多次触发，把上次记录的延迟执行代码用 cleartimeout 清除掉， 重新开始，如果计时完毕，没有方法来访问触发，则执行代码",-1)]))}const f=a(o,[["render",l]]);export{m as __pageData,f as default};

# CSS下的buttn（一）

## 示例

<center>
  <button class="my-btn">Hover Me!</button>
</center>


<style>
.my-btn {
  width: 130px;
  height: 40px;
  font-size: 1.1em;
  cursor: pointer;
  background-color: #171717;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: all .4s;
}

.my-btn:hover {
  border-radius: 5px;
  transform: translateY(-10px);
  box-shadow: 0 7px 0 -2px #f85959,
    0 15px 0 -4px #39a2db,
    0 16px 10px -3px #39a2db;
}

.my-btn:active {
  transition: all 0.2s;
  transform: translateY(-5px);
  box-shadow: 0 2px 0 -2px #f85959,
    0 8px 0 -4px #39a2db,
    0 12px 10px -3px #39a2db;
}
</style>

## 代码

```html
<button class="my-btn">Hover Me!</button>
```

```css
.my-btn {
  width: 130px;
  height: 40px;
  font-size: 1.1em;
  cursor: pointer;
  background-color: #171717;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: all .4s;
}

.my-btn:hover {
  border-radius: 5px;
  transform: translateY(-10px);
  box-shadow: 0 7px 0 -2px #f85959,
    0 15px 0 -4px #39a2db,
    0 16px 10px -3px #39a2db;
}

.my-btn:active {
  transition: all 0.2s;
  transform: translateY(-5px);
  box-shadow: 0 2px 0 -2px #f85959,
    0 8px 0 -4px #39a2db,
    0 12px 10px -3px #39a2db;
}
```

# winxp_df




## Introduction
* 获取时间，转化时间格式，将时间格式化成自己需要的样式：


1. 2017年01月11日
2. 2017年01月11日 18:11:20
3. 2017-01-11 18:11:20
4. 2017/01/11 18:11:20
5. ...



## Install  
* `npm install format-moment`
* `bower install format-moment`

## Usage
```javascript
const formatMoment = require('format-moment');

console.log(formatMoment.getTime('xxxx-xx-xx xx:xx:xx'));

console.log(formatMoment.formatTime({
    date: new Date('2018-02-03 10:05:05'),
    format: 'xxxx年xx月xx日 xx:xx:xx'
}));
```

## Api

```

getTime 获取当前的时间  

formatTime 过滤时间格式

```




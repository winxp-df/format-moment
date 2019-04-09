# Winxp 


## Introduction
* 获取时间，转化时间格式，将时间格式化成自己需要的样式：

```javascript
1、2017年01月11日 
2、2017年01月11日 18:11:20
3、2017-01-11 18:11:20
4、2017/01/11 18:11:20
5、...
```

## Usage
```javascript
const formatMoment = require('format-moment');


console.log(formatMoment.getTime('xxxx-xx-xx xx:xx:xx'));


console.log(formatMoment.formatTime({
    date: new Date('2018-02-03 10:05:05'),
    format: 'xxxx年xx月xx日 xx:xx:xx'
}));
```

## License




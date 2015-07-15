#mine.js
***
##命名空间

> ###1.验证型js

***

####1. isNullorEmpty 判断字符串数组是否为空 
`判断`

* [isNullorEmpty 判断字符串数组是否为空]
* @param {string[]} str[]
* @return {Boolean}
```
function isNullorEmpty (str[])
return Boolean;
```


####2.Comparison 验证两个字符串是否相等
`判断`

* [checkidcardcode 验证两个字符串是否相等]
* @param {varchar} str1,str2
* @return {Boolean}
```
function Comparison(str1,str2)
return Boolean;
```

***
> ###2. 正则表达式js

***

####1.checkphonecode 正则表达式验证手机号是否正确
 `判断` `正则`

* [checkphonecode 正则表达式验证手机号是否正确]
* @param {varchar} phonenum
* @return {Boolean}
```
function checkphonecode (phonenum) 
return Boolean;
```

####2.checktelcode 正则表达式验证固定电话是否正确
 `判断` `正则`

* [checktelcode 正则表达式验证固定电话是否正确]
* @param {varchar} telephone
* @return {Boolean}
```
function checktelcode(telephone)
return Boolean;
```

####3.checkmailcode 正则表达式验证邮箱是否正确
 `判断` `正则`

* [checkmailcode 正则表达式验证邮箱是否正确]
* @param {varchar} phonenum
* @return {Boolean}
```
function checkmailcode(email)
return Boolean;
```

####4.checkidcardcode 正则表达式验证身份证是否正确
 `判断` `正则`

* [checkidcardcode 正则表达式验证身份证是否正确]
* @param {varchar} idcard
* @return {Boolean}
```
function checkidcardcode(idcard)
return Boolean;
```



> 2.获得参数

####1.获得url参数
`获取参数 `
* [GetRequest 获取url中"?"符后的字串]
```
function Geturlparam() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("/") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
```

* 调用该方法
 `调用 `
 * [GetRequest get url param after ?]
```
var Request = new Object();
Request = Geturlparam();
type = Request['(type)'];
```
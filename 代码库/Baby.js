//***********//
//**baby.js**//
//**Version**//
//**  1.05 **//
//**15-7-15**//
//**Author **//
//** Baby  **//
//***********//

//======= namespacep START=======//

var Base;
/**
 * [Base first namespace]
 * @type {Object}
 */
if (!Base) Base = {};

/**
 * [check second namespace]
 * @type {Object}
 */
Base.check = {};

/**
 * [get second namespace]
 * @type {Object}
 */
Base.get = {};

/**
 * [change second namespace]
 * @type {Object}
 */
Base.change = {};

/**
 * [checkstr third namespace]
 * @type {Object}
 */
Base.check.checkstr = {};

/**
 * [checkcode third namespace]
 * @type {Object}
 */
Base.check.checkcode = {};

/**
 * [getstr third namespace]
 * @type {Object}
 */
Base.get.getstr = {};

/**
 * [getlength third namespace]
 * @type {Object}
 */
Base.get.getlength = {};

/**
 * [datetime third namespace]
 * @type {Object}
 */
Base.change.datetime = {};

//======= namespace END =======//

/**验证函数 **/

/**
 * [isNullorEmpty 判断字符串数组是否为空]
 * @param  {string[]} str
 * @return {Boolean}
 */
Base.check.checkstr.isNullOrEmpty = function (str) {
    // body...
    var result = false;
    if(str.length !== 0){
        for(var i = 0;i<str.length;i++){
            if(str[i] !== ""){
                result = true;
            }			else{
                result = false;
            }
        }
    }
    return result;
};

/**
 * [checkphonecode 正则表达式验证手机号是否正确]
 * @param  {varchar} phonenum
 * @return {Boolean}
 */
Base.check.checkcode.checkPhoneCode = function (phonenum){
    //待检测表达式是否正确
    var right = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|14[57]\d{8}|15\d{9}|18\d{9}|17\d{9}$/;
    if (phonenum.length != 11 || !phonenum.match(right)) {
        return false;
    } 
    return true;
};

/**
 * [checkmailcode 正则表达式验证邮箱是否正确]
 * @param  {varchar}email
 * @return {Boolean}
 */
Base.check.checkcode.checkMailCode = function (email){
    var right = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    if (email.test(right)) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * [checkidcard 正则表达式验证身份证是否正确]
 * @param  {varchar} idcard
 * @return {Boolean}
 */
Base.check.checkcode.checkIdcardCode = function (idcard){
    var right = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (idcard.test(right)) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * [checktelcode 正则表达式验证固定电话是否正确]
 * @param  {varchar} telephone
 * @return {Boolean}
 */
Base.check.checkcode.checkTelCode = function  (telephone) {
    var right = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (telephone.test(right)) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * [checktelcode 验证两个字符串是否相等]
 * @param  {varchar} str1 str2
 * @return {Boolean}
 */
Base.check.checkstr.comparison = function (str1,str2){
    if(str1 ==  str2){
        return true;
    }
    else{
        return false;
    }
};

/**验证url**/

/**
 * [GetRequest get url param after ?]
 */
Base.get.getstr.getUrlParam = function () {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

/**
 * [dateFormatter Description]
 * @param  {datetime} date [description]
 * @param  {int} type [1 "yyyy-MM-dd" 2 "MM-dd"]
 * @return {string}
 */
Base.change.datetime.dateFormatter = function (date,type) {
    var year = date.replace(/yyyy/,this.getFullYear());
    var month = date.replace(/MM/,this.getMonth()>9?this.getMonth().toString():'0' + this.getMonth());
    var day = date.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());
    if (type === 1) {
        return = day + '-' + month + '-' + day;
    }else if (type === 2) {
        return = month + '-' + day;
    };
};

Base.get.getlength.getStrLength = function(str){
    return str.length;  
};

Base.get.getlength.getStrTrueLength = function(str){
    return str.replace(/[^x00-xff]/g,"xx").length;
};
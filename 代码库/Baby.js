//***********//
//**baby.js**//
//**Version**//
//**  1.10 **//
//**15-8-20**//
//**Author **// ** Baby  **//
//***********//

//======= namespacep START=======//

var Base;
/**
 * [Base first namespace]
 * @type {Object}
 */
if (!Base) Base = {};

/**
 * [Check second namespace]
 * @type {Object}
 */
Base.Check = {};

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
 * [Checkstr third namespace]
 * @type {Object}
 */
Base.Check.Checkstr = {};

/**
 * [Checkcode third namespace]
 * @type {Object}
 */
Base.Check.Checkcode = {};

/**
 * [getstr third namespace]
 * @type {Object}
 */
Base.get.getstr = {};

/**
 * [GetLength third namespace]
 * @type {Object}
 */
Base.get.GetLength = {};

/**
 * [datetime third namespace]
 * @type {Object}
 */
Base.change.datetime = {};

/**
 * [String second namespace]
 * @type {Object}
 */
Base.String = {};

/**
 * [Refreshing second namespace]
 * @type {Object}
 */
Base.Refreshing = {};

//======= namespace END =======//

/**验证函数 **/

/**
 * [isNullorEmpty 判断字符串数组是否为空]
 * @param  {string[]} str
 * @return {Boolean}
 */
Base.Check.Checkstr.isNullOrEmpty = function (str) {
    var result = false;
    if(str.length !== 0){
        for(var i = 0;i<str.length;i++){
            //js中c#的string.IsNullOrEmpty(str)为!str
            result = !str[i];
        }
    }
    return result;
};

/**
 * [Checkphonecode 正则表达式验证手机号是否正确]
 * @param  {string} phonenum
 * @return {Boolean}
 */
Base.Check.Checkcode.checkPhoneCode = function (phonenum){
    //待检测表达式是否正确
    var right = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|14[57]\d{8}|15\d{9}|18\d{9}|17\d{9}$/;
    return phonenum.length === 11 && phonenum.match(right);
};

/**
 * [Checkmailcode 正则表达式验证邮箱是否正确]
 * @param  {string}email
 * @return {Boolean}
 */
Base.Check.Checkcode.checkMailCode = function (email){
    var right = /^[0-9A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    return email.match(right) !== null;
};

/**
 * [Checkidcard 正则表达式验证身份证是否正确]
 * @param  {string} idcard
 * @return {Boolean}
 */
Base.Check.Checkcode.checkIdcardCode = function (idcard){
    var right = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
     return idcard.match(right) !== null;
};

/**
 * [Checktelcode 正则表达式验证固定电话是否正确]
 * @param  {string} telephone
 * @return {Boolean}
 */
Base.Check.Checkcode.checkTelCode = function  (telephone) {
    var right = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return telephone.match(right) !== null;
};

/**
 * [Checktelcode 验证两个字符串是否相等]
 * @param  {string} str1 str2
 * @return {Boolean}
 */
Base.Check.Checkstr.comparison = function (str1,str2){
    return str1 == str2;
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
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

/**%
 * [dateFormatter Description]
 * @param  {datetime} date [description]
 * @param  {int} type [1 "yyyy-MM-dd" 2 "MM-dd"]
 * @return {string}
 */
//Base.change.datetime.dateFormatter = function (date,type) {
//    var year = date.replace(/yyyy/,this.getFullYear());
//    var month = date.replace(/MM/,this.getMonth()>9?this.getMonth().toString():'0' + this.getMonth());
//    var day = date.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());
//    if (type === 1) {
//        return year + "-" + month + "-" + day;
//    }else if (type === 2) {
//        return month + "-'" + day;
//    }
//    return "Error";
//};

/**
 * [getStrLength have blank space]
 * @param str
 * @returns {Number}
 */
Base.String.GetLength.getStrLength = function(str){
    return str.length;  
};

/**
 * [getStrTrueLength haven't blank space]
 * @param str
 * @returns {Number}
 */
Base.String.GetLength.getStrTrueLength = function(str){
    return str.replace(/[^x00-xff]/g,"xx").length;
};


/*Base.Refreshing.pullDownRefresh = function(){

};*/

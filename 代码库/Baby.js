//***********//
//**mine.js**//
//**Version**//
//**  1.04 **//
//**15-7-07**//
//**Author **//
//** Baby  **//
//***********//

/**验证函数 **/

/**
 * [isNullorEmpty 判断字符串数组是否为空]
 * @param  {string[]} str
 * @return {Boolean}
 */
function isNullorEmpty(str) {
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
}

/**
 * [checkphonecode 正则表达式验证手机号是否正确]
 * @param  {varchar} phonenum
 * @return {Boolean}
 */
function checkphonecode(phonenum){
    //待检测表达式是否正确
    var right = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|14[57]\d{8}|15\d{9}|18\d{9}|17\d{9}$/;
    if (phonenum.length != 11 || !phonenum.match(right)) {
        new dialog({
            type: "tip",
            tip_content: "请输入正确手机号！"
        });
        return false;
    } 
    return true;
}

/**
 * [checkmailcode 正则表达式验证邮箱是否正确]
 * @param  {varchar}email
 * @return {Boolean}
 */
function checkmailcode(email){
    var right = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    if (email.test(right)) {
        return true;
    }
    else {
        new dialog({
            type: "tip",
            tip_content: "请输入正确邮箱！"
        });
        return false;
    }
}

/**
 * [checkidcard 正则表达式验证身份证是否正确]
 * @param  {varchar} idcard
 * @return {Boolean}
 */
function checkidcardcode(idcard){
    var right = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (idcard.test(right)) {
        return true;
    }
    else {
        new dialog({
            type: "tip",
            tip_content: "请输入正确身份证号！"
        });
        return false;
    }
}

/**
 * [checktelcode 正则表达式验证固定电话是否正确]
 * @param  {varchar} telephone
 * @return {Boolean}
 */
function  checktelcode(telephone) {
    var right = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (telephone.test(right)) {
        return true;
    }
    else {
        new dialog({
            type: "tip",
            tip_content: "请输入正确固定电话号！"
        });
        return false;
    }
}

/**
 * [checktelcode 验证两个字符串是否相等]
 * @param  {varchar} str1 str2 massage提示信息
 * @return {Boolean}
 */
function Comparison (str1,str2,massage){
    if(str1 ==  str2){
        return true;
    }
    else{
        new dialog({
            type: "tip",
            tip_content: massage
        });
        return false;
    }
}

/**验证url**/

/**
	* [GetRequest 获取url中"?"符后的字串]
	*/
function GetRequest () {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}



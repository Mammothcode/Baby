#!
# Baby-coffee Plugin
# version: 0,0,2 alpha
# Copyright (c) 2015 Baby
# Project repository:https://github.com/Mammothcode/Baby/
#

##配置Debug mode

window.debugMode = document.location.hash.match(/debug/) and console?
console.log 'This is the first of many debug-mode outputs' if debugMode

##基层命名空间
Baby = {};

##工具函数
Baby.Util = {};

##字符串方法
Baby.Util.String = {};

##整数方法
Baby.Util.Int = {};

##正则表达式判断方法
Baby.Util.RegExp = {};

##字符串数组(可为1个数)判空,version 0.0.1
Baby.Util.String.notNullOrEmpty = (str) ->
	if str != null and str.length > 0
		for item in str
			if !item 
			##js中c#的string.IsNullOrEmpty(str)为!str
	    		return false;
	else return false;
	return true;

##传入变量是否为单个对象,version 0.0.2
Baby.Util.String.notArray = (str) ->
	str instanceof Array == false and str

##判断传入数组是否相等,version 0.0.1
Baby.Util.String.comparison = (str) ->
	##标记变量
	result = true;
	##判断传入数组是否为数组
	if(Baby.Util.String.notNullOrEmpty(str))
		##使判断变量赋值为数组第一个值
		check = str[0];
		##遍历数组str
		for s in str
			if s != check
				result = false;
				break;
	else result = false;
	result;

##正则表达式判断手机号是否正确
Baby.Util.RegExp.phoneCode = (phoneCode) ->
	##先判断phoneCode是否为一个数组,需要单个数据才能进行下一步操作
	##先判断不是数组在判断不是空和null
	if Baby.Util.String.notArray(phoneCode)
		reg = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|14[57]\d{8}|15\d{9}|18\d{9}|17\d{9}$/;
		##todo test方法可能有坑
		return phoneCode.length == 11 and reg.test(phoneCode);
	false;

##正则表达式判断邮箱是否正确
Baby.Util.RegExp.eMailAddress = (eMailAddress) ->
	if Baby.Util.String.notArray(eMailAddress)
		reg = /^[0-9A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
		return reg.test(eMailAddress)
	false;

##正则表达式判断身份证是否正确
Baby.Util.RegExp = (idCard) ->
	if Baby.Util.String.notArray(idCard)
		reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		return reg.test(idCard);
	false;

##正则表达式判断邮编是否正确
Baby.Util.RegExp = (zipCode) ->
	if Baby.Util.String.notArray(zipCode)
		reg = /[1-9]\d{5}(?!\d)/;
		return reg.test(zipCode);
	false;

##正则表达式判断QQ是否正确
Baby.Util.RegExp = (QQ) ->
	if Baby.Util.String.notArray(QQ)
		reg = /[1-9][0-9]{4,}/;
		return reg.test(QQ);
	false;

Baby.Util.RegExp = () ->

return Baby;

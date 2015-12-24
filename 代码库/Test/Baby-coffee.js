//(function() {
var Baby;

window.debugMode = document.location.hash.match(/debug/) && (typeof console !== "undefined" && console !== null);

if (debugMode) {
	console.log('This is the first of many debug-mode outputs');
}

Baby = {};

Baby.Util = {};

Baby.Util.String = {};

Baby.Util.Int = {};

Baby.Util.RegExp = {};

Baby.Util.String.notNullOrEmpty = function(str) {
	var item, _i, _len;
	if (str !== null && str.length > 0) {
		for (_i = 0, _len = str.length; _i < _len; _i++) {
			item = str[_i];
			if (!item) {
				return false;
			}
		}
	} else {
		return false;
	}
	return true;
};

Baby.Util.String.isOnlyOne = function(str) {
	return str instanceof Array === false && str;
};

Baby.Util.String.comparison = function(str) {
	var check, result, s, _i, _len;
	result = true;
	if (Baby.Util.String.notNullOrEmpty(str)) {
		check = str[0];
		for (_i = 0, _len = str.length; _i < _len; _i++) {
			s = str[_i];
			if (s !== check) {
				result = false;
				break;
			}
		}
	} else {
		result = false;
	}
	return result;
};

Baby.Util.RegExp.phoneCode = function(phoneCode) {
	var reg;
	if (Baby.Util.String.isOnlyOne(phoneCode)) {
		reg = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|14[57]\d{8}|15\d{9}|18\d{9}|17\d{9}$/;
		return phoneCode.length === 11 && reg.test(phoneCode);
	}
	return false;
};

Baby.Util.RegExp.eMailAddress = function(eMailAddress) {
	var reg;
	if (Baby.Util.String.isOnlyOne(eMailAddress)) {
		reg = /^[0-9A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
		return reg.test(eMailAddress);
	}
	return false;
};

Baby.Util.RegExp = function(idCard) {
	var reg;
	if (Baby.Util.String.isOnlyOne(idCard)) {
		reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		return reg.test(idCard);
	}
	return false;
};

Baby.Util.RegExp = function(zipCode) {
	var reg;
	if (Baby.Util.String.isOnlyOne(zipCode)) {
		reg = /[1-9]\d{5}(?!\d)/;
		return reg.test(zipCode);
	}
	return false;
};

Baby.Util.RegExp = function(QQ) {
	var reg;
	if (Baby.Util.String.isOnlyOne(QQ)) {
		reg = /[1-9][0-9]{4,}/;
		return reg.test(QQ);
	}
	return false;
};

Baby.Util.RegExp = function() {};

//	}).call(this);

//# sourceMappingURL=Baby-coffee.map
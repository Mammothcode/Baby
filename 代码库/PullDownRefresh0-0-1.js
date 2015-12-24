Baby.App.Page.pageRefresh = function(options){
    var settings = $.extend({
        pageSize:10,//一页显示的条数
        pageIndex:1,//当前请求哪一页
        isAjax:true,//是否正在ajax中
        $listLast:null,//当前列表最后一个对象
        listCount:0,//列表现有个数
        other:null,//其他参数
        callback:null//回调函数
    },options);
    //没有在ajax才能继续请求
    if (settings.isAjax === false) {
        if (settings.listCount !== 0) {
            settings.pageIndex = Math.ceil(settings.listCount / settings.pageSize);
            var lastItemHeight = $(settings.$listLast.offset().top + $(settings.$listLast.height()
                    - $(window).scrollTop();
            //满足条件后才能执行回调函数
            if (lastItemHeight < $(window).height()) {
                //回调函数为空->关闭||回调函数不为空判断是否为函数->true->执行函数->函数返回值为false不关闭弹出层,否则关闭弹出层
                if (settings.callback == null || typeof (settings.callback) === "function" && settings.callback() !== false) {
                }
            }
        }
    }
};
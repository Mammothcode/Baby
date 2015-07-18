//======================//
//=======PullDown=======//
//=======  baby  =======//
//=======  0.0.1 =======//
//======================//

//实时监测窗口滚动
//分页量
var pagesize = 4;
//是否正在请求
var isLoading = false;
//页数
var pageindex = 0;
//票务类型
var ttId = 0;

//主函数
$(function() {
    
});

//滚动
$(window).scroll(function () {
    calculatepage();
});

//验证滚动是否能触发
function calculatepage() {
    if (isLoading === false) {
        var $_lastitem = $(".item:last-child");
        if (lastitem.length !== 0) {
            pageindex = Math.ceil(($(".item").length) / pagesize);
            var lastItemHight = $($_lastitem).offset().top + $($_lastitem).height() - $(window).scrollTop();
            if (lastItemHight < $(window).height()) {
                pulldownrefresh(pageindex);
            }
        }
    }
}

//下拉刷新(页数)
function pulldownrefresh(pageindex) {
    isLoading = true;
    var url = "";
    var data = { "pagesize": pagesize, "pageindex": pageindex };
    $.ajax({
        type: "post",
        url: url,
        data: data,
        async: true,
        success: function (json) {
            var response = eval('(' + json + ')');
            if (response.state !== "NODATA") {
                
                }
                $("#item_list").append(html);
            }
            if (response.datacount < pagesize) {
                isLoading = true;
            } else {
                isLoading = false;
            }
        }
    });
}
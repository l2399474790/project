setTimeout(function(){
    $.get('/index.php?s=Weixin/signstr&url='+url,function(data){
        callback(data,fngetweixinshare);
    },'json');
},400);
function fngetweixinshare(){
    if (fnweixinsharestr) {
         var video = document.getElementsByTagName("video")[0];
         if(video){
            video.pause(); //暂停播放
            // video.style.display = "none"; //隐藏
         }
         $.get(fnweixinsharestr,function(data){
            $(".appUpDown").find(".img").css({
                "background": 'url(/Public/Main/PHONE/images/appUpDown/share.png) center center no-repeat',
                "background-size": "100%"
            })
            $(".appUpDown").find(".text").html("操作成功");
            $(".appUpDown").show();
            $(".goLogin").hide();
            $(".app_cover").addClass("active").show();
         });
         if(wxCallback){
             $.ajax({
                url:wxCallback,
                dataType:"json",
                success: function(){}
            })
         }
    }
    // 用户确认分享后执行的回调函数
}
function callback(config,fn){
    console.log(wximgUrl)
    wx.config(config);
    wx.ready(function(){
        //分享到朋友圈
        wx.onMenuShareTimeline({
            title: wxtitle, // 分享标题
            link: wxlink, // 分享链接
            imgUrl: wximgUrl, // 分享图标
            success: fn,
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });
        //分享给朋友
        wx.onMenuShareAppMessage({
            title: wxtitle, // 分享标题
            desc: wxdesc, // 分享描述
            link: wxlink, // 分享链接
            imgUrl: wximgUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: fn,
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });
        //分享到QQ
        wx.onMenuShareQQ({
            title: wxtitle, // 分享标题
            desc: wxdesc, // 分享描述
            link: wxlink, // 分享链接
            imgUrl: wximgUrl, // 分享图标
            success: fn,
            cancel: function () { 
               // 用户取消分享后执行的回调函数
            }
        });
        //分享到QQ空间
        wx.onMenuShareQZone({
            title: wxtitle, // 分享标题
            desc: wxdesc, // 分享描述
            link: wxlink, // 分享链接
            imgUrl: wximgUrl, // 分享图标
            success: fn,
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });
        //分享到腾讯微博
        wx.onMenuShareWeibo({
            title: wxtitle, // 分享标题
            desc: wxdesc, // 分享描述
            link: wxlink, // 分享链接
            imgUrl: wximgUrl, // 分享图标
            success: fn,
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });
        
    });
}
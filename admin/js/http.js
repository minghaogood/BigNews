(function(){
$.ajaxSetup({
    // 全局添加请求头
    headers:{
        Authorization: localStorage.getItem('token')
    },
    // 没有token自动跳转登录页
    error:function(){
        $('.modal').modal();
        $('.modal-body p').html('请重新登录');        
    }
});

})(window);
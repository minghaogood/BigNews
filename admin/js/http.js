(function(){
$.ajaxSetup({
    // 全局添加请求头
    headers:{
        Authorization: localStorage.getItem('token')
    }
});

})(window);
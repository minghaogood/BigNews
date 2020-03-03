(function(w){
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

const baseUrl = 'http://localhost:8080/api/v1';
const BigNew = {
    user_info:`${baseUrl}/admin/user/info`
}
w.BigNew = BigNew;
})(window);
$(function(){
// 绑定按钮
$('.input_sub').click(function(e){
e.preventDefault();
// 获取用户名和密码
const user= $('.input_txt').val().trim();
const pwd= $('.input_pass').val().trim();
if(user == '' || pwd == ''){
  $('.modal').modal();
  $('.modal-body p').html('账号密码不能为空');
}else{
  // 发送ajax
  $.ajax({
    type: "post",
    url: BigNew.user_login,
    data: {
      username: user,
      password: pwd,
    },
    dataType: "json",
    success: function (response) {
      // 登录成功返回200
      if(response.code==200){
        localStorage.setItem('token',response.token);
        location.href = '../admin/index.html';
      }else{
        $('.modal').modal();
        $('.modal-body p').html(response.msg);
      }
    }
  });
}
});

});
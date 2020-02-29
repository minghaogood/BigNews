$(function(){
// 绑定按钮
$('.input_sub').click(function(e){
e.preventDefault();
// 获取用户名和密码
const user= $('.input_txt').val().trim();
const pwd= $('.input_pass').val().trim();
if(user == '' || pwd == ''){
  alert('空');
}else{
  // 发送ajax
  $.ajax({
    type: "post",
    url: "http://localhost:8080/api/v1/admin/user/login",
    data: {
      username: user,
      password: pwd,
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
      
    }
  });
}
});

});
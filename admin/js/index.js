$(function(){
  // 用户信息功能
  $.ajax({
    type: "get",
    url: "http://localhost:8080/api/v1/admin/user/info",
    dataType: "json",
    success: function (response) {
      if(response.code ==200){
        $('.user_info img , .user_center_link img').attr({
          src: response.data.userPic
        });
        $('.user_info span strong').html(response.data.nickname);
      }
    }
  });

  // 用户退出功能
  $('.logout').click(function(e){
  localStorage.removeItem('token');
  location.href='../admin/login.html';
  });
});
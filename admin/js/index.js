$(function(){
  // 用户信息功能
  $.ajax({
    type: "get",
    url: BigNew.user_info,
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

  // 点击左侧选项卡高亮
  $('.level01').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    // 文章选项卡处理
    if($(this).next().hasClass('level02')){
      $(this).next().slideToggle();
      $(this).find('b').toggleClass('rotate0');
      $(this).next().find('li').eq(0).addClass('active');
    }
  });

  // 文章二级选项卡处理
  $('.level02 li').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
  });

});
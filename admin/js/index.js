$(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:8080/api/v1/admin/user/info",
    headers:{
      Authorization: localStorage.getItem('token')
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
      if(response.code ==200){
        $('.user_info img , .user_center_link img').attr({
          src: response.data.userPic
        });
        $('.user_info span strong').html(response.data.nickname);
      }
    }
  });
});
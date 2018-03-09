/*function checkedAll(){
	var checked=document.getElementsByName('checked[]');
	for(i=0;i<checked.length;i++){
		if(checked[i].checked==false){
			checked[i].checked=true;
		}else{
			checked[i].checked=false;
		}
	}
}*/
$(function(){
  //全选
  $('#selectAll').click(function(){
    $('.tr-box :checkbox').prop('checked',true);
  });
  //全不选
  $('#unSelect').click(function(){
    $('.tr-box :checkbox').prop('checked',false);
  });
  //反选
  $('#reverse').click(function(){
    $('.tr-box :checkbox').each(function(){  
        $(this).prop("checked",!$(this).is(":checked"));
    })
  });
})


$(function(){
  //aside 高度
 // var main_h = $(window).height()-52;
 // $('.height').css('height',main_h+52+'px');
  //$('.sidebar').css('height',main_h+'px');
  //左侧菜单
  $('#main-menu .active .nav-offset').hide();
  $('.active-li').parent('ul').show();
  //$('.active-li').parent('ul').siblings('a').children('em').removeClass('fa-angle-right').addClass('fa-angle-down');

  $('#main-menu .active').click(function(){
      $(this).children('.nav-offset').toggle();
      $('#main-menu .active').not($(this)).children('.nav-offset').hide();
     
  })


})










































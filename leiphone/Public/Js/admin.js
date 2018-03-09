
//select 模板中的  全选 与 反选
function checkedAll(){
	var checked=document.getElementsByName('checked[]');
	for(i=0;i<checked.length;i++){
		if(checked[i].checked==false){
			checked[i].checked=true;
		}else{
			checked[i].checked=false;
		}
	}
}
//member 模块 
$(function(){
	//全选
	$('#selectAll').click(function(){
		$('.danger :checkbox').prop('checked',true);
	});
	//全不选
	$('#unSelect').click(function(){
		$('.danger :checkbox').prop('checked',false);
	});
	//反选
	$('#reverse').click(function(){
		$('.danger :checkbox').each(function(){  
			/* $(this).prop("checked", !$(this).prop("checked"));
			 var chk = 0;
			 if($(this).prop("checked")==true){
				chk++;
				$a = $(this).val();
				//alert($a);
			}*/
			  $(this).prop("checked",!$(this).is(":checked"));
		})
	});
})



$(function(){
	//左侧菜单
	$('#left .active').nextAll().hide();
	$('#left .active').click(function(){
		//alert('hello');
		$(this).nextAll().toggle();
		$('#left .active').not($(this)).nextAll().hide();
	});
	
	
})



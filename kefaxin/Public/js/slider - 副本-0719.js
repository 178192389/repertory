$(function(){
	var pos_str= $('.banner').css('backgroundPosition');
	if (pos_str) {
		arr = pos_str.split(',');
	}else{
		arr = ['1px 1px','1px 700px','1px 700px','1px 700px','1px 700px'];
	}
	$(".slide").eq(0).css("display",'block').siblings(".slide").css("display",'none');
	var i = 0;
	var time;
	time = setInterval(function(){
		i++;
		if(i==5){
			i=0;
		}
		for (var g=0;g<5;g++) {
	    	arr[g]='0px 700px';
	    }
	    arr[i]='0 0';//当前对象
	    var str=arr.join(',');
	    $('.banner').css('backgroundPosition',str);
		$(".slide").eq(i).slideDown('slow').siblings(".slide").slideUp('slow')
		$('.cc').eq(i).prop('src','/kefaxin/Public/images/circle1.png')
		$(".cc").not($(".cc")[i]).prop('src','/kefaxin/Public/images/circle2.png')
	},4000);
	$(".cc").mouseover(function(){
		clearInterval(time);
		var k = $('.cc').index(this);
		for (var g=0;g<5;g++) {
	    	arr[g]='0px 700px';
		}
		arr[k]='0 0';//当前对象
		var str=arr.join(',');
		$('.banner').css('backgroundPosition',str);


		$('.cc').eq(k).prop('src','/kefaxin/Public/images/circle1.png')
		$(".cc").not($(".cc")[k]).prop('src','/kefaxin/Public/images/circle2.png')
		$(".slide").eq(k).slideDown('slow').siblings(".slide").slideUp('slow')
		time = setInterval(function(){
			k++;
			if(k==5){
				k=0;
			}
			for (var g=0;g<5;g++) {
	    		arr[g]='0px 700px';
		    }
		    arr[k]='0 0';//当前对象
		    var str=arr.join(',');
		    $('.banner').css('backgroundPosition',str);

			$(".slide").eq(k).slideDown('slow').siblings(".slide").slideUp('slow')
			$('.cc').eq(k).prop('src','/kefaxin/Public/images/circle1.png')
			$(".cc").not($(".cc")[k]).prop('src','/kefaxin/Public/images/circle2.png')
		},4000);

	})
	$(".ban").mouseover(function(){
		clearInterval(time);
		var j = $('.ban').index(this);

		for (var g=0;g<5;g++) {
	    	arr[g]='0px 700px';
		}
		arr[j]='0 0';//当前对象
		var str=arr.join(',');
		$('.banner').css('backgroundPosition',str);

		$('.cc').eq(j).prop('src','/kefaxin/Public/images/circle1.png')
		$(".cc").not($(".cc")[j]).prop('src','/kefaxin/Public/images/circle2.png')
		$(".slide").eq(j).slideDown('slow').siblings(".slide").slideUp('slow')
		time = setInterval(function(){
			j++;
			if(j==5){
				j=0;
			}

			for (var g=0;g<5;g++) {
	    		arr[g]='0px 700px';
		    }
		    arr[j]='0 0';//当前对象
		    var str=arr.join(',');
		    $('.banner').css('backgroundPosition',str);

			$(".slide").eq(j).slideDown('slow').siblings(".slide").slideUp('slow')
			$('.cc').eq(j).prop('src','/kefaxin/Public/images/circle1.png')
			$(".cc").not($(".cc")[j]).prop('src','/kefaxin/Public/images/circle2.png')
		},4000);
	});
	$(".cc").mouseout(function(){
		$(".slide").stop(false,true);
	})
	$(".ban").mouseout(function(){
		$(".slide").stop(false,true);
	})
});



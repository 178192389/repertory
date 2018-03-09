var banner = ['images/banner.jpg','images/banner1.jpg','images/banner2.jpg','images/banner3.jpg','images/banner4.jpg'];
$(function(){
	$(".slide").eq(0).css("display",'block').siblings(".slide").css("display",'none');
	var i = 0;
	var time;
	time = setInterval(function(){
		i++;
		if(i==5){
			i=0;
		}
		$(".slide").eq(i).css("display",'block').siblings(".slide").css("display",'none');
		$('.cc').eq(i).prop('src','images/circle1.png')
		$(".cc").not($(".cc")[i]).prop('src','images/circle2.png')
		$(".ban").eq(i).addClass('act');
		$(".ban").not($(".ban")[i]).removeClass('act');
		$('.banner').css('backgroundImage',"url("+banner[i]+")")
	},4000);
	$(".cc").mouseover(function(){
		clearInterval(time);
		var k = $('.cc').index(this);
		$('.cc').eq(k).prop('src','images/circle1.png')
		$(".cc").not($(".cc")[k]).prop('src','images/circle2.png')
		$(".ban").eq(k).addClass('act');
		$(".ban").not($(".ban")[k]).removeClass('act');
		$('.banner').css('backgroundImage',"url("+banner[k]+")")
		$(".slide").eq(k).css("display",'block').siblings(".slide").css("display",'none');
		time = setInterval(function(){
			k++;
			if(k==5){
				k=0;
			}
			$(".slide").eq(k).css("display",'block').siblings(".slide").css("display",'none');
			$('.cc').eq(k).prop('src','images/circle1.png')
			$(".cc").not($(".cc")[k]).prop('src','images/circle2.png')
			$(".ban").eq(k).addClass('act');
			$(".ban").not($(".ban")[k]).removeClass('act');
			$('.banner').css('backgroundImage',"url("+banner[k]+")")
		},4000);
	});

	//
	$(".ban").mouseover(function(){
		clearInterval(time);
		var j = $('.ban').index(this);
		$(".ban").eq(j).addClass('act');
		$(".ban").not($(".ban")[j]).removeClass('act');
		$('.cc').eq(j).prop('src','images/circle1.png')
		$(".cc").not($(".cc")[j]).prop('src','images/circle2.png')
		$('.banner').css('backgroundImage',"url("+banner[j]+")")
		$(".slide").eq(j).css("display",'block').siblings(".slide").css("display",'none');
		time = setInterval(function(){
			j++;
			if(j==5){
				j=0;
			}
			$(".slide").eq(j).css("display",'block').siblings(".slide").css("display",'none');
			$('.cc').eq(j).prop('src','images/circle1.png')
			$(".cc").not($(".cc")[j]).prop('src','images/circle2.png')
			$(".ban").eq(j).addClass('act');
			$(".ban").not($(".ban")[j]).removeClass('act');
			$('.banner').css('backgroundImage',"url("+banner[j]+")")
		},4000);
	});
	$(".cc").mouseout(function(){
		$(".slide").stop(false,true);
	})
	$(".ban").mouseout(function(){
		$(".slide").stop(false,true);
	})
});
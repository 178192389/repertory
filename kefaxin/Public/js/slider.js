$(function(){
	$(".slide").eq(0).css("display",'block').siblings(".slide").css("display",'none');
	$(".banimg li").eq(0).css("display",'block').siblings(".banimg li").css("display",'none');
	var i = 0;
	var time;
	time = setInterval(function(){
		i++;
		if(i==5){
			i=0;
		}
		$(".banimg li").eq(i).slideDown('slow').siblings(".banimg li").slideUp('slow')
		$(".slide").eq(i).slideDown('slow').siblings(".slide").slideUp('slow')
		$('.cc').eq(i).prop('src','/kefaxin/Public/images/circle1.png')
		$(".cc").not($(".cc")[i]).prop('src','/kefaxin/Public/images/circle2.png')
	},4000);
	$(".cc").mouseover(function(){
		clearInterval(time);
		var k = $('.cc').index(this);
		$('.cc').eq(k).prop('src','/kefaxin/Public/images/circle1.png')
		$(".cc").not($(".cc")[k]).prop('src','/kefaxin/Public/images/circle2.png')
		$(".banimg li").eq(k).slideDown('slow').siblings(".banimg li").slideUp('slow')
		$(".slide").eq(k).slideDown('slow').siblings(".slide").slideUp('slow')
		time = setInterval(function(){
			k++;
			if(k==5){
				k=0;
			}
			$(".slide").eq(k).slideDown('slow').siblings(".slide").slideUp('slow')
			$(".banimg li").eq(k).slideDown('slow').siblings(".banimg li").slideUp('slow')
			$('.cc').eq(k).prop('src','/kefaxin/Public/images/circle1.png')
			$(".cc").not($(".cc")[k]).prop('src','/kefaxin/Public/images/circle2.png')
		},4000);

	})
	$(".ban").mouseover(function(){
		clearInterval(time);
		var j = $('.ban').index(this);
		$('.cc').eq(j).prop('src','/kefaxin/Public/images/circle1.png')
		$(".cc").not($(".cc")[j]).prop('src','/kefaxin/Public/images/circle2.png')
		$(".slide").eq(j).slideDown('slow').siblings(".slide").slideUp('slow')
		$(".banimg li").eq(j).slideDown('slow').siblings(".banimg li").slideUp('slow')
		time = setInterval(function(){
			j++;
			if(j==5){
				j=0;
			}
			$(".slide").eq(j).slideDown('slow').siblings(".slide").slideUp('slow')
			$(".banimg li").eq(j).slideDown('slow').siblings(".banimg li").slideUp('slow')
			$('.cc').eq(j).prop('src','/kefaxin/Public/images/circle1.png')
			$(".cc").not($(".cc")[j]).prop('src','/kefaxin/Public/images/circle2.png')
		},4000);
	});
	$(".cc").mouseout(function(){
		$(".banimg li").stop(false,true);
		$(".slide").stop(false,true);
	})
	$(".ban").mouseout(function(){
		$(".banimg li").stop(false,true);
		$(".slide").stop(false,true);
	})
});



//轮播图切换
function index(id,n) {
		var index = 0; //下标
		var imgWidth = $("#img11").width();
		function scrollImg(index) {
			$(id).stop(true, false).animate({
				"margin-left": -imgWidth * index
			}, 200);
			$("#section-menu li").removeClass('active').eq(index).addClass('active');
			var data = $("#section-list li").eq(index).find("img").prop("title");
			$("#silder_title").html(data);
		}		
		num = 0;
		setInterval(function(index) {
			num++;
			if (num == n) {
				num = 0
			}
			scrollImg(num)
		}, 3000);
		
		$("#section-menu li").mouseover(function() {
			index = $(this).index();
			scrollImg(index);
			
		});
		
		$("#silder_title").html(data);
	};

	index('#section-list','5');


/*	$('#share_weibo').mouseover(function(){
		$('#weibo_img').stop().fadeIn(1000);
	}).mouseleave(function(){
		$('#weibo_img').stop().fadeOut(1000)
	})
	
	
	$('#share_weixin').mouseover(function(){
		$('#weixin_img').stop().fadeIn(1000);
	}).mouseleave(function(){
		$('#weixin_img').stop().fadeOut(1000)
	})*/
















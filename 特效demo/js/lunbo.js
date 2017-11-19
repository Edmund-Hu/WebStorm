//轮播图切换
function index(n) {
		var index = 0; //下标,第几张图片
		function scrollImg(index) {
			//获取图片的宽度作为每次移动的宽度
			var imgWidth = document.getElementById("img11").width;
			//根据index设置ul的margenLeft的值
			document.getElementById("section-list").style.marginLeft=-imgWidth*index+"px";
			//var menu =document.getElementById("section-menu").children;
			//设置轮播图下面的圆点状态随图片改变
			var menu =document.getElementById("section-menu").getElementsByTagName("li");
			for(var i =0 ;i<menu.length;i++){
				if(i==index){
					menu[i].className="active";
				}else{
					menu[i].className="";
				}
				//实现点击图片就可以跳转到相应的图片；
				menu[i].addEventListener("click",(function(a){
						return function(){scrollImg(a)};
				})(i))
			}
			//实现图片说明随着图片的改变而改变
			 var data = document.getElementsByTagName("img")[index].title;
			document.getElementById("silder_title").innerHTML=data;
		}
		//每个一定时间调用一次函数，改变图片位置
		num = 0;
		setInterval(function() {
			num++;
			if (num == n) {
				num = 0
			}
			scrollImg(num)
		}, 3000);
	}
		//初始化函数，设置图片总张数为5；
	index(5);



















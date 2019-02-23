define(["jquery"],function($){
	function index(){
		$(function(){
			$.ajax({
				type:"GET",
				url:"../data/1.json",
				success:function(arr){
					// alert(arr);
					for(var i = 0; i < arr.length; i++){
						$(`<li><a href="#">${arr[i]}</a></li>`).appendTo($("#sele-last .add"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})
			//移入移出

			$("#se-last").hover(function(){
				$("#sele-last").stop().fadeIn(300,function(){
					$("#sele-last").css("opacity","1");
				});
				// $("#sele-last").css("display","block");
			},function(){
				$("#sele-last").stop().fadeOut(300);
				// $("#sele-last").css("display","none");
			})

			// one获取
			$.ajax({
				type:"GET",
				url:"../data/select_pre.json",
				success:function(arr){
					// alert(arr);
					for(var i = 0; i < arr.length; i++){
						$(`<li><a href="#">${arr[i]}<span>></span></a></li>`).appendTo($("#sele-one ul"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})

			$.ajax({
				type:"GET",
				url:"../data/select.json",
				success:function(arr){
					// alert(arr);
					for(var i = 0; i < arr.length; i++){
						$(`	<dl>
								<dt><img src="${arr[i].img}" alt="" style="height:70px;width:100px"></dt>
								<dd>${arr[i].title}</dd>
							</dl>`).appendTo($("#sele-one-r div"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})
			
			$("#se-one").hover(function(){
				$("#sele-one,#sele-one-r").stop().fadeIn(300,function(){
					$("#sele-one").css("opacity","1");
					// $(".se-one").css("border-bottom","1px solid #333");
				});
				// $("#sele-one").css("display","block");
			},function(){
				$("#sele-one,#sele-one-r").stop().fadeOut(300);
				// $(".se-one").css("border-bottom","0");
				// $("#sele-last").css("display","none");
			})

		})

		
	}
	return {
		index:index
	}
})
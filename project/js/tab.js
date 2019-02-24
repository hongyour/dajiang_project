define(["jquery"],function($){
	function tab(){
		$(function(){
			$.ajax({
				type:"GET",
				url:"../data/select.json",
				success:function(arr){
					// alert(arr);
					for(var i = 1; i < arr.length; i++){
						$(`	<dl>
								<dt><img src="${arr[i].img}" alt="" style="height:70px;width:100px"></dt>
								<dd>${arr[i].title}</dd>
							</dl>`).appendTo($("#sele-one-r .div1"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})
			$.ajax({
				type:"GET",
				url:"../data/select1.json",
				success:function(arr){
					// alert(arr);
					for(var i = 1; i < arr.length; i++){
						$(`	<dl>
								<dt><img src="${arr[i].img}" alt="" style="height:70px;width:100px"></dt>
								<dd>${arr[i].title}</dd>
							</dl>`).appendTo($("#sele-one-r .div2"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})

			$.ajax({
				type:"GET",
				url:"../data/select2.json",
				success:function(arr){
					// alert(arr);
					for(var i = 1; i < arr.length; i++){
						$(`	<dl>
								<dt><img src="${arr[i].img}" alt="" style="height:70px;width:100px"></dt>
								<dd>${arr[i].title}</dd>
							</dl>`).appendTo($("#sele-one-r .div3"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})


			$("#se-one").hover(function(){
				$(".blind").stop().fadeIn(300,function(){
					$("#sele-one").css("opacity","1");
					$(".se-one").css("border-bottom","1px solid #333");
				});
			},function(){
				// $(".blind").stop().fadeOut(300);
				$(".se-one").css("border-bottom","0");
				
			})

			$(".blind").on("mouseover","#tab li",function(){
				$(".blind").find("#tab li a").css("color","#6c7073")
				.eq($(this).index()).css("color","#1897f2");
				$(".blind").find(".se-right #sele-one-r").css("display","none")
				.eq($(this).index()).css("display","block");

				// $("this").css("color","#1897f2");
			})
		})
	}
	return {
		tab:tab
	}
})
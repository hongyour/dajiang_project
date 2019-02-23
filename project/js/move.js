define(["jquery"]function($){
	function move(){
		$(function(){
			// $("#se-last").hover(function(){
			// 	$("#sele-last").stop().animate({
			// 		background-color:"red"
			// 	},1000)
			// },function(){
			// 	$("#sele-last").stop().animate({
			// 		background-color:"blue"
			// 	},1000)
			// })
			$("#se-last").on("mouseenter",function(){
				$("#sele-last").css("backgroundColor","red");
			})
		})
	}
	return {
		move:move
	}
})
define(["jquery","select1","select2","tab"],function($,select1,select2,tab){
	function index(){
		$(function(){
			
			select1.select1();

			//第一个li左边获取
			$.ajax({
				type:"GET",
				url:"../data/select_pre.json",
				success:function(arr){
					// alert(arr);
					for(var i = 0; i < arr.length; i++){
						$(`<li id="${arr[i].id}"><a href="#">${arr[i].title}<span>></span></a></li>`).appendTo($(".blind ul"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})

			//第一个li右边获取
			
			

			//第一个li下面获取
			
			// select2.select2();
			// select3.select3();		

			tab.tab();

		})

		
	}
	return {
		index:index
	}
})
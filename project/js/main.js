console.log("ok");
require.config({
	paths:{
		"index":"index",
		// "move":"move",
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery-cookie",
		"parabola":"parabola"
	},
	shim:{
		"jquery-cookie":["jquery"],
		"parabola":{
			exports:"_"
		}
	}
})


require(["index"], function(index){
	index.index();
	// move.move();
})


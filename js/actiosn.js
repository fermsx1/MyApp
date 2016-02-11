var fn = {
	init: function(){

	},
	ready:function(){
		document.addEventListener("deviceready", fn.init, false);
	}
};

$(fn.ready);
//$(fn.init);
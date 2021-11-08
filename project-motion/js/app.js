

function motion(id, appear, disappear) {
	
	$(id).each(function(i){
		if($(id).eq(i).css('display') === 'list-item') {
			MotionUI.animateOut($(id).eq(i), disappear);
		}
		else if($(id).eq(i).css('display') === 'block') {
			MotionUI.animateOut($(id).eq(i), disappear);
		}
		else {
			MotionUI.animateIn($(id).eq(i), appear);
		}
	});
}

function reset() {
	
	$(".text").each(function(i){
		if($(".text").eq(i).css('display') === 'list-item') {
			MotionUI.animateOut($(".text").eq(i), 'scale-out-down');
		}
		else if($(".text").eq(i).css('display') === 'block') {
			MotionUI.animateOut($(".text").eq(i), 'scale-out-down');
		}
	});
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
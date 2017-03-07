$ (function(){
	var $links = $('.menu a');
	$links.on('mouseover', function(e){
		e.preventDefault();
	var $submenu = 	$('.sub');
		$submenu.slideToggle();
	
		
	})
});


$ (function(){
	var $links2 = $('.a_3_4');
	$links2.on('mouseover', function(e){
		e.preventDefault();
	var $submenu2 = $('.sub2');
		$submenu2.slideToggle();
		
	})
});

$ (function(){
	var $links3 = $('.a_3_4_2');
	$links3.on('mouseover', function(e){
		e.preventDefault();
	var $submenu3 = $('.sub3');
		$submenu3.slideToggle();
		
	})
});
	
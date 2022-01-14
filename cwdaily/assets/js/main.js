$('.day').click(function(){
	$('.calendar').slideToggle();
	$('main .black').fadeToggle();
});
$('main .black').click(function(){
	$('.calendar').slideUp();
	$(this).fadeOut();
});

let lastScrollTop = 0;
window.addEventListener("scroll", function() {
	let srollTop = window.pageYOffset || document.documentElement.scrollTop;
	if ( srollTop > lastScrollTop ) {
		$('.button--back').fadeOut();
	} else {
		$('.button--back').fadeIn();
	}
   lastScrollTop = srollTop <= 0 ? 0 : srollTop;
}, false);

import './src/js/bootstrap';

$(document).ready(() => {
	$('.header').height($(window).height());

	$(".navbar a").click(function(){
		$("body,html").animate({
			scrollTop:$("#" + $(this).data('value')).offset().top
		},1000)

	})
});
function change_nav(element) {
	$('li').removeClass('active')
	element.addClass('active')

	$('.pages .row .col-md-12').removeClass('hide')
	$('.pages .row .col-md-12').addClass('hide')
	
	$('*[data-name="'+element.text()+'"]').removeClass('hide')
}
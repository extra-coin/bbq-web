$(document).ready(function() {
	$("ul.nav li a[href^='#']").on('click', function(e) {
   		e.preventDefault();
   		$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);
	});

	$('#melcontact').on('click', function(e) {
		this.href='mailto:' + 'contact' + '@' + 'extra-coin.org';
	});

	$('#custom').on('keyup', function() {
		$('#custom_size').html(this.value.length + ' / 255');
	})
});



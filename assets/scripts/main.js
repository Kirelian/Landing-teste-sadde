$('.menu, .overlay').click(function () {
	$('.menu').toggleClass('clicked');
	
	$('#nav').toggleClass('show');
	
});

document.getElementById('phone').addEventListener('input', function (y) {
    var a = y.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    y.target.value = !a[2] ? a[1] : '(' + a[1] + ') ' + a[2] + (a[3] ? '-' + a[3] : '');
});
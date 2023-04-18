$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var inputData = $('#input-data').val();
		$.ajax({
			url: '/api/data',
			type: 'POST',
			data: { data: inputData },
			success: function(response) {
				$('#output-data').html(response);
			}
		});
	});
});

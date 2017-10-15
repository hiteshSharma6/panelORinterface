function init() {
	$('#myModal').modal({
		keyboard: false
	});
	$('#myModal').modal('toggle');
	
	
	$(document).ready(function () {
		$('#university').dataTable();
	});
}
window.addEventListener("DOMContentLoaded", init);
(function($){
$(document).ready(function() {

function progress(percent, element) {
	var progressBarWidth = percent * element.width() / 100;
	// With labels:
	element.find('div').animate({ width: progressBarWidth }, 3000).html(percent + "%&nbsp;"); 
				
	// Without labels:
	//element.find('div').animate({ width: progressBarWidth }, 500); 
	} 
		
		$('.progressBar').one('inview', function (event, visible) {
		
		var bar = $(this);
		var max = $(this).attr('id'); 
		max = max.substring(3);

		progress(max, bar);
	   
		});   
	
		
});
})( jQuery );
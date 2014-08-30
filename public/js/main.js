(function(){
	'use strict';
	var images = [],
	initialize = true;

	$(window).on('action:ajaxify.end',displayHeader);

	function displayHeader() {

		$.getJSON(RELATIVE_PATH + '/api/plugins/custom-header', getImages);	
	}

	function getImages(data) {
        		$.each(data.images, function(key, data){
        			images.push(data.image);
        		});
        		if (images.length > 0 && data.selector.length > 0) {
	        		displayImage(data.selector);        			
        		}
	}

	function displayImage(selector) {
		var limit = images.length,
		header = 'url('+images[Math.floor(Math.random()*limit)]+')',
		bg = $(selector),
		old = bg.css('background-image');

		if (old !== header) {
			if (initialize) {
				var color = bg.css('background-color');
				old = '';
			}  else {
				color = '';
			}
			$('<div>').addClass('crossfade').prependTo(bg).css({
				'display': 'block',
				'width': '100%',
				'height': '100%',
				'position': 'absolute',
				'top': '0',
				'background-color':color,
				'background-image':old
			}).fadeOut(1000);

			bg.css('background-image',header);
		}
		initialize = false;
	}
}());
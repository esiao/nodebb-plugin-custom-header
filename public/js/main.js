(function(){
	'use strict';
	var images = [],
	header;

	$(window).on('action:ajaxify.end',displayHeader);

	function displayHeader() {

		$.getJSON(RELATIVE_PATH + '/api/plugins/custom-header', getImages);	
	}

	function getImages(data) {
        		$.each(data.images, function(key, data){
        			images.push(data.image);
        		});
        		randomImage();
        		displayImage(data.selector);
	}

	function randomImage() {
		var limit = images.length;
		header = images[Math.floor(Math.random()*limit)];
	}

	function displayImage(selector) {
		var bg = $(selector),
		old = bg.css('background-image');
		header = 'url('+header+')';

		if (old !== header) {
			bg.css('background-image',header);	
		}
	}
}());
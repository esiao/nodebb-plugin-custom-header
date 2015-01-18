"use strict";

var 	db = module.parent.require('./database'),
	customHeader = {};

customHeader.init = function (params, callback) {

	params.router.get('/admin/plugins/custom-header', params.middleware.admin.buildHeader, renderAdmin);
	params.router.get('/api/admin/plugins/custom-header', renderAdmin);
	params.router.get('/api/plugins/custom-header', renderFront);

	params.router.post('/api/admin/plugins/custom-header/save', save);

	callback();
};

customHeader.addAdminNavigation = function (header, callback) {

	header.plugins.push({
		route: '/plugins/custom-header',
		icon: 'fa-file-image-o',
		name: 'Custom Header'
	});
	callback(null, header);
}

function render (res, next, path) {

	db.getObject('plugins:custom-header', function(err, data) {
		if (err) return next(err);
		if (data) {
			data = {
				images: JSON.parse(data.images),
				selector: data.selector
			}			
		} else {
			data = {
				images: [],
				selector: ''
			}	
		}
		res.render(path, data);
	});
}

function renderAdmin (req, res, next) { render( res, next, 'admin/plugins/custom-header' ) }
function renderFront (req, res, next) { render( res, next, 'plugins/custom-header' ) }

function save (req, res, next) {

	var data = {
		selector: req.body.selector,
		images: req.body.images
	};
	db.setObject('plugins:custom-header', data, function(err) {
		err ? res.json(500, 'Error while saving settings') : res.json('Settings successfully saved');
	});
}

module.exports = customHeader;

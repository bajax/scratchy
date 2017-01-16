'use strict';

var config;

module.exports = (_config) =>
{
	config = _config;
	return routes;
}

function routes (router)
{
	router.get('/', (req, res, next) =>
	{
		res.render('index', 
			{
				title :'Index',
			});
	});

	router.get('/gl/:page', (req, res, next) =>
	{
		res.render('gl', 
			{
				title : req.params.page,
				page  : req.params.page
			});
	});

	router.get('/draw', (req, res, next) =>
	{
		res.render('draw', 
			{
				title : 'Drawing Test',
			});
	});
		
	router.get('/socket', (req, res, next) =>
	{
		res.render('socket', 
			{
			});
	});

	return router;
}

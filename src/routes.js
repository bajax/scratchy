/** 
 * GUI Editor.  Allows for editing the game world (the megastructure).
 */
'use strict';
var Item;
var ItemEditor;

module.exports = (config) =>
{
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

	router.get('/tools_test', (req, res, next) =>
	{
		res.render('tools_test', 
			{
				title     : req.params.page,
				page      : req.params.page,
				primary   : 'rgba(255,255,255,1)',
				secondary : 'rgba(0,0,0,1)',
				swatches  : 
				[
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,0,0,1)',
					'rgba(0,255,0,1)',
					'rgba(0,0,255,1)',
					'rgba(255,255,255,1)',
					'rgba(255,255,255,1)',
					'rgba(255,255,255,1)',
				],
				layers    : [{id: 1}]

			});
	});

	return router;
}

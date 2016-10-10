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

	return router;
}

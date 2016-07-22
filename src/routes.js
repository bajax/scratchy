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

	router.get('/viewport', (req, res, next) =>
	{
		res.render('viewport', 
			{
				title :'ViewPort',
			});
	});

	return router;
}

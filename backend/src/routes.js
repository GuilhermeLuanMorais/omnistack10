const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.post('/devs', DevController.store);
routes.post('/devs', DevController.index);

routes.post('/search', SearchController.index);

module.exports = routes;
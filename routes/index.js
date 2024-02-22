const MemeController = require("../controllers/memesController");
const MusiqueController = require("../controllers/musiquesController");
const TestApiController = require("../controllers/testApiController");

module.exports = server => {
        // MEMES
        server.get('/memes', MemeController.getAll) ;
    
        server.get('/memes/:id', MemeController.get);

        //MUSIQUES
        server.get('/musiques', MusiqueController.getAll) ;
    
        server.get('/musiques/:id', MusiqueController.get);
        
        //TESTAPI
        server.get('/testApi', TestApiController.getAll);

        server.get('/testApi/city/:name', TestApiController.getByCityName);
           
}
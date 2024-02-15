const MemeController = require("../controllers/memesController");
const MusiqueController = require("../controllers/musiquesController");

module.exports = server => {
        // MEMES
        server.get('/memes', MemeController.getAll) ;
    
        server.get('/memes/:id', MemeController.get);

        //MUSIQUES
        server.get('/musiques', MusiqueController.getAll) ;
    
        server.get('/musiques/:id', MusiqueController.get);
}
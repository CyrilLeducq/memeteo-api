const MusiqueModel = require("../models/Musique");

module.exports = {
    getAll(req, res) {
        MusiqueModel.find().then(musiques => {
            res.json(musiques);
        }).catch(error => {
            console.error("Erreur lors de la récupération des musiques:", error);
            res.status(500).json({ error: "Erreur lors de la récupération des musiques" });
        });
    },
    get(req, res) {
        const id = req.params.id;
        MusiqueModel.findById(id).then(musique => {
            if (!musique) {
                res.status(404).json({ error: "Aucun meme trouvé avec cet ID" });
            } else {
                res.json(musique);
            }
        }).catch(error => {
            console.error("Erreur lors de la récupération de la musique:", error);
            res.status(500).json({ error: "Erreur lors de la récupération de la musique" });
        });
    }
}

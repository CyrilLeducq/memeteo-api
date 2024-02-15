const MemeModel = require("../models/Meme");

module.exports = {
    getAll(req, res) {
        MemeModel.find().then(memes => {
            res.json(memes);
        }).catch(error => {
            console.error("Erreur lors de la récupération des memes:", error);
            res.status(500).json({ error: "Erreur lors de la récupération des memes" });
        });
    },
    get(req, res) {
        const id = req.params.id;
        MemeModel.findById(id).then(meme => {
            if (!meme) {
                res.status(404).json({ error: "Aucun meme trouvé avec cet ID" });
            } else {
                res.json(meme);
            }
        }).catch(error => {
            console.error("Erreur lors de la récupération du meme:", error);
            res.status(500).json({ error: "Erreur lors de la récupération du meme" });
        });
    }
}

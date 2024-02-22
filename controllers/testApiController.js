const TestApiModel = require("../models/TestApi");

module.exports = {
    getAll(req, res) {
        TestApiModel.find().then(testApi => {
            res.json(testApi);
        }).catch(error => {
            console.error("Erreur lors de la récupération des données météorologiques:", error);
            res.status(500).json({ error: "Erreur lors des données météorologiques" });
        });
    },
    getByCityName(req, res) {
        // Récupérer le nom de la ville depuis les paramètres de requête
        const cityName = req.params.name; // Si le nom de la ville est passé dans l'URL de la requête
    
        // Vous pouvez également utiliser req.query si le nom de la ville est passé dans les paramètres de la requête
        // const cityName = req.query.q;
    
        // Utiliser le nom de la ville pour récupérer les données météorologiques correspondantes
        TestApiModel.findOne({ 'location.name': cityName })
            .then(testApi => {
                if (!testApi) {
                    res.status(404).json({ error: "Données météorologiques non trouvées pour cette ville" });
                } else {
                    res.json(testApi);
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données météorologiques par nom de ville :", error);
                res.status(500).json({ error: "Erreur lors de la récupération des données météorologiques par nom de ville" });
            });
        } 
}

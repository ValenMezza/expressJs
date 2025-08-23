let stockController = {
    index: function (req, res) {
        res.send('Stock page');
    },
    show: function (req, res) {
        res.send(`hola  ${req.params.id}`);
    },
    showComments: function (req, res) {
        res.send(` + ${req.params.id} +  comentarios:  ${req.params.id}  adsdsafsasadf   ${req.params.commentsId}`);
    },
    create: function (req, res) {
        res.send('Crear un nuevo elemento en stock');
    }
}


module.exports = stockController;
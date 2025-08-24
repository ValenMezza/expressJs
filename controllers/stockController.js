let stockController = {
    index: function(req, res){
        let stockList = ['producto 1', 'producto 2', 'producto 3', 'producto 4'];
        return res.render('stocks', { title: 'Stocks', listaStock: stockList});
    },
    show: function (req, res) {
        res.send(`hola  ${req.params.id}`);
    },

    create: function (req, res) {
        res.send('Crear un nuevo elemento en stock');
    }
}


module.exports = stockController;
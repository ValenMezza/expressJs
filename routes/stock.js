let express = require('express');
let router = express.Router();

let stockController=require('../controllers/stockController');


router.get('/', stockController.index);

router.get('/id/:id', stockController.show);


router.get('/newstock', stockController.create);
module.exports = router;
let express = require('express');
let router = express.Router();
let stockController=require('../controllers/stockController');


router.get('/', stockController.index);

router.get('/id/:id', stockController.show);

router.get('/id/:id/comments/:commentsId?', stockController.showComments);

router.get('/create', stockController.create);
module.exports = router;
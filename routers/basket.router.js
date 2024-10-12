const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basket.controller');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const authMiddleware = require('../middlewares/auth.middelewares');

// //PRODUCTS

router.post("/get", urlencodedParser, jsonParser, basketController.getBasket)

router.post('/add', urlencodedParser, jsonParser, basketController.productAdd);

router.post('/delete', urlencodedParser, jsonParser, basketController.productDelete);

module.exports = router;

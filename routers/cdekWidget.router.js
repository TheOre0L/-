const Router = require('express');
const router = new Router();
const Service = require('../controllers/cdek/widget/service');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const authMiddleware = require('../middlewares/auth.middelewares');

// //PRODUCTS
router.use(bodyParser.json());
router.all('/', urlencodedParser, jsonParser, (req, res) => Service.process(req, res))


module.exports = router;

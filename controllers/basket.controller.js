const bd = require('../bd');
const uuid = require('uuid');
const LogsService = require('./logs.controller');

class basketController {
    async getBasket (req, res) {
        try {
            let { userid } =
                req.body;
            const basket = await bd.query("SELECT b.*, p.title, p.description, p.images, p.price FROM basket AS b JOIN product AS p ON b.productid = p.id WHERE b.userid = $1;", [userid])
            return res.status(200).json({
                basket: basket.rows
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Произошла непредвиденная ошибка!',
                error: error,
            });
        }
    }
    //BASKET
    async productAdd(req, res) {
        try {
            let { userid, productid, color } =
                req.body;

            const basketAdd = await bd.query(
                'INSERT INTO basket (userid, productid, color) ' +
                    'VALUES ($1, $2, $3) RETURNING *',
                [userid, productid, color]
            );
            const basket = await bd.query("SELECT b.*, p.title, p.description, p.price FROM basket AS b JOIN product AS p ON b.productid = p.id WHERE b.userid = $1;", [userid])
            return res.status(200).json({
                message: 'Продукт успешно добавлен в корзину!',
                product: basketAdd.rows[0],
                basket: basket.rows
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Произошла непредвиденная ошибка!',
                error: error,
            });
        }
    }
    async productDelete(req, res) {
        try {
            let { id, userid } = req.body;

            const deleteProduct = await bd.query(
                'DELETE FROM basket WHERE id = $1 AND userid = $2 RETURNING *',
                [id, userid]
            );
            const basket = await bd.query("SELECT b.*, p.title, p.description, p.images, p.price FROM basket AS b JOIN product AS p ON b.productid = p.id WHERE b.userid = $1;", [userid])
            return res.status(200).json({
                message: 'Корзина успешно обновлена!',
                basket: basket.rows
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Произошла непредвиденная ошибка!',
                error: error,
            });
        }
    }
}

module.exports = new basketController();

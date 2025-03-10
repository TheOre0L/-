const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/user.router');
const productRouter = require('./routers/product.router');
const basketRouter = require('./routers/basket.router');
const authMiddleware = require('./middlewares/auth.middelewares');
const isActive = require('./middlewares/isActive.middlewares');
const cdekWidget = require("./routers/cdekWidget.router");
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    })
);
app.use("/service", cdekWidget)
app.use('/uploads', express.static('uploads'));
app.use('/api/v1.0/auth', userRouter);
app.use('/api/v1.0/product', productRouter);
app.use('/api/v1.0/basket', basketRouter);

const storage = multer.diskStorage({
    destination: (_, __, cd) => {
        cd(null, 'uploads');
    },
    filename: (_, file, cd) => {
        cd(null, file.originalname);
    },
});
const upload = multer({ storage });
app.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({
        url: `/uploads/${req.file.originalname}`,
    });
});

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
        console.log('Здесь был Паша');
    }
};

start();

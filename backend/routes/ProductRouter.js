const productAuth = require('../middleware/ProductAuth');

const router = require('express').Router();

router.get('/', productAuth, (req, res)=> {
    res.status(200).json([
        {
            name: 'Mobile',
            price: 10000,
        },
        {
            name: 'TV',
            price: 20000,
        }
    ])
});

module.exports = router;
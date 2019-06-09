const router = require('express').Router()

const ProductController = require('./controllers/ProductController')

router.get('/products', ProductController.findALL)
router.get('/products/:id', ProductController.show)
router.post('/products', ProductController.register)
router.put('/products/:id', ProductController.update)
router.delete('/products/:id', ProductController.destroy)

module.exports = router
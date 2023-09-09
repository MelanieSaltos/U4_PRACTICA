import {Router} from "express";
import *as productstCtrl  from "../controllers/products.controller";
const router=Router()

router.post('/', productstCtrl.createProduct)

router.get('/', productstCtrl.getProducts)

router.get('/:productId', productstCtrl.getProductById)

router.put('/:productId', productstCtrl.updateProductById)

router.delete('/:productId', productstCtrl.deleteProductById)


export default router;
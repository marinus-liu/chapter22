/* const Router = require('koa-router')
const b = require('../api/b') */
import Router from "koa-router"
import bController from "../api/BController"

const router = new Router()
router.get('/demo2',bController.demo)

/* module.exports = router */



export default router
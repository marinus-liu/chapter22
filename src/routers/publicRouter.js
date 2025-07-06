/* const Router = require('koa-router')
const a = require('../api/a')

const router = new Router()
router.get('/a',a)

module.exports = router */

import Router from "koa-router";
import publicController from '../api/PublicController'

const router = new Router()

router.get('/getCaptcha', publicController.getCaptcha)

export default router
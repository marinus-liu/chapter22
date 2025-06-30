/* const Router = require('koa-router')
const a = require('../api/a')

const router = new Router()
router.get('/a',a)

module.exports = router */

import Router from "koa-router";
import demoController from '../api/DemoController'

const router = new Router()

router.get('/demo', demoController.demo)

export default router
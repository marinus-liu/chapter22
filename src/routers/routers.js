/* const combineRouters = require('koa-combine-routers')


const aRouters = require('./demoRouter')
const bRouters = require('./bRouter')

module.exports = combineRouters(
    aRouters,
    bRouters
) */

import combineRoutes from 'koa-combine-routers'
import publicRouter from './publicRouter'
import bRouter from './bRouter'
import loginRouter from './loginRouter'

export default combineRoutes(publicRouter,bRouter,loginRouter)
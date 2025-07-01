/* const combineRouters = require('koa-combine-routers')


const aRouters = require('./demoRouter')
const bRouters = require('./bRouter')

module.exports = combineRouters(
    aRouters,
    bRouters
) */

import combineRoutes from 'koa-combine-routers'
import demoRouter from './demoRouter'
import bRouter from './bRouter'

export default combineRoutes(demoRouter,bRouter)
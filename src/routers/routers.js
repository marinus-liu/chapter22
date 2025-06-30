/* const combineRouters = require('koa-combine-routers')


const aRouters = require('./demoRouter')
const bRouters = require('./bRouter')

module.exports = combineRouters(
    aRouters,
    bRouters
) */

import combineRoutes from 'koa-combine-routers'
import demoRouter from './demoRouter'

export default combineRoutes(demoRouter)
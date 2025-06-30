// const koa = require('koa')
// const path = require('path')
// const helmet = require('koa-helmet')
// const statics = require('koa-static')
// es6写法
import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './src/routers/routers'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cros from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'

const app =new koa()

// const router = require('./src/routers/routers')

/* 中间件 */
/* app.use(helmet())
app.use(statics(path.join(__dirname,'./src/public/')))
console.log(path.join(__dirname,'./src/public/'))
app.use(router()) */

const isDevMode  =  process.env.NODE_ENV  === 'production' ? false : true;
/* 使用compose整合中间件 */
const middleware = compose([
    koaBody(),
    statics(path.join(__dirname,'./src/public/')),
    cros(),
    jsonutil({pretty:false,param:'pretty'}),
    helmet()
])
if(!isDevMode) {
    app.use(compress())
}

app.use(middleware)
app.use(router())

app.listen(8080)

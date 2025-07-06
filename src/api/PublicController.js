
/* 
function a (ctx){
    ctx.body ={
    "message":"hello from a"

    }


}

module.exports ={
    a
} */



/* module.exports = function (ctx) {

    ctx.body = {
        "message":"hello from a test!!"
    }
} */
import svgCaptcha from 'svg-captcha'

class PublicController{
    constructor () {}
    async getCaptcha(ctx) {
        const newCaptcha = svgCaptcha.create({
        })
        console.log(newCaptcha)

        ctx.body = {
            code:200,
            data:newCaptcha.data,
            msg: 'body message   test is success'
        }
    }
    
}

export default new PublicController();
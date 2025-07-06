
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
            size: 4,
            ignoreChars: '0o1il',
            color: true,
            noise: Math.floor(Math.random() * 5),
            width: 150,
            height: 50,
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
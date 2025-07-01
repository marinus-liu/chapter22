/* module.exports = function (ctx) {

    ctx.body = {
        "message":"hello from b aa"
    }
} */

/* function b (ctx){
    ctx.body ={
    "message":"hello from b"

    }


}

module.exports ={
    b
} */


class BController{
    constructor () {}
    async demo(ctx) {
        ctx.body = {
            msg: 'body message   test is testb'
        }
    }
    
}

export default new BController();
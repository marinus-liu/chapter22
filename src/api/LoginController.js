import send from "../config/MailConfig";
import moment from 'moment'

class LoginController {
  constructor() {}
  async forget (ctx) {
    const { body } = ctx.request;
    try {
      let res = await send({
        code: "1234",
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: "graham",
      });
      ctx.body = {
        code: 200,
        data: res,
        msg: '邮件发送成功'
      }
    } catch (e) {}
  }
}

export default new LoginController()
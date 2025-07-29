const nodemailer = require("nodemailer");

//set usrinfo
/* let sendInfo = {
  code: "1234",
  expire: "2025-10-1",
  email: "grahamhuang@qq.com",
  user: "graham",
}; */

async function send (sendInfo) {
// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "grahamhuang@qq.com",
    pass: "jloojimrvsgsbfia",
  },
});

let url = "http://www.imooc.com";
// Wrap in an async IIFE so we can use await.
 /*  try { */
    const info = await transporter.sendMail({
      from: '"认证邮件" <grahamhuang@qq.com>',
      to: sendInfo.email,
      subject:
        sendInfo.user !== ""
          ? `你好开发者${sendInfo.user},《慕课网前端全栈实战》注册码`
          : "《慕课网前端全栈实战》注册码",
      text: `您在《慕课网前端全栈实战》课程中注册，你的注册码是${sendInfo.code},注册码过期时间${sendInfo.expire}`, // plain‑text body
      html: `
      <html>

        <head> </head>

        <body>
            <div
                style="border: 1px solid #dcdcdc; color:#676767; width:600px; margin: 0 auto; padding-bottom: 50px; position:relative;">
                <div style="height: 60px; background: #393d49; line-height:60px; color:#58a36f; font-size: 18px; padding-left: 10px;">
                    Imooc社区————欢迎来到官方社区</div>
                <div sytle="padding: 25px">
                    <div> 您好，${sendInfo.user}同学，重置链接的有效时间30分钟，请在${sendInfo.expire}之前重置您的密码</div>
                    <a href="${url}"
                        style="padding: 10px 20px; color:#fff; background: #009e94; display: inline-block; margin:15px 0 ;">立即重置密码</a>
                    <div style="padding: 5px; background: #f2f2f2;">如果不是你本人操作，请不要激活！否则您 的邮箱将会被 他人绑定。</div>
                    <div style="background: #fafafa;color:#b4b4b4;text-align:center;line-height:45px;height: 45px; position: absolute; left: 0; bottom : 0; width: 100%; ">
                        系统邮件，请不要直接回复</div>
                </div>

            </div>
        </body>

      </html>
    
    `, // HTML body
    });
// console.log("Message sent: %s", info.messageId);
    return "Message sent: %s", info.messageId
   /*  console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); */
 /*  } catch (e) {
    console.error("Error while sending mail", e);
  } */
}
// main(sendInfo).catch(console.error)
export default send

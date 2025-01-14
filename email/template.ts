export const emailTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visyntro</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f8f8; margin-top: 60px;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white;">
        <div style="text-align: center; padding: 20px 0;">
            <h1 style="font-size:15px;color:#9AA6B2">Visyntro</h1>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
            

<svg width="100" height="100" viewBox="0 0 30 30">
    <circle cx="10" cy="15" r="3" fill="#4F46E5"/>
    <circle cx="20" cy="10" r="3" fill="#4F46E5"/>
    <circle cx="20" cy="20" r="3" fill="#4F46E5"/>
    <path d="M10 15 L20 10 M10 15 L20 20" stroke="#4F46E5" fill="none"/>
</svg>
            <span style="font-size: 50px; font-weight: bold; margin-left: 10px;">VISYNTRO</span>
        </div>
        <div style="width:100%; border:0.5px solid black"></div>
        <div style="padding: 20px 0;">
            <h2>Query from, {name}</h2>
            <div style="margin-bottom: 20px;">
                <div style="margin: 10px 0; color: #333;">Organization Name: {organization}</div>
                <div style="margin: 10px 0; color: #333;">Name: {name}</div>
                <div style="margin: 10px 0; color: #333;">Email: {email}</div>
                <div style="margin: 10px 0; color: #333;">Phone: {phone}</div>         
                <div style="margin: 10px 0; color: #333;">Business: {business}</div>     
            </div>
        </div>
        <div style="text-align: center; padding: 20px 0; color: #666; font-size: 12px;">
            © Visyntro<br>
            <a href="https://visyntro.com" target="_blank">Home</a>
        </div>
    </div>
</body>
</html>`;

export const subscriptionTemplate = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <body
    style='background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em;margin:0 auto;padding:20px 0 48px"
    >
      <tbody>
        <tr style="width:100%">
          <td>
            <div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
            <svg width="100" height="100" viewBox="0 0 30 30">
    <circle cx="10" cy="15" r="3" fill="#4F46E5"/>
    <circle cx="20" cy="10" r="3" fill="#4F46E5"/>
    <circle cx="20" cy="20" r="3" fill="#4F46E5"/>
    <path d="M10 15 L20 10 M10 15 L20 20" stroke="#4F46E5" fill="none"/>
</svg>
            <span style="font-size: 50px; font-weight: bold; margin-left: 10px;">VISYNTRO</span>
            </div>
            <p style="font-size:16px;line-height:26px;margin:16px 0">
              Hi
              <!-- -->{name}<!-- -->,
            </p>
            <p style="font-size:16px;line-height:26px;margin:16px 0">
              Welcome to Visyntro,an empowering business solutions with Expert Services.
            </p>
            <p style="font-size:16px;line-height:26px;margin:16px 0">
              Best,<br />The Visyntro
            </p>
            <hr
              style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0"
            />
      
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>

`;

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function post(req) {
	try {
		// console.log("REQ.BODY", req.body);
		await sendgrid.send({
			to: 'logan@firefly.llc', // Your email where you'll receive emails
			from: 'logan@firefly.llc', // your website email address here
			subject: `${req.body.location} - ${req.body.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>One Sleep Company Contact Form Submission</title>
        <meta name="description" content="One Sleep Company Contact Form Submission">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      </head>
      
      <body>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <div style="font-size: 16px;"> 
              <h3>From: ${req.body.firstName} ${req.body.lastName}</h3>
              <h3>Email: ${req.body.email} </h3>
              <h3>Phone: ${req.body.tel} </h3>
              <p>Message:</p
              <p>${req.body.body}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`
		});
	} catch (error) {
		// console.log(error);
		return {
			status: 500,
			body: error
		};
	}

	return {
		status: 200
	};
}

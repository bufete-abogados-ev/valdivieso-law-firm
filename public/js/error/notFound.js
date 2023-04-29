

function NotFound() {
    return /*html*/`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 Not Found</title>
            <link rel="stylesheet" href="css/gozu.css">
        </head>
        <body style="color: #444; margin:0;font: normal 14px/20px Arial, Helvetica, sans-serif; height:100%; background-color: #fff;">
            <div class="h100pc dpF fdC w100pc ovfH">
                <div style="height:calc(100% - 100px); ">
                    <div class="dpF aiC jcC w100pc h100pc fdC">
                        <h1 style="margin:0; font-size:150px; line-height:150px; font-weight:bold;">404</h1>
                        <h2 style="margin-top:20px;font-size: 30px;">Not Found
                        </h2>
                        <p>The resource requested could not be found on this server!</p>
                    </div>
                </div>
                <div class="coWhite fs12 mga posR w100pc pd1em"
                    style="clear:both;height:100px;background-color:#474747;border-top: 1px solid rgba(0,0,0,0.15);box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset;">
                    <br>No te creas habil <a style="color:#fff;" href="http://localhost:3000/">Regresar</a>
                </div>
            </div>
        </body>
        </html>
    `
}

module.exports = {
    NotFound
}

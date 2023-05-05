
function MailMessage({
        name        ='', 
        email       ='', 
        phone       ='', 
        message     ='',
        currentDate ='',
        imagenBase64='',
        ext         ='jpg',
        cid         ='imagen1'
    }={}) {

    const img = imagenBase64    ? `<img src="data:image/${ext};base64,${imagenBase64}"/>` 
                                : `<img src="cid:${cid}">`;

    return /*html*/`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                .tableGeneral{
                    width: 100%;
                    border-collapse: collapse;
                    max-width: 600px;
                    margin: auto;
                }

                .tableGeneral td{
                    border-bottom: 1px solid #a88c44;
                    padding: 0.25em;
                }

                .tableGeneral .title{
                    text-align: center;
                    font-weight: bold;
                    font-size: 20px;
                    border: none;
                    padding-bottom: 20px;
                }
                .tableGeneral .label{
                    width: 15%;
                    font-weight: bold;
                }

                .tableGeneral .message{
                    text-align: justify;
                }

                .tableGeneral img{
                    width: 100%;
                    border-bottom-left-radius: 50px;
                    border-bottom-right-radius: 50px;
                }
                .tableGeneral .contentImg{
                    border: none;
                }

                .fecha{
                    text-align: right;
                    font-size: 12px;
                    color: gray;
                }

        
            </style>
        </head>
        <body>
            <table class="tableGeneral">
                <tr>
                    <td colspan="2" class="title">FORMULARIO DE CONTACTO</td>
                </tr>
                <tr>
                    <td class="label">NOMBRE:</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td class="label">EMAIL:</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td class="label">TELÉFONO:</td>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <td colspan="2" class="label">MENSAJE:</td>
                </tr>
                <tr>
                    <td colspan="2" class="message">${message}</td>
                </tr>
                <tr>
                <tr>
                    <td colspan="2" class="fecha" style="border:none;padding-top: 30px;">FECHA: ${currentDate}</td>
                </tr>
                <tr>
                    <td colspan="2" class="label contentImg">
                        ${img}
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `
}

module.exports = { MailMessage }
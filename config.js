module.exports = {
    App: {
        Debug: true,
        Layout: 'layout/default'
    },
    Roles: [{
        ID: 0,
        Name: 'Administrator'
    },{
        ID: 1,
        Name: 'Development'
    },{
        ID: 2,
        Name: 'Agent'
    },{
        ID: 3,
        Name: 'Customer'
    }],
    Email: {
        Interval: 30000
    },
    MySQL: {
        Host: 'bulutsoft.com.tr',
        User: 'bulutsoft_bulut',
        Password: '2289562324',
        Database: 'bulutsoft_destek'
    },
    IMAP: {
        Host: 'mail.bulutsoft.com.tr',
        User: 'destek@bulutsoft.com.tr',
        Password: '2289562324a',
        Port: 143,
        TLS: false
    },
    SMTP: {
        Host: 'mail.bulutsoft.com.tr',
        User: 'destek@bulutsoft.com.tr',
        Password: '2289562324a',
        Port: 587,
        TLS: false,
        Name: 'Bulutsoft Destek & Ürün Geliştirme'
    },
    AutoReply: {
        Status: true,
        Subject: '[{TicketCode}] Nolu Destek Talebiniz Hk.',
        Content: 'Merhaba {MailFromName},<br><br>[{TicketCode}] nolu talebiniz alınmıştır.<br>En kısa sürede ilgili ekibimiz konu ile ilgilenip tarafınıza bilgi verecektir.<br><br>Saygılarımızla.<br><br>Bulutsoft Yazılım ve Medya<br>Destek ve Ürün Geliştirme Departmanı<br>www.bulutsoft.com.tr<br><hr/><b>Konu:</b> {TicketSubject}<br><b>Mesaj:</b> {TicketContent}'
    },
    ChangeLogMailler: {
        Status: true,
        Subject: '{ServiceName} Adlı Ürünün Yeni Versiyonu Yayınlandı',
        CC: 'umit@bulutsoft.com.tr;deniz@bulutsoft.com.tr',
        Content: '<center style="width: 100%; background-color: #404E67">    <div style="max-width: 600px; margin: 0 auto" class="email-container">        <table style="margin: 0 auto; border-radius: 3px" cellspacing="0" cellpadding="0" align="center" width="100%" border="0">            <tbody>                <tr>                    <td style="padding: 20px 0; text-align: center"> <img src="http://bulutsoft.com.tr/images/logo.png" alt="Bulutsoft" style="height: auto" border="0"> </td>                </tr>                <tr>                    <td style="background-color: #ffffff; padding: 20px">                        <table style="margin: 0 auto" cellspacing="0" cellpadding="0" width="100%" border="0">                            <tbody>                                <tr>                                    <td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; font-weight: bold">                                        {ServiceName} adlı ürünün {Version} numaralı yeni versiyonu {Today} tarihinde yayınlandı.                                     </td>                                </tr>                                <tr>                                    <td style="padding: 15px 0 15px 0; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555">                                        Son versiyondaki yenilikler:                                    </td>                                </tr>                                <tr>                                    <td style="padding: 0; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555">                                        {Content}                                    </td>                                </tr>                            </tbody>                        </table>                    </td>                </tr>            </tbody>        </table>        <table style="margin: 0 auto" cellspacing="0" cellpadding="0" align="center" width="100%" border="0">            <tbody>                <tr>                    <td style="padding: 20px; font-family: sans-serif; font-size: 12px; line-height: 15px; text-align: center; color: #999999">                        <br><b>Bulutsoft Yazılım ve Medya</b><br>                        <span class="unstyle-auto-detected-links">                            Büyükdere Mahallesi Gençlik Bulvarı ETGB Osmangazi                            Üniversitesi no:4/44 Eski Teknopark Binası No:202 Kat:1<br>                            0850 850 25 87                        </span>                    </td>                </tr>            </tbody>        </table>    </div></center>'
    }
}
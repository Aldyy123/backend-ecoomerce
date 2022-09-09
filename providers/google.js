const { createToken } = require('../helpers/jwt');
const { User } = require('../models/index')
const { OAuth2Client } = require('google-auth-library');
const keys = require('../keys-google.json');
const querystring = require("querystring");


function getGoogleAuthURL() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
        redirect_uri: keys.web.redirect_uris[0],
        client_id: keys.web.client_id,
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ].join(" "),
    };

    return `${rootUrl}?${querystring.stringify(options)}`;

}

const callbackAuth = async (req, res, next) => {
    try {
        const code = req.query.code;

        const oAuth2Client = new OAuth2Client(
            keys.web.client_id,
            keys.web.client_secret,
            keys.web.redirect_uris[0]
        );
        const r = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(r.tokens);

        const url = 'https://people.googleapis.com/v1/people/me?personFields=names';
        const responseGoogleData = await oAuth2Client.request({ url });
        const tokenInfo = await oAuth2Client.getTokenInfo(
            oAuth2Client.credentials.access_token
        );

        // console.log(responseGoogleData.data.names[0].metadata);
        // console.log(responseGoogleData.data);
        // console.log(tokenInfo);
        const user = await User.findOrCreate({
            where: { email: tokenInfo.email },
            defaults: {
                email: tokenInfo.email,
                role: "Staff",
                username: tokenInfo.email,
                password: tokenInfo.email,
            },
        })

        const payload_jwt = {
            id: user[0].dataValues.id,
            role: user[0].dataValues.role
        };
        const access_token = createToken(payload_jwt);
        return res.status(200).json({
            message: 'Login successful',
            access_token
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}




module.exports = {
    callbackAuth,
    getGoogleAuthURL
}
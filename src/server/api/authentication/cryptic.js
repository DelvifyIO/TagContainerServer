const crypto = require("crypto")
const jwt =require("jsonwebtoken")
const hasher = (input,secret)=>crypto.createHmac("sha256",secret).update(input).digest("hex")

const generateJwt = ({merchant_id,name}) => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        admin: {
            merchant_id, //can add more fields of needed
            name
        },
        exp: parseInt(expiry.getTime()),
    }, process.env.WEB_SECRET)
};

module.exports = {hasher,generateJwt}
import { authValidator } from '../../validation';
const {hasher,generateJwt} = require("./cryptic")
//const { user, /*client*/ } = require(`../../../mongo/models`);
const db = require('../../../db/models')
const secret =process.env.WEB_SECRET;

const login = (req, res) => {
    const {merchant_id, name, password} = req.body;
    const {errors, isValid} = authValidator(req.body);
    if (!isValid) return res.status(400).send(errors);

    db.Merchant.findOne({where: {name, merchant_id}})
        .then(result => {
            if (!result) return res.status(401).send('name and or merchant_id not found')
            const hash = hasher(password, secret);

            if (hash !== result.password) return res.send("Incorrect password");
            const token = generateJwt(result)
            return res.send({admin: {name, merchant_id}, token});

        })
        .catch(e => res.send(e))
};

// import {admin} from '../../../mongo/models/schema';
// import { authValidator } from '../../validation';
//
// const login = (req, res) => {
//     const { username, password } = req.body;
//     const { errors, isValid } = authValidator(req.body);
//     if (!isValid) {
//         return res.status(400).send(errors);
//     }
//     admin.findOne({ username })
//         .then((foundAdmin) => {
//             if (!foundAdmin) {
//                 return res.status(401).send('Username not found');
//             }
//             if(foundAdmin.validPassword(password)) {
//                 const token = foundAdmin.generateJwt();
//                 return res.send({ admin: foundAdmin, token });
//             } else {
//                 return res.status(401).send('Incorrect password');
//             }
//         })
//         .catch(console.log);
// };

export {
    login,
};
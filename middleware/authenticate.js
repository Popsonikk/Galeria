const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    try {
        // przysłany token
        const token = req.cookies.mytoken;
        // dekoduj token
        const decode = jwt.verify(token, 'kodSzyfrujacy')
        // dodanie do request (req.user) danych zweryfikowanego usera 
        req.user = decode
        res.locals.logged_user = decode.username;
        next()
    }
    catch (err) {
        //res.redirect('/users/user_login')
        // res.json({
        //     message: 'Brak dostępu'
        // })
        res.send('Login in first!')
        res.locals.logged_user = null;
    }
}

module.exports = authenticate

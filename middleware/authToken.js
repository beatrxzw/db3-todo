const jwt = require ('jsonwebtoken');

const authToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Acesso negado!'});
    }

    try{
        const decoded = jwt.verify(token, 'billieteamo');
        req.userId =  decoded.id
        next()
    } catch{
        return res.status(401).json({ message: 'Token invalido! '})
    }
}

module.exports = authToken;
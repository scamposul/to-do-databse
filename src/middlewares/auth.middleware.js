const jwt = require("jsonwebtoken");

const authVerification = async (req, res, next) => {
try {
    const { id } = req.params;
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const isValid = jwt.verify(token, "1234", { algorithm: "HS512" });
    if (isValid) {
        next();
    } else {
        res.status(401).json({message: 'Vaya a hackear a su madre'})
    }
} catch (error) {
    next({
        message: 'Vaya a hackear a su madre',
        status: 401,
        errorContent: error
    });
}
};

module.exports = authVerification;

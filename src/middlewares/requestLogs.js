function logs(req, res, next) {
    console.log(`url: ${req.url} method: ${req.method}`);
    next();
}

module.exports = logs;
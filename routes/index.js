// This can be module later if needed
module.exports = function (app) {
    app.get('/', (req, res, next) => {
        res.send('Server set up');
    });
}

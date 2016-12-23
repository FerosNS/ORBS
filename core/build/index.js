module.exports = function (opts) {
    if (opts.error) {
        console.log(opts.code + " " + opts.error);
        return;
    }
    console.log(opts.INFO);
}

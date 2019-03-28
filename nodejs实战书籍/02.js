let testFunction = function (msg) {
    console.log(msg);
};
let timer = setTimeout(testFunction, 1000, 'this is a parameter.');

module.exports = { timer };
module.exports.uppercase = function (val) {
    return val.toUpperCase();
};

module.exports.lowercase = function (val) {
    return val.toLowerCase();
};

module.exports.stringify = function (val) {
    // because javascript: (''+undefined) === 'undefined'
    if ('undefined' === typeof val) {
        return '';
    }
    return '' + val;
};

module.exports.floatify = function (precision, val) {
    return parseFloat(val).toFixed(precision || 10) / 1;
};

module.exports.roundify = function (val) {
    return Math.round(val);
};

module.exports.toULLR = function (val) {
    return {
        type: 'envelope',
        coordinates: [[val.upperLeft.lon, val.upperLeft.lat], [val.lowerRight.lon, val.lowerRight.lat]]
    };
};

'use strict';

const moment = require('moment-timezone');

exports.handler = function (event, context, callback) {
    const todayMoment = moment().tz('Asia/Tokyo').format();

    callback(null, {
        statusCode: '200',
        body: 'The time in Japan is: ' + todayMoment,
    });
}

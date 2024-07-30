'use strict';

const moment = require('moment-timezone');

exports.handler = function (event, context, callback) {
    const todayMoment = moment().tz('Asia/Tokyo');

    callback(null, {
        statusCode: '200',
        body: 'The time in India is: ' + todayMoment,
    });
    
}

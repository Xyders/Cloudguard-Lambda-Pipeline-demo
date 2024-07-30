'use strict';

const moment = require('moment-timezone');

exports.handler = async (context, req) => {
    const todayMoment = moment().tz('Asia/Tokyo');

    return {
       statusCode: 200,
       headers: {'Content-Type': 'application/text'},
       body: 'The time in Japan is: ' + todayMoment
    };
}

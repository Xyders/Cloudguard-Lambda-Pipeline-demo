var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("Asia/Tokyo");
    callback(null, {
        statusCode: '200',
        body: 'The time in Japan is: ' + currentTime.toString(),
    });
};

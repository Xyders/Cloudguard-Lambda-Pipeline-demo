const dateAndTime = require('date-and-time');

exports.handler = (event, context, callback) => {
    // Set the timezone to Tokyo
    dateAndTime.timezone('Asia/Tokyo');

    // Get the current time
    const currentTime = dateAndTime.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
    
    callback(null, {
        statusCode: '200',
        body: 'The time in Japan is: ' + currentTime.toString(),
    });
};

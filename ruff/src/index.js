'use strict';
var http = require('http');
var querystring = require('querystring');

var options = {
    host: '192.168.78.149',
    port: 8000,
    path: '/data/',
    method: 'POST',
    headers: {
    }
};

function postState(state) {
    options.headers['Content-Length'] = state.length;
    var req = http.request(options, function(res) {
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.write(state);
    req.end();
}


$.ready(function (error) {
    var state = { humidity: 0, temperature: 0 }
    setInterval(function(){
        $('#HTSensor').getTemperature(function (error, temperature) {
            state.temperature = temperature
        });
        $('#HTSensor').getRelativeHumidity(function (error, humidity) {
            state.humidity = humidity
        });
        if(state.temperature*state.humidity>0){postState(JSON.stringify(state))};
    } ,1000)
});

$.end(function () {
});

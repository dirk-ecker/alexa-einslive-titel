const http = require("http");

exports.actualTitle = actualTitle;

const live1_url = 'http://www.wdr.de/radio/radiotext/streamtitle_1live.txt';

function actualTitle(callback) {
    http.get(live1_url, function(response) {
        let content = '';
        response.on('data', function(data) {
            content += data;
        });
        response.on('end', function() {
            console.log(content);
            let contentParts = content.split('-');
            if (contentParts.length !== 2) {
              callback();
            }
            callback({
                title: contentParts[1],
                artist: contentParts[0]
            });
        });
    });
}


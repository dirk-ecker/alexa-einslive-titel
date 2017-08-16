const http = require("http");

exports.actualTitle = actualTitle;

const live1_url = 'http://www.wdr.de/radio/radiotext/streamtitle_1live.txt';

function actualTitle(callback) {
    http.get(live1_url, function(response) {
        // Continuously update stream with data
        let content = '';
        response.on('data', function(data) {
            content += data;
        });
        response.on('end', function() {
            //console.log(content);
            let contentParts;
            if (content.indexOf('*') !== -1) {
                contentParts = [content];
            } else {
                contentParts = content.split('-');
            }
            callback({
                title: contentParts[1],
                artist: contentParts[0]
            });
        });
    });
}


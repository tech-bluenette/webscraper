var cheerio = require('cheerio');
var path = require("path");

var request = require('request');
request("http://substack.net/images/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body);

    $("td").each( function() {
    var url = "http://substack.net/ "
    var code = ($(this).find('code').text());
    var absolute = ($(this).find('a').attr('href'));
    var fileType = path.extname(absolute);

    console.log(code + url + absolute + fileType);

    });

     }
});

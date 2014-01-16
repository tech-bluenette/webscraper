var cheerio = require('cheerio');
var url = "http://substack.net/images/"

var request = require('request');
request("http://substack.net/images/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body);

    $("td").each( function() {
    var code = ($(this).find('code').text());
    var path = ($(this).find('a').attr('href'));

    console.log(code + url + path);

    });

     }
});

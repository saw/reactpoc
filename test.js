var fs = require('fs');

var wrapper = fs.readFileSync('./views/layout.html', 'utf-8');
var arr = wrapper.split('{{content}}');
console.log(arr.join('<h1>WOO WOO WOO</h1>'));
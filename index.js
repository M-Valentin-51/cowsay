const package = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `I'm ${package.name} , my campus is at ${package.campus}`,
    e :'^^',
    T : "UU",
}));
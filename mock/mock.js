var list = require('./list.json');
var listMore = require('./list-more.json');
var listCcl = require('./list-circle.json');
var vcity = require('./vcity.json');
module.exports = function() {
    return {
        "list": list,
        "more": listMore,
        "Ccl":listCcl,
        "vcity": vcity
    }
}

// restful

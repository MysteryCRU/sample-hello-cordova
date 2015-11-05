if("Hello, World!" === "Hello, World!") {
	console.log("Test passed.");
}

var assert = require('assert')
exports['test if the values are the same'] = function() {
    //var util = require("../www/js/util.js");
    //var testObj = {"lol":"ok"};
    //var testResult = util.copyObject(testObj);
    assert.equal(2 + 3, 5, 'four is not equal to five')
}
 
if (module == require.main) require('test').run(exports)
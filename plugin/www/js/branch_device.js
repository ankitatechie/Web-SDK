var exec = require("cordova/exec");

exports.getInstallData = function(debug, callback) {
    exec(callback, function() {
        callback({});
    }, "BranchDevice", "getInstallData", [debug]);
};

exports.getOpenData = function(debug, callback) {
    exec(callback, function() {
        callback({});
    }, "BranchDevice", "getOpenData", [debug]);
};
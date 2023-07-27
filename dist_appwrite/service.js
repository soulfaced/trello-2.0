"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var Service = exports.Service = /** @class */ (function () {
    function Service(client) {
        this.client = client;
    }
    Service.flatten = function (data, prefix) {
        if (prefix === void 0) { prefix = ''; }
        var output = {};
        for (var key in data) {
            var value = data[key];
            var finalKey = prefix ? "".concat(prefix, "[").concat(key, "]") : key;
            if (Array.isArray(value)) {
                output = Object.assign(output, this.flatten(value, finalKey));
            }
            else {
                output[finalKey] = value;
            }
        }
        return output;
    };
    Service.CHUNK_SIZE = 5 * 1024 * 1024; // 5MB
    return Service;
}());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ID = void 0;
var ID = /** @class */ (function () {
    function ID() {
    }
    ID.custom = function (id) {
        return id;
    };
    ID.unique = function () {
        return 'unique()';
    };
    return ID;
}());
exports.ID = ID;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
var Permission = exports.Permission = /** @class */ (function () {
    function Permission() {
    }
    Permission.read = function (role) {
        return "read(\"".concat(role, "\")");
    };
    Permission.write = function (role) {
        return "write(\"".concat(role, "\")");
    };
    Permission.create = function (role) {
        return "create(\"".concat(role, "\")");
    };
    Permission.update = function (role) {
        return "update(\"".concat(role, "\")");
    };
    Permission.delete = function (role) {
        return "delete(\"".concat(role, "\")");
    };
    return Permission;
}());

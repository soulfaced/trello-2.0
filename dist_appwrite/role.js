"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var Role = /** @class */ (function () {
    function Role() {
    }
    Role.any = function () {
        return 'any';
    };
    Role.user = function (id, status) {
        if (status === void 0) { status = ''; }
        if (status === '') {
            return "user:".concat(id);
        }
        return "user:".concat(id, "/").concat(status);
    };
    Role.users = function (status) {
        if (status === void 0) { status = ''; }
        if (status === '') {
            return 'users';
        }
        return "users/".concat(status);
    };
    Role.guests = function () {
        return 'guests';
    };
    Role.team = function (id, role) {
        if (role === void 0) { role = ''; }
        if (role === '') {
            return "team:".concat(id);
        }
        return "team:".concat(id, "/").concat(role);
    };
    Role.member = function (id) {
        return "member:".concat(id);
    };
    return Role;
}());
exports.Role = Role;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teams = void 0;
var service_1 = require("../service");
var client_1 = require("../client");
var Teams = /** @class */ (function (_super) {
    __extends(Teams, _super);
    function Teams(client) {
        return _super.call(this, client) || this;
    }
    /**
     * List Teams
     *
     * Get a list of all the teams in which the current user is a member. You can
     * use the parameters to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.list = function (queries, search) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/teams';
                        payload = {};
                        if (typeof queries !== 'undefined') {
                            payload['queries'] = queries;
                        }
                        if (typeof search !== 'undefined') {
                            payload['search'] = search;
                        }
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('get', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create Team
     *
     * Create a new team. The user who creates the team will automatically be
     * assigned as the owner of the team. Only the users with the owner role can
     * invite new members, add new owners and delete or update the team.
     *
     * @param {string} teamId
     * @param {string} name
     * @param {string[]} roles
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.create = function (teamId, name, roles) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        if (typeof name === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "name"');
                        }
                        path = '/teams';
                        payload = {};
                        if (typeof teamId !== 'undefined') {
                            payload['teamId'] = teamId;
                        }
                        if (typeof name !== 'undefined') {
                            payload['name'] = name;
                        }
                        if (typeof roles !== 'undefined') {
                            payload['roles'] = roles;
                        }
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('post', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get Team
     *
     * Get a team by its ID. All team members have read access for this resource.
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.get = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        path = '/teams/{teamId}'.replace('{teamId}', teamId);
                        payload = {};
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('get', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update Name
     *
     * Update the team's name by its unique ID.
     *
     * @param {string} teamId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.updateName = function (teamId, name) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        if (typeof name === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "name"');
                        }
                        path = '/teams/{teamId}'.replace('{teamId}', teamId);
                        payload = {};
                        if (typeof name !== 'undefined') {
                            payload['name'] = name;
                        }
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('put', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete Team
     *
     * Delete a team using its ID. Only team members with the owner role can
     * delete the team.
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.delete = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        path = '/teams/{teamId}'.replace('{teamId}', teamId);
                        payload = {};
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('delete', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * List Team Memberships
     *
     * Use this endpoint to list a team's members using the team's ID. All team
     * members have read access to this endpoint.
     *
     * @param {string} teamId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.listMemberships = function (teamId, queries, search) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        path = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
                        payload = {};
                        if (typeof queries !== 'undefined') {
                            payload['queries'] = queries;
                        }
                        if (typeof search !== 'undefined') {
                            payload['search'] = search;
                        }
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('get', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create Team Membership
     *
     * Invite a new member to join your team. Provide an ID for existing users, or
     * invite unregistered users using an email or phone number. If initiated from
     * a Client SDK, Appwrite will send an email or sms with a link to join the
     * team to the invited user, and an account will be created for them if one
     * doesn't exist. If initiated from a Server SDK, the new member will be added
     * automatically to the team.
     *
     * You only need to provide one of a user ID, email, or phone number. Appwrite
     * will prioritize accepting the user ID > email > phone number if you provide
     * more than one of these parameters.
     *
     * Use the `url` parameter to redirect the user from the invitation email to
     * your app. After the user is redirected, use the [Update Team Membership
     * Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow
     * the user to accept the invitation to the team.
     *
     * Please note that to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * Appwrite will accept the only redirect URLs under the domains you have
     * added as a platform on the Appwrite Console.
     *
     *
     * @param {string} teamId
     * @param {string[]} roles
     * @param {string} url
     * @param {string} email
     * @param {string} userId
     * @param {string} phone
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.createMembership = function (teamId, roles, url, email, userId, phone, name) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        if (typeof roles === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "roles"');
                        }
                        if (typeof url === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "url"');
                        }
                        path = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
                        payload = {};
                        if (typeof email !== 'undefined') {
                            payload['email'] = email;
                        }
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof phone !== 'undefined') {
                            payload['phone'] = phone;
                        }
                        if (typeof roles !== 'undefined') {
                            payload['roles'] = roles;
                        }
                        if (typeof url !== 'undefined') {
                            payload['url'] = url;
                        }
                        if (typeof name !== 'undefined') {
                            payload['name'] = name;
                        }
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('post', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get Team Membership
     *
     * Get a team member by the membership unique id. All team members have read
     * access for this resource.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.getMembership = function (teamId, membershipId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        if (typeof membershipId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "membershipId"');
                        }
                        path = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId).replace('{membershipId}', membershipId);
                        payload = {};
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('get', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update Membership Roles
     *
     * Modify the roles of a team member. Only team members with the owner role
     * have access to this endpoint. Learn more about [roles and
     * permissions](/docs/permissions).
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string[]} roles
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.updateMembershipRoles = function (teamId, membershipId, roles) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        if (typeof membershipId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "membershipId"');
                        }
                        if (typeof roles === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "roles"');
                        }
                        path = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId).replace('{membershipId}', membershipId);
                        payload = {};
                        if (typeof roles !== 'undefined') {
                            payload['roles'] = roles;
                        }
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('patch', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete Team Membership
     *
     * This endpoint allows a user to leave a team or for a team owner to delete
     * the membership of any other team member. You can also use this endpoint to
     * delete a user membership even if it is not accepted.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.deleteMembership = function (teamId, membershipId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        if (typeof membershipId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "membershipId"');
                        }
                        path = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId).replace('{membershipId}', membershipId);
                        payload = {};
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('delete', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update Team Membership Status
     *
     * Use this endpoint to allow a user to accept an invitation to join a team
     * after being redirected back to your app from the invitation email received
     * by the user.
     *
     * If the request is successful, a session for the user is automatically
     * created.
     *
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.updateMembershipStatus = function (teamId, membershipId, userId, secret) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        if (typeof membershipId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "membershipId"');
                        }
                        if (typeof userId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "userId"');
                        }
                        if (typeof secret === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "secret"');
                        }
                        path = '/teams/{teamId}/memberships/{membershipId}/status'.replace('{teamId}', teamId).replace('{membershipId}', membershipId);
                        payload = {};
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof secret !== 'undefined') {
                            payload['secret'] = secret;
                        }
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('patch', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get Team Preferences
     *
     * Get the team's shared preferences by its unique ID. If a preference doesn't
     * need to be shared by all team members, prefer storing them in [user
     * preferences](/docs/client/account#accountGetPrefs).
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.getPrefs = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        path = '/teams/{teamId}/prefs'.replace('{teamId}', teamId);
                        payload = {};
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('get', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update Preferences
     *
     * Update the team's preferences by its unique ID. The object you pass is
     * stored as is and replaces any previous value. The maximum allowed prefs
     * size is 64kB and throws an error if exceeded.
     *
     * @param {string} teamId
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Teams.prototype.updatePrefs = function (teamId, prefs) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof teamId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "teamId"');
                        }
                        if (typeof prefs === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "prefs"');
                        }
                        path = '/teams/{teamId}/prefs'.replace('{teamId}', teamId);
                        payload = {};
                        if (typeof prefs !== 'undefined') {
                            payload['prefs'] = prefs;
                        }
                        uri = new URL(this.client.config.endpoint + path);
                        return [4 /*yield*/, this.client.call('put', uri, {
                                'content-type': 'application/json',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Teams;
}(service_1.Service));
exports.Teams = Teams;
;

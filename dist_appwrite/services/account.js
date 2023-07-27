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
exports.Account = void 0;
var service_1 = require("../service");
var client_1 = require("../client");
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(client) {
        return _super.call(this, client) || this;
    }
    /**
     * Get Account
     *
     * Get currently logged in user data as JSON object.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/account';
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
     * Create Account
     *
     * Use this endpoint to allow a new user to register a new account in your
     * project. After the user registration completes successfully, you can use
     * the [/account/verfication](/docs/client/account#accountCreateVerification)
     * route to start verifying the user email address. To allow the new user to
     * login to their new account, you need to create a new [account
     * session](/docs/client/account#accountCreateSession).
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.create = function (userId, email, password, name) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof userId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "userId"');
                        }
                        if (typeof email === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "email"');
                        }
                        if (typeof password === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "password"');
                        }
                        path = '/account';
                        payload = {};
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof email !== 'undefined') {
                            payload['email'] = email;
                        }
                        if (typeof password !== 'undefined') {
                            payload['password'] = password;
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
     * Update Email
     *
     * Update currently logged in user account email address. After changing user
     * address, the user confirmation status will get reset. A new confirmation
     * email is not sent automatically however you can use the send confirmation
     * email endpoint again to send the confirmation email. For security measures,
     * user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal
     * one, by passing an email address and a new password.
     *
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updateEmail = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof email === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "email"');
                        }
                        if (typeof password === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "password"');
                        }
                        path = '/account/email';
                        payload = {};
                        if (typeof email !== 'undefined') {
                            payload['email'] = email;
                        }
                        if (typeof password !== 'undefined') {
                            payload['password'] = password;
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
     * Create JWT
     *
     * Use this endpoint to create a JSON Web Token. You can use the resulting JWT
     * to authenticate on behalf of the current user when working with the
     * Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes
     * from its creation and will be invalid if the user will logout in that time
     * frame.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.createJWT = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/account/jwt';
                        payload = {};
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
     * List Logs
     *
     * Get currently logged in user list of latest security activity logs. Each
     * log returns user IP address, location and date and time of log.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.listLogs = function (queries) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/account/logs';
                        payload = {};
                        if (typeof queries !== 'undefined') {
                            payload['queries'] = queries;
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
     * Update Name
     *
     * Update currently logged in user account name.
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updateName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof name === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "name"');
                        }
                        path = '/account/name';
                        payload = {};
                        if (typeof name !== 'undefined') {
                            payload['name'] = name;
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
     * Update Password
     *
     * Update currently logged in user password. For validation, user is required
     * to pass in the new password, and the old password. For users created with
     * OAuth, Team Invites and Magic URL, oldPassword is optional.
     *
     * @param {string} password
     * @param {string} oldPassword
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updatePassword = function (password, oldPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof password === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "password"');
                        }
                        path = '/account/password';
                        payload = {};
                        if (typeof password !== 'undefined') {
                            payload['password'] = password;
                        }
                        if (typeof oldPassword !== 'undefined') {
                            payload['oldPassword'] = oldPassword;
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
     * Update Phone
     *
     * Update the currently logged in user's phone number. After updating the
     * phone number, the phone verification status will be reset. A confirmation
     * SMS is not sent automatically, however you can use the [POST
     * /account/verification/phone](/docs/client/account#accountCreatePhoneVerification)
     * endpoint to send a confirmation SMS.
     *
     * @param {string} phone
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updatePhone = function (phone, password) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof phone === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "phone"');
                        }
                        if (typeof password === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "password"');
                        }
                        path = '/account/phone';
                        payload = {};
                        if (typeof phone !== 'undefined') {
                            payload['phone'] = phone;
                        }
                        if (typeof password !== 'undefined') {
                            payload['password'] = password;
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
     * Get Account Preferences
     *
     * Get currently logged in user preferences as a key-value object.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.getPrefs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/account/prefs';
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
     * Update currently logged in user account preferences. The object you pass is
     * stored as is, and replaces any previous value. The maximum allowed prefs
     * size is 64kB and throws error if exceeded.
     *
     * @param {Partial<Preferences>} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updatePrefs = function (prefs) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof prefs === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "prefs"');
                        }
                        path = '/account/prefs';
                        payload = {};
                        if (typeof prefs !== 'undefined') {
                            payload['prefs'] = prefs;
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
     * Create Password Recovery
     *
     * Sends the user an email with a temporary secret key for password reset.
     * When the user clicks the confirmation link he is redirected back to your
     * app password reset URL with the secret key and email address values
     * attached to the URL query string. Use the query string params to submit a
     * request to the [PUT
     * /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to
     * complete the process. The verification link sent to the user's email
     * address is valid for 1 hour.
     *
     * @param {string} email
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.createRecovery = function (email, url) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof email === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "email"');
                        }
                        if (typeof url === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "url"');
                        }
                        path = '/account/recovery';
                        payload = {};
                        if (typeof email !== 'undefined') {
                            payload['email'] = email;
                        }
                        if (typeof url !== 'undefined') {
                            payload['url'] = url;
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
     * Create Password Recovery (confirmation)
     *
     * Use this endpoint to complete the user account password reset. Both the
     * **userId** and **secret** arguments will be passed as query parameters to
     * the redirect URL you have provided when sending your request to the [POST
     * /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
     *
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} userId
     * @param {string} secret
     * @param {string} password
     * @param {string} passwordAgain
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updateRecovery = function (userId, secret, password, passwordAgain) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof userId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "userId"');
                        }
                        if (typeof secret === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "secret"');
                        }
                        if (typeof password === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "password"');
                        }
                        if (typeof passwordAgain === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "passwordAgain"');
                        }
                        path = '/account/recovery';
                        payload = {};
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof secret !== 'undefined') {
                            payload['secret'] = secret;
                        }
                        if (typeof password !== 'undefined') {
                            payload['password'] = password;
                        }
                        if (typeof passwordAgain !== 'undefined') {
                            payload['passwordAgain'] = passwordAgain;
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
     * List Sessions
     *
     * Get currently logged in user list of active sessions across different
     * devices.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.listSessions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/account/sessions';
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
     * Delete Sessions
     *
     * Delete all sessions from the user account and remove any sessions cookies
     * from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.deleteSessions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/account/sessions';
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
     * Create Anonymous Session
     *
     * Use this endpoint to allow a new user to register an anonymous account in
     * your project. This route will also create a new session for the user. To
     * allow the new user to convert an anonymous account to a normal account, you
     * need to update its [email and
     * password](/docs/client/account#accountUpdateEmail) or create an [OAuth2
     * session](/docs/client/account#accountCreateOAuth2Session).
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.createAnonymousSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/account/sessions/anonymous';
                        payload = {};
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
     * Create Email Session
     *
     * Allow the user to login into their account by providing a valid email and
     * password combination. This route will create a new session for the user.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session limits](/docs/authentication-security#limits).
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.createEmailSession = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof email === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "email"');
                        }
                        if (typeof password === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "password"');
                        }
                        path = '/account/sessions/email';
                        payload = {};
                        if (typeof email !== 'undefined') {
                            payload['email'] = email;
                        }
                        if (typeof password !== 'undefined') {
                            payload['password'] = password;
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
     * Create Magic URL session
     *
     * Sends the user an email with a secret key for creating a session. If the
     * provided user ID has not be registered, a new user will be created. When
     * the user clicks the link in the email, the user is redirected back to the
     * URL you provided with the secret key and userId values attached to the URL
     * query string. Use the query string parameters to submit a request to the
     * [PUT
     * /account/sessions/magic-url](/docs/client/account#accountUpdateMagicURLSession)
     * endpoint to complete the login process. The link sent to the user's email
     * address is valid for 1 hour. If you are on a mobile device you can leave
     * the URL parameter empty, so that the login completion will be handled by
     * your Appwrite instance by default.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session limits](/docs/authentication-security#limits).
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.createMagicURLSession = function (userId, email, url) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof userId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "userId"');
                        }
                        if (typeof email === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "email"');
                        }
                        path = '/account/sessions/magic-url';
                        payload = {};
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof email !== 'undefined') {
                            payload['email'] = email;
                        }
                        if (typeof url !== 'undefined') {
                            payload['url'] = url;
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
     * Create Magic URL session (confirmation)
     *
     * Use this endpoint to complete creating the session with the Magic URL. Both
     * the **userId** and **secret** arguments will be passed as query parameters
     * to the redirect URL you have provided when sending your request to the
     * [POST
     * /account/sessions/magic-url](/docs/client/account#accountCreateMagicURLSession)
     * endpoint.
     *
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updateMagicURLSession = function (userId, secret) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof userId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "userId"');
                        }
                        if (typeof secret === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "secret"');
                        }
                        path = '/account/sessions/magic-url';
                        payload = {};
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof secret !== 'undefined') {
                            payload['secret'] = secret;
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
     * Create OAuth2 Session
     *
     * Allow the user to login to their account using the OAuth2 provider of their
     * choice. Each OAuth2 provider should be enabled from the Appwrite console
     * first. Use the success and failure arguments to provide a redirect URL's
     * back to your app when login is completed.
     *
     * If there is already an active session, the new session will be attached to
     * the logged-in account. If there are no active sessions, the server will
     * attempt to look for a user with the same email address as the email
     * received from the OAuth2 provider and attach the new session to the
     * existing user. If no matching user is found - the server will create a new
     * user.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session limits](/docs/authentication-security#limits).
     *
     *
     * @param {string} provider
     * @param {string} success
     * @param {string} failure
     * @param {string[]} scopes
     * @throws {AppwriteException}
     * @returns {void|string}
     */
    Account.prototype.createOAuth2Session = function (provider, success, failure, scopes) {
        if (typeof provider === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "provider"');
        }
        var path = '/account/sessions/oauth2/{provider}'.replace('{provider}', provider);
        var payload = {};
        if (typeof success !== 'undefined') {
            payload['success'] = success;
        }
        if (typeof failure !== 'undefined') {
            payload['failure'] = failure;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        var uri = new URL(this.client.config.endpoint + path);
        payload['project'] = this.client.config.project;
        for (var _i = 0, _a = Object.entries(service_1.Service.flatten(payload)); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            uri.searchParams.append(key, value);
        }
        if (typeof window !== 'undefined' && (window === null || window === void 0 ? void 0 : window.location)) {
            window.location.href = uri.toString();
        }
        else {
            return uri;
        }
    };
    /**
     * Create Phone session
     *
     * Sends the user an SMS with a secret key for creating a session. If the
     * provided user ID has not be registered, a new user will be created. Use the
     * returned user ID and secret and submit a request to the [PUT
     * /account/sessions/phone](/docs/client/account#accountUpdatePhoneSession)
     * endpoint to complete the login process. The secret sent to the user's phone
     * is valid for 15 minutes.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session limits](/docs/authentication-security#limits).
     *
     * @param {string} userId
     * @param {string} phone
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.createPhoneSession = function (userId, phone) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof userId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "userId"');
                        }
                        if (typeof phone === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "phone"');
                        }
                        path = '/account/sessions/phone';
                        payload = {};
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof phone !== 'undefined') {
                            payload['phone'] = phone;
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
     * Create Phone Session (confirmation)
     *
     * Use this endpoint to complete creating a session with SMS. Use the
     * **userId** from the
     * [createPhoneSession](/docs/client/account#accountCreatePhoneSession)
     * endpoint and the **secret** received via SMS to successfully update and
     * confirm the phone session.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updatePhoneSession = function (userId, secret) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof userId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "userId"');
                        }
                        if (typeof secret === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "secret"');
                        }
                        path = '/account/sessions/phone';
                        payload = {};
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof secret !== 'undefined') {
                            payload['secret'] = secret;
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
     * Get Session
     *
     * Use this endpoint to get a logged in user's session using a Session ID.
     * Inputting 'current' will return the current session being used.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.getSession = function (sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof sessionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "sessionId"');
                        }
                        path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
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
     * Update OAuth Session (Refresh Tokens)
     *
     * Access tokens have limited lifespan and expire to mitigate security risks.
     * If session was created using an OAuth provider, this route can be used to
     * "refresh" the access token.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updateSession = function (sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof sessionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "sessionId"');
                        }
                        path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
                        payload = {};
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
     * Delete Session
     *
     * Use this endpoint to log out the currently logged in user from all their
     * account sessions across all of their different devices. When using the
     * Session ID argument, only the unique session ID provided is deleted.
     *
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.deleteSession = function (sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof sessionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "sessionId"');
                        }
                        path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
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
     * Update Status
     *
     * Block the currently logged in user account. Behind the scene, the user
     * record is not deleted but permanently blocked from any access. To
     * completely delete a user, use the Users API instead.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updateStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/account/status';
                        payload = {};
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
     * Create Email Verification
     *
     * Use this endpoint to send a verification message to your user email address
     * to confirm they are the valid owners of that address. Both the **userId**
     * and **secret** arguments will be passed as query parameters to the URL you
     * have provided to be attached to the verification email. The provided URL
     * should redirect the user back to your app and allow you to complete the
     * verification process by verifying both the **userId** and **secret**
     * parameters. Learn more about how to [complete the verification
     * process](/docs/client/account#accountUpdateEmailVerification). The
     * verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md),
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.createVerification = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof url === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "url"');
                        }
                        path = '/account/verification';
                        payload = {};
                        if (typeof url !== 'undefined') {
                            payload['url'] = url;
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
     * Create Email Verification (confirmation)
     *
     * Use this endpoint to complete the user email verification process. Use both
     * the **userId** and **secret** parameters that were attached to your app URL
     * to verify the user email ownership. If confirmed this route will return a
     * 200 status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updateVerification = function (userId, secret) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof userId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "userId"');
                        }
                        if (typeof secret === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "secret"');
                        }
                        path = '/account/verification';
                        payload = {};
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof secret !== 'undefined') {
                            payload['secret'] = secret;
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
     * Create Phone Verification
     *
     * Use this endpoint to send a verification SMS to the currently logged in
     * user. This endpoint is meant for use after updating a user's phone number
     * using the [accountUpdatePhone](/docs/client/account#accountUpdatePhone)
     * endpoint. Learn more about how to [complete the verification
     * process](/docs/client/account#accountUpdatePhoneVerification). The
     * verification code sent to the user's phone number is valid for 15 minutes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.createPhoneVerification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = '/account/verification/phone';
                        payload = {};
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
     * Create Phone Verification (confirmation)
     *
     * Use this endpoint to complete the user phone verification process. Use the
     * **userId** and **secret** that were sent to your user's phone number to
     * verify the user email ownership. If confirmed this route will return a 200
     * status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Account.prototype.updatePhoneVerification = function (userId, secret) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof userId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "userId"');
                        }
                        if (typeof secret === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "secret"');
                        }
                        path = '/account/verification/phone';
                        payload = {};
                        if (typeof userId !== 'undefined') {
                            payload['userId'] = userId;
                        }
                        if (typeof secret !== 'undefined') {
                            payload['secret'] = secret;
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
    return Account;
}(service_1.Service));
exports.Account = Account;
;

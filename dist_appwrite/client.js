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
exports.Query = exports.AppwriteException = exports.Client = void 0;
require("isomorphic-form-data");
var cross_fetch_1 = require("cross-fetch");
var service_1 = require("./service");
var AppwriteException = /** @class */ (function (_super) {
    __extends(AppwriteException, _super);
    function AppwriteException(message, code, type, response) {
        if (code === void 0) { code = 0; }
        if (type === void 0) { type = ''; }
        if (response === void 0) { response = ''; }
        var _this = _super.call(this, message) || this;
        _this.name = 'AppwriteException';
        _this.message = message;
        _this.code = code;
        _this.type = type;
        _this.response = response;
        return _this;
    }
    return AppwriteException;
}(Error));
exports.AppwriteException = AppwriteException;
var Client = /** @class */ (function () {
    function Client() {
        var _this = this;
        this.config = {
            endpoint: 'https://HOSTNAME/v1',
            endpointRealtime: '',
            project: '',
            jwt: '',
            locale: '',
        };
        this.headers = {
            'x-sdk-name': 'Web',
            'x-sdk-platform': 'client',
            'x-sdk-language': 'web',
            'x-sdk-version': '11.0.0',
            'X-Appwrite-Response-Format': '1.0.0',
        };
        this.realtime = {
            socket: undefined,
            timeout: undefined,
            url: '',
            channels: new Set(),
            subscriptions: new Map(),
            subscriptionsCounter: 0,
            reconnect: true,
            reconnectAttempts: 0,
            lastMessage: undefined,
            connect: function () {
                clearTimeout(_this.realtime.timeout);
                _this.realtime.timeout = window === null || window === void 0 ? void 0 : window.setTimeout(function () {
                    _this.realtime.createSocket();
                }, 50);
            },
            getTimeout: function () {
                switch (true) {
                    case _this.realtime.reconnectAttempts < 5:
                        return 1000;
                    case _this.realtime.reconnectAttempts < 15:
                        return 5000;
                    case _this.realtime.reconnectAttempts < 100:
                        return 10000;
                    default:
                        return 60000;
                }
            },
            createSocket: function () {
                var _a, _b;
                if (_this.realtime.channels.size < 1)
                    return;
                var channels = new URLSearchParams();
                channels.set('project', _this.config.project);
                _this.realtime.channels.forEach(function (channel) {
                    channels.append('channels[]', channel);
                });
                var url = _this.config.endpointRealtime + '/realtime?' + channels.toString();
                if (url !== _this.realtime.url || // Check if URL is present
                    !_this.realtime.socket || // Check if WebSocket has not been created
                    ((_a = _this.realtime.socket) === null || _a === void 0 ? void 0 : _a.readyState) > WebSocket.OPEN // Check if WebSocket is CLOSING (3) or CLOSED (4)
                ) {
                    if (_this.realtime.socket &&
                        ((_b = _this.realtime.socket) === null || _b === void 0 ? void 0 : _b.readyState) < WebSocket.CLOSING // Close WebSocket if it is CONNECTING (0) or OPEN (1)
                    ) {
                        _this.realtime.reconnect = false;
                        _this.realtime.socket.close();
                    }
                    _this.realtime.url = url;
                    _this.realtime.socket = new WebSocket(url);
                    _this.realtime.socket.addEventListener('message', _this.realtime.onMessage);
                    _this.realtime.socket.addEventListener('open', function (_event) {
                        _this.realtime.reconnectAttempts = 0;
                    });
                    _this.realtime.socket.addEventListener('close', function (event) {
                        var _a, _b, _c;
                        if (!_this.realtime.reconnect ||
                            (((_b = (_a = _this.realtime) === null || _a === void 0 ? void 0 : _a.lastMessage) === null || _b === void 0 ? void 0 : _b.type) === 'error' && // Check if last message was of type error
                                ((_c = _this.realtime) === null || _c === void 0 ? void 0 : _c.lastMessage.data).code === 1008 // Check for policy violation 1008
                            )) {
                            _this.realtime.reconnect = true;
                            return;
                        }
                        var timeout = _this.realtime.getTimeout();
                        console.error("Realtime got disconnected. Reconnect will be attempted in ".concat(timeout / 1000, " seconds."), event.reason);
                        setTimeout(function () {
                            _this.realtime.reconnectAttempts++;
                            _this.realtime.createSocket();
                        }, timeout);
                    });
                }
            },
            onMessage: function (event) {
                var _a, _b;
                try {
                    var message = JSON.parse(event.data);
                    _this.realtime.lastMessage = message;
                    switch (message.type) {
                        case 'connected':
                            var cookie = JSON.parse((_a = window.localStorage.getItem('cookieFallback')) !== null && _a !== void 0 ? _a : '{}');
                            var session = cookie === null || cookie === void 0 ? void 0 : cookie["a_session_".concat(_this.config.project)];
                            var messageData = message.data;
                            if (session && !messageData.user) {
                                (_b = _this.realtime.socket) === null || _b === void 0 ? void 0 : _b.send(JSON.stringify({
                                    type: 'authentication',
                                    data: {
                                        session: session
                                    }
                                }));
                            }
                            break;
                        case 'event':
                            var data_1 = message.data;
                            if (data_1 === null || data_1 === void 0 ? void 0 : data_1.channels) {
                                var isSubscribed = data_1.channels.some(function (channel) { return _this.realtime.channels.has(channel); });
                                if (!isSubscribed)
                                    return;
                                _this.realtime.subscriptions.forEach(function (subscription) {
                                    if (data_1.channels.some(function (channel) { return subscription.channels.includes(channel); })) {
                                        setTimeout(function () { return subscription.callback(data_1); });
                                    }
                                });
                            }
                            break;
                        case 'error':
                            throw message.data;
                        default:
                            break;
                    }
                }
                catch (e) {
                    console.error(e);
                }
            },
            cleanUp: function (channels) {
                _this.realtime.channels.forEach(function (channel) {
                    if (channels.includes(channel)) {
                        var found = Array.from(_this.realtime.subscriptions).some(function (_a) {
                            var _key = _a[0], subscription = _a[1];
                            return subscription.channels.includes(channel);
                        });
                        if (!found) {
                            _this.realtime.channels.delete(channel);
                        }
                    }
                });
            }
        };
    }
    /**
     * Set Endpoint
     *
     * Your project endpoint
     *
     * @param {string} endpoint
     *
     * @returns {this}
     */
    Client.prototype.setEndpoint = function (endpoint) {
        this.config.endpoint = endpoint;
        this.config.endpointRealtime = this.config.endpointRealtime || this.config.endpoint.replace('https://', 'wss://').replace('http://', 'ws://');
        return this;
    };
    /**
     * Set Realtime Endpoint
     *
     * @param {string} endpointRealtime
     *
     * @returns {this}
     */
    Client.prototype.setEndpointRealtime = function (endpointRealtime) {
        this.config.endpointRealtime = endpointRealtime;
        return this;
    };
    /**
     * Set Project
     *
     * Your project ID
     *
     * @param value string
     *
     * @return {this}
     */
    Client.prototype.setProject = function (value) {
        this.headers['X-Appwrite-Project'] = value;
        this.config.project = value;
        return this;
    };
    /**
     * Set JWT
     *
     * Your secret JSON Web Token
     *
     * @param value string
     *
     * @return {this}
     */
    Client.prototype.setJWT = function (value) {
        this.headers['X-Appwrite-JWT'] = value;
        this.config.jwt = value;
        return this;
    };
    /**
     * Set Locale
     *
     * @param value string
     *
     * @return {this}
     */
    Client.prototype.setLocale = function (value) {
        this.headers['X-Appwrite-Locale'] = value;
        this.config.locale = value;
        return this;
    };
    /**
     * Subscribes to Appwrite events and passes you the payload in realtime.
     *
     * @param {string|string[]} channels
     * Channel to subscribe - pass a single channel as a string or multiple with an array of strings.
     *
     * Possible channels are:
     * - account
     * - collections
     * - collections.[ID]
     * - collections.[ID].documents
     * - documents
     * - documents.[ID]
     * - files
     * - files.[ID]
     * - executions
     * - executions.[ID]
     * - functions.[ID]
     * - teams
     * - teams.[ID]
     * - memberships
     * - memberships.[ID]
     * @param {(payload: RealtimeMessage) => void} callback Is called on every realtime update.
     * @returns {() => void} Unsubscribes from events.
     */
    Client.prototype.subscribe = function (channels, callback) {
        var _this = this;
        var channelArray = typeof channels === 'string' ? [channels] : channels;
        channelArray.forEach(function (channel) { return _this.realtime.channels.add(channel); });
        var counter = this.realtime.subscriptionsCounter++;
        this.realtime.subscriptions.set(counter, {
            channels: channelArray,
            callback: callback
        });
        this.realtime.connect();
        return function () {
            _this.realtime.subscriptions.delete(counter);
            _this.realtime.cleanUp(channelArray);
            _this.realtime.connect();
        };
    };
    Client.prototype.call = function (method, url, headers, params) {
        var _a, _b;
        if (headers === void 0) { headers = {}; }
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var options, _i, _c, _d, key, value, formData_1, _loop_1, key, data, response, cookieFallback, e_1;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        method = method.toUpperCase();
                        headers = Object.assign({}, this.headers, headers);
                        options = {
                            method: method,
                            headers: headers,
                            credentials: 'include'
                        };
                        if (typeof window !== 'undefined' && window.localStorage) {
                            headers['X-Fallback-Cookies'] = (_a = window.localStorage.getItem('cookieFallback')) !== null && _a !== void 0 ? _a : '';
                        }
                        if (method === 'GET') {
                            for (_i = 0, _c = Object.entries(service_1.Service.flatten(params)); _i < _c.length; _i++) {
                                _d = _c[_i], key = _d[0], value = _d[1];
                                url.searchParams.append(key, value);
                            }
                        }
                        else {
                            switch (headers['content-type']) {
                                case 'application/json':
                                    options.body = JSON.stringify(params);
                                    break;
                                case 'multipart/form-data':
                                    formData_1 = new FormData();
                                    _loop_1 = function (key) {
                                        if (Array.isArray(params[key])) {
                                            params[key].forEach(function (value) {
                                                formData_1.append(key + '[]', value);
                                            });
                                        }
                                        else {
                                            formData_1.append(key, params[key]);
                                        }
                                    };
                                    for (key in params) {
                                        _loop_1(key);
                                    }
                                    options.body = formData_1;
                                    delete headers['content-type'];
                                    break;
                            }
                        }
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 7, , 8]);
                        data = null;
                        return [4 /*yield*/, (0, cross_fetch_1.fetch)(url.toString(), options)];
                    case 2:
                        response = _f.sent();
                        if (!((_b = response.headers.get('content-type')) === null || _b === void 0 ? void 0 : _b.includes('application/json'))) return [3 /*break*/, 4];
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _f.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        _e = {};
                        return [4 /*yield*/, response.text()];
                    case 5:
                        data = (_e.message = _f.sent(),
                            _e);
                        _f.label = 6;
                    case 6:
                        if (400 <= response.status) {
                            throw new AppwriteException(data === null || data === void 0 ? void 0 : data.message, response.status, data === null || data === void 0 ? void 0 : data.type, data);
                        }
                        cookieFallback = response.headers.get('X-Fallback-Cookies');
                        if (typeof window !== 'undefined' && window.localStorage && cookieFallback) {
                            window.console.warn('Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint.');
                            window.localStorage.setItem('cookieFallback', cookieFallback);
                        }
                        return [2 /*return*/, data];
                    case 7:
                        e_1 = _f.sent();
                        if (e_1 instanceof AppwriteException) {
                            throw e_1;
                        }
                        throw new AppwriteException(e_1.message);
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return Client;
}());
exports.Client = Client;
var query_1 = require("./query");
Object.defineProperty(exports, "Query", { enumerable: true, get: function () { return query_1.Query; } });

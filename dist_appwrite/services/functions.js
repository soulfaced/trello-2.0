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
exports.Functions = void 0;
var service_1 = require("../service");
var client_1 = require("../client");
var Functions = /** @class */ (function (_super) {
    __extends(Functions, _super);
    function Functions(client) {
        return _super.call(this, client) || this;
    }
    /**
     * List Executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Functions.prototype.listExecutions = function (functionId, queries, search) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof functionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "functionId"');
                        }
                        path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
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
     * Create Execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} data
     * @param {boolean} async
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Functions.prototype.createExecution = function (functionId, data, async) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof functionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "functionId"');
                        }
                        path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
                        payload = {};
                        if (typeof data !== 'undefined') {
                            payload['data'] = data;
                        }
                        if (typeof async !== 'undefined') {
                            payload['async'] = async;
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
     * Get Execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Functions.prototype.getExecution = function (functionId, executionId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof functionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "functionId"');
                        }
                        if (typeof executionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "executionId"');
                        }
                        path = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
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
    return Functions;
}(service_1.Service));
exports.Functions = Functions;
;

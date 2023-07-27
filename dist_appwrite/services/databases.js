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
exports.Databases = void 0;
var service_1 = require("../service");
var client_1 = require("../client");
var Databases = /** @class */ (function (_super) {
    __extends(Databases, _super);
    function Databases(client) {
        return _super.call(this, client) || this;
    }
    /**
     * List Documents
     *
     * Get a list of all the user's documents in a given collection. You can use
     * the query params to filter your results.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Databases.prototype.listDocuments = function (databaseId, collectionId, queries) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof databaseId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "databaseId"');
                        }
                        if (typeof collectionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "collectionId"');
                        }
                        path = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Create Document
     *
     * Create a new Document. Before using this route, you should create a new
     * collection resource using either a [server
     * integration](/docs/server/databases#databasesCreateCollection) API or
     * directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Omit<Document, keyof Models.Document>} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Databases.prototype.createDocument = function (databaseId, collectionId, documentId, data, permissions) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof databaseId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "databaseId"');
                        }
                        if (typeof collectionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "collectionId"');
                        }
                        if (typeof documentId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "documentId"');
                        }
                        if (typeof data === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "data"');
                        }
                        path = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
                        payload = {};
                        if (typeof documentId !== 'undefined') {
                            payload['documentId'] = documentId;
                        }
                        if (typeof data !== 'undefined') {
                            payload['data'] = data;
                        }
                        if (typeof permissions !== 'undefined') {
                            payload['permissions'] = permissions;
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
     * Get Document
     *
     * Get a document by its unique ID. This endpoint response returns a JSON
     * object with the document data.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Databases.prototype.getDocument = function (databaseId, collectionId, documentId, queries) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof databaseId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "databaseId"');
                        }
                        if (typeof collectionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "collectionId"');
                        }
                        if (typeof documentId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "documentId"');
                        }
                        path = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
     * Update Document
     *
     * Update a document by its unique ID. Using the patch method you can pass
     * only specific fields that will get updated.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Partial<Omit<Document, keyof Models.Document>>} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Databases.prototype.updateDocument = function (databaseId, collectionId, documentId, data, permissions) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof databaseId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "databaseId"');
                        }
                        if (typeof collectionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "collectionId"');
                        }
                        if (typeof documentId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "documentId"');
                        }
                        path = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
                        payload = {};
                        if (typeof data !== 'undefined') {
                            payload['data'] = data;
                        }
                        if (typeof permissions !== 'undefined') {
                            payload['permissions'] = permissions;
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
     * Delete Document
     *
     * Delete a document by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Databases.prototype.deleteDocument = function (databaseId, collectionId, documentId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof databaseId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "databaseId"');
                        }
                        if (typeof collectionId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "collectionId"');
                        }
                        if (typeof documentId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "documentId"');
                        }
                        path = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
    return Databases;
}(service_1.Service));
exports.Databases = Databases;
;

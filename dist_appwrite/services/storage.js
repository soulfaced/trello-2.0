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
exports.Storage = void 0;
var service_1 = require("../service");
var client_1 = require("../client");
var Storage = /** @class */ (function (_super) {
    __extends(Storage, _super);
    function Storage(client) {
        return _super.call(this, client) || this;
    }
    /**
     * List Files
     *
     * Get a list of all the user files. You can use the query params to filter
     * your results.
     *
     * @param {string} bucketId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Storage.prototype.listFiles = function (bucketId, queries, search) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bucketId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "bucketId"');
                        }
                        path = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
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
     * Create File
     *
     * Create a new file. Before using this route, you should create a new bucket
     * resource using either a [server
     * integration](/docs/server/storage#storageCreateBucket) API or directly from
     * your Appwrite console.
     *
     * Larger files should be uploaded using multiple requests with the
     * [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)
     * header to send a partial request with a maximum supported chunk of `5MB`.
     * The `content-range` header values should always be in bytes.
     *
     * When the first request is sent, the server will return the **File** object,
     * and the subsequent part request must include the file's **id** in
     * `x-appwrite-id` header to allow the server to know that the partial upload
     * is for the existing file and not for a new one.
     *
     * If you're creating a new file using one of the Appwrite SDKs, all the
     * chunking logic will be managed by the SDK internally.
     *
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {File} file
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Storage.prototype.createFile = function (bucketId, fileId, file, permissions, onProgress) {
        if (onProgress === void 0) { onProgress = function (progress) { }; }
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri, size, id, response, headers, counter, totalCounters, e_1, start, end, stream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bucketId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "bucketId"');
                        }
                        if (typeof fileId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "fileId"');
                        }
                        if (typeof file === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "file"');
                        }
                        path = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
                        payload = {};
                        if (typeof fileId !== 'undefined') {
                            payload['fileId'] = fileId;
                        }
                        if (typeof file !== 'undefined') {
                            payload['file'] = file;
                        }
                        if (typeof permissions !== 'undefined') {
                            payload['permissions'] = permissions;
                        }
                        uri = new URL(this.client.config.endpoint + path);
                        if (!(file instanceof File)) {
                            throw new client_1.AppwriteException('Parameter "file" has to be a File.');
                        }
                        size = file.size;
                        if (!(size <= service_1.Service.CHUNK_SIZE)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.client.call('post', uri, {
                                'content-type': 'multipart/form-data',
                            }, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        id = undefined;
                        response = undefined;
                        headers = {
                            'content-type': 'multipart/form-data',
                        };
                        counter = 0;
                        totalCounters = Math.ceil(size / service_1.Service.CHUNK_SIZE);
                        if (!(fileId != 'unique()')) return [3 /*break*/, 6];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.client.call('GET', new URL(this.client.config.endpoint + path + '/' + fileId), headers)];
                    case 4:
                        response = _a.sent();
                        counter = response.chunksUploaded;
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        counter;
                        _a.label = 7;
                    case 7:
                        if (!(counter < totalCounters)) return [3 /*break*/, 10];
                        start = (counter * service_1.Service.CHUNK_SIZE);
                        end = Math.min((((counter * service_1.Service.CHUNK_SIZE) + service_1.Service.CHUNK_SIZE) - 1), size);
                        headers['content-range'] = 'bytes ' + start + '-' + end + '/' + size;
                        if (id) {
                            headers['x-appwrite-id'] = id;
                        }
                        stream = file.slice(start, end + 1);
                        payload['file'] = new File([stream], file.name);
                        return [4 /*yield*/, this.client.call('post', uri, headers, payload)];
                    case 8:
                        response = _a.sent();
                        if (!id) {
                            id = response['$id'];
                        }
                        if (onProgress) {
                            onProgress({
                                $id: response.$id,
                                progress: Math.min((counter + 1) * service_1.Service.CHUNK_SIZE - 1, size) / size * 100,
                                sizeUploaded: end,
                                chunksTotal: response.chunksTotal,
                                chunksUploaded: response.chunksUploaded
                            });
                        }
                        _a.label = 9;
                    case 9:
                        counter++;
                        return [3 /*break*/, 7];
                    case 10: return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Get File
     *
     * Get a file by its unique ID. This endpoint response returns a JSON object
     * with the file metadata.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Storage.prototype.getFile = function (bucketId, fileId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bucketId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "bucketId"');
                        }
                        if (typeof fileId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "fileId"');
                        }
                        path = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
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
     * Update File
     *
     * Update a file by its unique ID. Only users with write permissions have
     * access to update this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Storage.prototype.updateFile = function (bucketId, fileId, permissions) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bucketId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "bucketId"');
                        }
                        if (typeof fileId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "fileId"');
                        }
                        path = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
                        payload = {};
                        if (typeof permissions !== 'undefined') {
                            payload['permissions'] = permissions;
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
     * Delete File
     *
     * Delete a file by its unique ID. Only users with write permissions have
     * access to delete this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    Storage.prototype.deleteFile = function (bucketId, fileId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, payload, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bucketId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "bucketId"');
                        }
                        if (typeof fileId === 'undefined') {
                            throw new client_1.AppwriteException('Missing required parameter: "fileId"');
                        }
                        path = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
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
     * Get File for Download
     *
     * Get a file content by its unique ID. The endpoint response return with a
     * 'Content-Disposition: attachment' header that tells the browser to start
     * downloading the file to user downloads directory.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Storage.prototype.getFileDownload = function (bucketId, fileId) {
        if (typeof bucketId === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "fileId"');
        }
        var path = '/storage/buckets/{bucketId}/files/{fileId}/download'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        var payload = {};
        var uri = new URL(this.client.config.endpoint + path);
        payload['project'] = this.client.config.project;
        for (var _i = 0, _a = Object.entries(service_1.Service.flatten(payload)); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            uri.searchParams.append(key, value);
        }
        return uri;
    };
    /**
     * Get File Preview
     *
     * Get a file preview image. Currently, this method supports preview for image
     * files (jpg, png, and gif), other supported formats, like pdf, docs, slides,
     * and spreadsheets, will return the file icon image. You can also pass query
     * string arguments for cutting and resizing your preview image. Preview is
     * supported only for image files smaller than 10MB.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {number} width
     * @param {number} height
     * @param {string} gravity
     * @param {number} quality
     * @param {number} borderWidth
     * @param {string} borderColor
     * @param {number} borderRadius
     * @param {number} opacity
     * @param {number} rotation
     * @param {string} background
     * @param {string} output
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Storage.prototype.getFilePreview = function (bucketId, fileId, width, height, gravity, quality, borderWidth, borderColor, borderRadius, opacity, rotation, background, output) {
        if (typeof bucketId === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "fileId"');
        }
        var path = '/storage/buckets/{bucketId}/files/{fileId}/preview'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        var payload = {};
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof gravity !== 'undefined') {
            payload['gravity'] = gravity;
        }
        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }
        if (typeof borderWidth !== 'undefined') {
            payload['borderWidth'] = borderWidth;
        }
        if (typeof borderColor !== 'undefined') {
            payload['borderColor'] = borderColor;
        }
        if (typeof borderRadius !== 'undefined') {
            payload['borderRadius'] = borderRadius;
        }
        if (typeof opacity !== 'undefined') {
            payload['opacity'] = opacity;
        }
        if (typeof rotation !== 'undefined') {
            payload['rotation'] = rotation;
        }
        if (typeof background !== 'undefined') {
            payload['background'] = background;
        }
        if (typeof output !== 'undefined') {
            payload['output'] = output;
        }
        var uri = new URL(this.client.config.endpoint + path);
        payload['project'] = this.client.config.project;
        for (var _i = 0, _a = Object.entries(service_1.Service.flatten(payload)); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            uri.searchParams.append(key, value);
        }
        return uri;
    };
    /**
     * Get File for View
     *
     * Get a file content by its unique ID. This endpoint is similar to the
     * download method but returns with no  'Content-Disposition: attachment'
     * header.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Storage.prototype.getFileView = function (bucketId, fileId) {
        if (typeof bucketId === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "fileId"');
        }
        var path = '/storage/buckets/{bucketId}/files/{fileId}/view'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        var payload = {};
        var uri = new URL(this.client.config.endpoint + path);
        payload['project'] = this.client.config.project;
        for (var _i = 0, _a = Object.entries(service_1.Service.flatten(payload)); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            uri.searchParams.append(key, value);
        }
        return uri;
    };
    return Storage;
}(service_1.Service));
exports.Storage = Storage;
;

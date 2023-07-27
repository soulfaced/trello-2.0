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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatars = void 0;
var service_1 = require("../service");
var client_1 = require("../client");
var Avatars = /** @class */ (function (_super) {
    __extends(Avatars, _super);
    function Avatars(client) {
        return _super.call(this, client) || this;
    }
    /**
     * Get Browser Icon
     *
     * You can use this endpoint to show different browser icons to your users.
     * The code argument receives the browser code as it appears in your user [GET
     * /account/sessions](/docs/client/account#accountGetSessions) endpoint. Use
     * width, height and quality arguments to change the output settings.
     *
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     *
     * @param {string} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Avatars.prototype.getBrowser = function (code, width, height, quality) {
        if (typeof code === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "code"');
        }
        var path = '/avatars/browsers/{code}'.replace('{code}', code);
        var payload = {};
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
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
     * Get Credit Card Icon
     *
     * The credit card endpoint will return you the icon of the credit card
     * provider you need. Use width, height and quality arguments to change the
     * output settings.
     *
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     *
     *
     * @param {string} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Avatars.prototype.getCreditCard = function (code, width, height, quality) {
        if (typeof code === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "code"');
        }
        var path = '/avatars/credit-cards/{code}'.replace('{code}', code);
        var payload = {};
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
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
     * Get Favicon
     *
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote
     * website URL.
     *
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Avatars.prototype.getFavicon = function (url) {
        if (typeof url === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "url"');
        }
        var path = '/avatars/favicon';
        var payload = {};
        if (typeof url !== 'undefined') {
            payload['url'] = url;
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
     * Get Country Flag
     *
     * You can use this endpoint to show different country flags icons to your
     * users. The code argument receives the 2 letter country code. Use width,
     * height and quality arguments to change the output settings. Country codes
     * follow the [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) standard.
     *
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     *
     *
     * @param {string} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Avatars.prototype.getFlag = function (code, width, height, quality) {
        if (typeof code === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "code"');
        }
        var path = '/avatars/flags/{code}'.replace('{code}', code);
        var payload = {};
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
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
     * Get Image from URL
     *
     * Use this endpoint to fetch a remote image URL and crop it to any image size
     * you want. This endpoint is very useful if you need to crop and display
     * remote images in your app or in case you want to make sure a 3rd party
     * image is properly served using a TLS protocol.
     *
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 400x400px.
     *
     *
     * @param {string} url
     * @param {number} width
     * @param {number} height
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Avatars.prototype.getImage = function (url, width, height) {
        if (typeof url === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "url"');
        }
        var path = '/avatars/image';
        var payload = {};
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
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
     * Get User Initials
     *
     * Use this endpoint to show your user initials avatar icon on your website or
     * app. By default, this route will try to print your logged-in user name or
     * email initials. You can also overwrite the user name if you pass the 'name'
     * parameter. If no name is given and no user is logged, an empty avatar will
     * be returned.
     *
     * You can use the color and background params to change the avatar colors. By
     * default, a random theme will be selected. The random theme will persist for
     * the user's initials when reloading the same theme will always return for
     * the same initials.
     *
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     *
     *
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {string} background
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Avatars.prototype.getInitials = function (name, width, height, background) {
        var path = '/avatars/initials';
        var payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof background !== 'undefined') {
            payload['background'] = background;
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
     * Get QR Code
     *
     * Converts a given plain text to a QR code image. You can use the query
     * parameters to change the size and style of the resulting image.
     *
     *
     * @param {string} text
     * @param {number} size
     * @param {number} margin
     * @param {boolean} download
     * @throws {AppwriteException}
     * @returns {URL}
     */
    Avatars.prototype.getQR = function (text, size, margin, download) {
        if (typeof text === 'undefined') {
            throw new client_1.AppwriteException('Missing required parameter: "text"');
        }
        var path = '/avatars/qr';
        var payload = {};
        if (typeof text !== 'undefined') {
            payload['text'] = text;
        }
        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }
        if (typeof margin !== 'undefined') {
            payload['margin'] = margin;
        }
        if (typeof download !== 'undefined') {
            payload['download'] = download;
        }
        var uri = new URL(this.client.config.endpoint + path);
        payload['project'] = this.client.config.project;
        for (var _i = 0, _a = Object.entries(service_1.Service.flatten(payload)); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            uri.searchParams.append(key, value);
        }
        return uri;
    };
    return Avatars;
}(service_1.Service));
exports.Avatars = Avatars;
;

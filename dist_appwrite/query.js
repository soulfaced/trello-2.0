"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var Query = exports.Query = /** @class */ (function () {
    function Query() {
    }
    Query.equal = function (attribute, value) {
        return Query.addQuery(attribute, "equal", value);
    };
    Query.notEqual = function (attribute, value) {
        return Query.addQuery(attribute, "notEqual", value);
    };
    Query.lessThan = function (attribute, value) {
        return Query.addQuery(attribute, "lessThan", value);
    };
    Query.lessThanEqual = function (attribute, value) {
        return Query.addQuery(attribute, "lessThanEqual", value);
    };
    Query.greaterThan = function (attribute, value) {
        return Query.addQuery(attribute, "greaterThan", value);
    };
    Query.greaterThanEqual = function (attribute, value) {
        return Query.addQuery(attribute, "greaterThanEqual", value);
    };
    Query.isNull = function (attribute) {
        return "isNull(\"".concat(attribute, "\")");
    };
    Query.isNotNull = function (attribute) {
        return "isNotNull(\"".concat(attribute, "\")");
    };
    Query.between = function (attribute, start, end) {
        return "between(\"".concat(attribute, "\", [").concat(Query.parseValues(start), ",").concat(Query.parseValues(end), "])");
    };
    Query.startsWith = function (attribute, value) {
        return Query.addQuery(attribute, "startsWith", value);
    };
    Query.endsWith = function (attribute, value) {
        return Query.addQuery(attribute, "endsWith", value);
    };
    Query.select = function (attributes) {
        return "select([".concat(attributes.map(function (attr) { return "\"".concat(attr, "\""); }).join(","), "])");
    };
    Query.search = function (attribute, value) {
        return Query.addQuery(attribute, "search", value);
    };
    Query.orderDesc = function (attribute) {
        return "orderDesc(\"".concat(attribute, "\")");
    };
    Query.orderAsc = function (attribute) {
        return "orderAsc(\"".concat(attribute, "\")");
    };
    Query.cursorAfter = function (documentId) {
        return "cursorAfter(\"".concat(documentId, "\")");
    };
    Query.cursorBefore = function (documentId) {
        return "cursorBefore(\"".concat(documentId, "\")");
    };
    Query.limit = function (limit) {
        return "limit(".concat(limit, ")");
    };
    Query.offset = function (offset) {
        return "offset(".concat(offset, ")");
    };
    Query.addQuery = function (attribute, method, value) {
        return value instanceof Array
            ? "".concat(method, "(\"").concat(attribute, "\", [").concat(value
                .map(function (v) { return Query.parseValues(v); })
                .join(","), "])")
            : "".concat(method, "(\"").concat(attribute, "\", [").concat(Query.parseValues(value), "])");
    };
    Query.parseValues = function (value) {
        return typeof value === "string" || value instanceof String
            ? "\"".concat(value, "\"")
            : "".concat(value);
    };
    return Query;
}());

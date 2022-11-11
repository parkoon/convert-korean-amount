"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SPLIT_UNIT = 10000;
var UNIT_WORDS = ["", "만", "억", "조", "경"];
var convertKoreanAmount = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.wordSpacing, wordSpacing = _c === void 0 ? true : _c, _d = _b.withWonSuffix, withWonSuffix = _d === void 0 ? true : _d;
    var result = UNIT_WORDS.reduce(function (prev, curr, i) {
        var v = Math.floor((value % Math.pow(SPLIT_UNIT, i + 1)) / Math.pow(SPLIT_UNIT, i));
        if (v === 0)
            return prev;
        return "".concat(v.toLocaleString()).concat(curr) + (wordSpacing ? " " : "") + prev;
    }, "");
    var lastSpaceIndex = result.lastIndexOf(" ");
    if (lastSpaceIndex !== -1) {
        result = result.substring(0, lastSpaceIndex);
    }
    if (withWonSuffix) {
        result = result + "원";
    }
    return result;
};
exports.default = convertKoreanAmount;

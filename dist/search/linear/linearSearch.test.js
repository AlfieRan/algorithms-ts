"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var linearSearch_1 = __importDefault(require("./linearSearch"));
describe('Linear Search', function () {
    test('Simple Strings', function () {
        var myList = ['Hotel', 'Alpha', 'Kilo', 'Charlie', 'Echo',
            'Foxtrot', 'Delta', 'Juliet', 'Lima', 'Golf', 'Bravo'];
        // Normal data which is in the list
        var charlie = (0, linearSearch_1.default)(myList, 'Charlie');
        expect(charlie).toBe(3);
        // Edge cases
        var alpha = (0, linearSearch_1.default)(myList, 'Alpha');
        expect(alpha).toBe(1);
        var lima = (0, linearSearch_1.default)(myList, 'Lima');
        expect(lima).toBe(8);
        // Not found
        var bob = (0, linearSearch_1.default)(myList, 'bob');
        expect(bob).toBe(common_1.NO_MATCH);
    });
    test('Simple Numbers', function () {
        var items = [15, 7, 1, 8, 43, 9, 81, 5];
        var found = (0, linearSearch_1.default)(items, 8);
        expect(found).toBe(3);
    });
});
//# sourceMappingURL=linearSearch.test.js.map
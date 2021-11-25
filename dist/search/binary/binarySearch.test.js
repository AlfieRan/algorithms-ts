"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var binarySearch_1 = __importDefault(require("./binarySearch"));
describe('Binary Search', function () {
    test('Simple Strings', function () {
        var myList = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo',
            'Foxtrot', 'Golf', 'Hotel', 'Juliet', 'Kilo', 'Lima'];
        // Normal data which is in the list
        var charlie = (0, binarySearch_1.default)(myList, 'Charlie');
        expect(charlie).toBe(2);
        // Edge cases
        var alpha = (0, binarySearch_1.default)(myList, 'Alpha');
        expect(alpha).toBe(0);
        var lima = (0, binarySearch_1.default)(myList, 'Lima');
        expect(lima).toBe(10);
        // Not found
        var bob = (0, binarySearch_1.default)(myList, 'bob');
        expect(bob).toBe(common_1.NO_MATCH);
    });
    test('Simple Numbers', function () {
        var items = [1, 2, 3, 4, 5, 7, 10, 43];
        var found = (0, binarySearch_1.default)(items, 7);
        expect(found).toBe(5);
    });
});
//# sourceMappingURL=binarySearch.test.js.map
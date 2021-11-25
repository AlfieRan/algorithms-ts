"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swap_1 = __importDefault(require("./swap"));
describe('Swap', function () {
    test('Simple', function () {
        var myList = [1, 2, 3, 4, 5, 6, 7, 8];
        (0, swap_1.default)(myList, 1, 2);
        expect(myList[1]).toBe(3);
        expect(myList[2]).toBe(2);
    });
});
//# sourceMappingURL=swap.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAValidCreditCard = void 0;
const isAValidCreditCard = (cardNumber) => {
    const length = cardNumber.length;
    const parity = length % 2;
    let sum = 0;
    for (var i = length - 1; i > -1; i--) {
        let currentDigit = Number.parseInt(cardNumber[i]);
        if ((i + 1) % 2 == parity) {
            sum += currentDigit;
        }
        else if (currentDigit > 4) {
            sum += 2 * currentDigit - 9;
        }
        else {
            sum += 2 * currentDigit;
        }
    }
    return sum % 10 == 0;
};
exports.isAValidCreditCard = isAValidCreditCard;

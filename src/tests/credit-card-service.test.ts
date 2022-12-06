import 'jest';
import { isAValidCreditCard } from '../services/credit-card.service';

describe("Credit card validation", () => {
    it("Should return false for invalid credit card numbers", async () => {
        const invalidCreditCardNumbers: string[] = ['49927398717', '1234567812345678'];
        invalidCreditCardNumbers.forEach(cardNumber => {
            expect(isAValidCreditCard(cardNumber)).toBe(false);
        });
    });

    it("Should return true for valid credit card numbers", async () => {
        const validCreditCardNumbers: string[] = ['49927398716', '1234567812345670', '2222405343248877', '2222990905257051'];
        validCreditCardNumbers.forEach(cardNumber => {
            expect(isAValidCreditCard(cardNumber)).toBe(true);
        });
    });
});

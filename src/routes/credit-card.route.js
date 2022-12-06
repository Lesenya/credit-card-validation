"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const credit_card_service_1 = require("../services/credit-card.service");
exports.router = express_1.default.Router();
exports.router.get("/:cardNumber", (req, res) => {
    const cardNumber = req.params.cardNumber;
    if (isNaN(Number(cardNumber))) {
        res.status(400).send({ error: "Credit card number must be numeric" });
        return;
    }
    res.status(200).send({ isValid: (0, credit_card_service_1.isAValidCreditCard)(cardNumber) });
});

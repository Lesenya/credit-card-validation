import express, { Request, Response } from "express";
import { isAValidCreditCard } from "../services/credit-card.service";

export const router = express.Router();

router.get("/:cardNumber", (req: Request, res: Response) => {
    const cardNumber = req.params.cardNumber;

    if (isNaN(Number(cardNumber))) {
        res.status(400).send({ error: "Credit card number must be numeric" });
        return;
    }

    res.status(200).send({ isValid: isAValidCreditCard(cardNumber) })
});

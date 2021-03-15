import { NextFunction, Request, Response, Router } from "express";
import mongo from '../models/mongodb';
export class inventoryController {
    constructor(router: any) {
        this.API_V1(router);
    }

    public API_V1(router: Router) {
        router.get('/api/login', async (req: any, res: any, next) => {
            try {
                var data = await mongo.supplier.create({
                    supplierNo: "101",
                    supplierName: "KK",
                    totalAmount: 500,
                    tax: 0,
                    street: "Suart",
                    city: "Suart",
                    state: "Suart",
                    zip: "",
                    country: "",
                    contactName: "",
                    countryCode: "",
                    areaCode: "",
                    number: "",
                    ordersId: ["604f48ed9f4ddf3474899173","604f479e6ee10b21f84e84a2"],
                });
                res.json({ res: "Hello", data })
            } catch (err) {
                res.json({ "status": false, "message": err.message, "status_code": 201 });
            }
        });
    }

}
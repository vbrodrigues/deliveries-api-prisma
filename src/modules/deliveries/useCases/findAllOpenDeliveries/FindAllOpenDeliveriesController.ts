import { Request, Response } from "express";
import { FindAllOpenDeliveriesUseCase } from "./FindAllOpenDeliveriesUseCase";

export class FindAllOpenDeliveriesController {
    async handle(request: Request, response: Response) {
        const findAllOpenDeliveries = new FindAllOpenDeliveriesUseCase();

        const deliveries = await findAllOpenDeliveries.execute();

        return response.json(deliveries);
    }
}
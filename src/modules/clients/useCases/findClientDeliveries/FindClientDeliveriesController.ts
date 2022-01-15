import { Request, Response } from "express";
import { FindClientDeliveriesUseCase } from "./FindClientDeliveriesUseCase";

export class FindClientDeliveriesController {
    async handle(request: Request, response: Response) {
        const { client_id } = request;

        const findClientDeliveries = new FindClientDeliveriesUseCase();

        const deliveries = await findClientDeliveries.execute(client_id);

        return response.json(deliveries);
    }
}
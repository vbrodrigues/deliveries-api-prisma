import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const { item_name } = request.body;
        const { client_id } = request;

        const createDelivery = new CreateDeliveryUseCase();

        const delivery = await createDelivery.execute({ item_name, client_id });

        return response.json(delivery);
    }
}
import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { deliveryman_id } = request;
        const { delivery_id } = request.params;

        const updateDeliveryman = new UpdateDeliverymanUseCase();

        const result = await updateDeliveryman.execute({ delivery_id, deliveryman_id });

        return response.json(result);
    }
}
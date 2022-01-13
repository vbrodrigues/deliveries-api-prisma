import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

export class CreateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const createDeliveryman = new CreateDeliverymanUseCase();

        const deliveryman = await createDeliveryman.execute({ username, password });

        return response.json(deliveryman);
    }
}
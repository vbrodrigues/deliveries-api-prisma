import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
    async handle(request: Request, response: Response) {
        const { deliveryman_id } = request;
        const { delivery_id } = request.params;

        const updateEndDate = new UpdateEndDateUseCase();

        const result = await updateEndDate.execute({ delivery_id, deliveryman_id });

        return response.json(result);
    }
}
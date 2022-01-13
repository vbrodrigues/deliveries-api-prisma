import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async handle(request: Request, response: Response) {
        try {

            const { username, password } = request.body;

            const createClient = new CreateClientUseCase();
            const client = await createClient.execute({
                username,
                password
            });

            return response.json(client);
        } catch (err) {
            console.log(err);
            return response.status(500).json({ success: false, status: 'error', message: err.message });
        }
    }
}
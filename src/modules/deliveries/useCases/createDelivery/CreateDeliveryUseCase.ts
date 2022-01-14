import { prisma } from '../../../../database/prismaClient';


interface ICreateDelivery {
    item_name: string;
    client_id: string;
}

export class CreateDeliveryUseCase {
    async execute({ item_name, client_id }: ICreateDelivery) {
        // Validar se client existe
        const clientExists = await prisma.clients.findUnique({ where: { id: client_id } });

        if (!clientExists) {
            throw new Error('Client does not exist.');
        }

        const delivery = await prisma.deliveries.create({
            data: {
                item_name, client_id
            }
        });

        return delivery;
    }
}
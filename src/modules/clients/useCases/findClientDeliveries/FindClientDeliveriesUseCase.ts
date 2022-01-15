import { prisma } from '../../../../database/prismaClient';


export class FindClientDeliveriesUseCase {
    async execute(client_id: string) {
        const deliveries = await prisma.clients.findMany({ where: { id: client_id }, include: { deliveries: true } });
        return deliveries
    }
}
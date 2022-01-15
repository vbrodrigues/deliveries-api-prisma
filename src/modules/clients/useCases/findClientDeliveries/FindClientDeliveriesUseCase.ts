import { prisma } from '../../../../database/prismaClient';


export class FindClientDeliveriesUseCase {
    async execute(client_id: string) {
        const deliveries = await prisma.clients.findUnique({ where: { id: client_id }, select: { id: true, username: true, deliveries: true } });
        return deliveries
    }
}
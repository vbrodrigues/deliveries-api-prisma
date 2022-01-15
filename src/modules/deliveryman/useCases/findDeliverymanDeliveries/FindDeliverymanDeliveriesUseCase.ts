import { prisma } from '../../../../database/prismaClient';


export class FindDeliverymanDeliveriesUseCase {
    async execute(deliveryman_id: string) {
        const deliveries = await prisma.deliveryman.findUnique({ where: { id: deliveryman_id }, select: { id: true, username: true, deliveries: true } });
        return deliveries;
    }
}
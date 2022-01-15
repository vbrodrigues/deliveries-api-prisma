import { prisma } from '../../../../database/prismaClient';


interface IUpdateEndDate {
    delivery_id: string;
    deliveryman_id: string;
}

export class UpdateEndDateUseCase {
    async execute({ delivery_id, deliveryman_id }: IUpdateEndDate) {
        const deliveryExists = await prisma.deliveries.findUnique({ where: { id: delivery_id } });

        if (!deliveryExists) {
            throw new Error('Delivery not found.');
        }

        const deliverymanExists = await prisma.deliveryman.findUnique({ where: { id: deliveryman_id } });

        if (!deliverymanExists) {
            throw new Error('Deliveryman not found.');
        }

        const result = await prisma.deliveries.updateMany({ where: { id: delivery_id, deliveryman_id }, data: { end_at: new Date() } });

        return result;
    }
}
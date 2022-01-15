import { prisma } from '../../../../database/prismaClient';


interface IUpdateDeliveryman {
    delivery_id: string;
    deliveryman_id: string;
}

export class UpdateDeliverymanUseCase {
    async execute({ delivery_id, deliveryman_id }: IUpdateDeliveryman) {
        const deliveryExists = await prisma.deliveries.findUnique({ where: { id: delivery_id } });

        if (!deliveryExists) {
            throw new Error('Delivery not found.');
        }

        const deliverymanExists = await prisma.deliveryman.findUnique({ where: { id: deliveryman_id } });

        if (!deliverymanExists) {
            throw new Error('Deliveryman not found.');
        }

        const result = await prisma.deliveries.update({ where: { id: delivery_id }, data: { deliveryman_id } });

        return result;
    }
}
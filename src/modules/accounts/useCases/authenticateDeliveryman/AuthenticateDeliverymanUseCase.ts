import { prisma } from '../../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';


interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliveryman): Promise<string> {
        // Verificar se username existe
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username: { equals: username, mode: 'insensitive' }
            }
        });

        if (!deliveryman) {
            throw new Error('Username or password are invalid');
        }

        // Validar password
        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) {
            throw new Error('Username or password are invalid.');
        }

        // Gerar o token
        const token = sign({ username }, '8f7e866434f6fb37256182bcf4842c6b6246cc9a', {
            subject: deliveryman.id,
            expiresIn: '1d'
        });

        return token;
    }
}
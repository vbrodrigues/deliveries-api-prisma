import { prisma } from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';


interface IAuthenticateClient {
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient): Promise<string> {
        // Verificar se username existe
        const client = await prisma.clients.findFirst({
            where: {
                username: { equals: username, mode: 'insensitive' }
            }
        });

        if (!client) {
            throw new Error('Username or password are invalid');
        }

        // Validar password
        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            throw new Error('Username or password are invalid.');
        }

        // Gerar o token
        const token = sign({ username }, '9f7e866434f6fb37256182bcf4842c6b6246cc9a', {
            subject: client.id,
            expiresIn: '1d'
        });

        return token;
    }
}
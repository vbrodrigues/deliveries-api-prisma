import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcrypt';


interface ICreateClient {
    username: string;
    password: string;
}


export class CreateClientUseCase {
    async execute({ username, password }: ICreateClient) {
        // Validar se client existe
        const clientExists = await prisma.clients.findFirst({ where: { username: { mode: 'insensitive' } } });

        if (clientExists) {
            throw new Error('Client already exists.');
        }

        // Criptografar password
        const hashedPassword = await hash(password, 10);

        // Criar client
        const client = await prisma.clients.create({
            data: {
                username,
                password: hashedPassword
            }
        });

        return client;
    }
}
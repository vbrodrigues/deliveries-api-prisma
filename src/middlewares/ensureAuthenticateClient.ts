import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';


interface IPayload {
    sub: string;
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ message: 'Token is invalid.' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub } = verify(token, '9f7e866434f6fb37256182bcf4842c6b6246cc9a') as IPayload;

        request.client_id = sub;

        return next();
    } catch (err) {
        return response.status(401).json({ message: 'Token is invalid.' });
    }
}
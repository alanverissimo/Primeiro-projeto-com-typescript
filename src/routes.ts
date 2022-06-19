import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'alan@hotmail.com',
        password: '123456',
        techs: ['Node.js', 'ReactJS', 'React Native', {title: 'JavaScript', experience: 100 },
        ]
    });

    return response.json({ message: 'Hello world' });

};
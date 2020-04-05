import {Request, Response} from 'express';

export const getUser = async (req: Request, res: Response):Promise<Response> => {
    return res.json('Lista de usuarios'); 
}

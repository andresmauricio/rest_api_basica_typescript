import {Request, Response} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = 'SELECT * FROM users';
        const result: QueryResult = await pool.query(query);
        return res.json(result.rows); 
    } catch (error) {
        console.log(error);
        return res.status(404);
    }
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id  = parseInt(req.params.id);
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

        if (result.rows.length < 1) {
            return res.json(false);
        } else return res.json(result.rows);

    } catch (error) {
        console.log(error);
        return res.status(404);
    }
}

export const createUsers = async (req: Request, res: Response):Promise<Response> => {
    try {
        const { name, email } = req.body;
        if (!name || !email) res.status(400).json("El nombre o correo son obligatorio");
        const query = "INSERT INTO users (id, name, email) VALUES (DEFAULT, $1, $2)";
        const values = [name, email];
        await pool.query(query, values);
        return res.status(200).json(true);
    } catch (error) {
        console.log(error);
        return res.status(404);
    }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email } = req.body;
        if (!name || !email ) res.status(400).json("El nombre o correo son obligatorios");
        const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';
        const values = [name, email, parseInt(req.params.id)];
        await pool.query(query, values);
        return res.status(200).json(true);  
    } catch (error) {
        console.log(error)
        return res.status(404);
    }
}

export const deleteUser = async (req: Request, res: Response):Promise<Response> => {
    try {
        const query = "DELETE FROM users WHERE id = $1";
        await pool.query(query, [parseInt(req.params.id)]);
        return res.status(200).json(true);
        
    } catch (error) {
        console.log(error);
        return res.status(404);
    }
}


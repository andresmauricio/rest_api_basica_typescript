import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    password: '',
    database: 'restapitypescript',
    host: 'localhost'
});


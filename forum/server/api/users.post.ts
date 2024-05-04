import express, { Request, Response } from 'express';
import connection from '@/server/sql/index'; 

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        const values = [username, password];
        await connection.query(query, values);

        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur', error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
});

export default router;
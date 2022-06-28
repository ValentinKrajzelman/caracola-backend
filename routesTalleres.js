import express from "express";

import Taller from "./talleresModels.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const talleres = await Taller.find()
        console.log(talleres);
        res.status(200).json(talleres);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
);

router.post('/post', async (req, res) => {
    const newTaller = new Taller(req.body);
    try {
        await newTaller.save();
        res.status(200).json('Taller posteado');
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
);

export default router;


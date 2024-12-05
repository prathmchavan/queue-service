import { Router } from "express";
import { addToQueue } from "../controllers/queueController";

const router = Router();

router.get('/', (req, res) => {
    res.send("Queue is working!");
});

router.post('/rf/addtoq', (req, res) => {
    const data = req.body; 
    // console.log(data)
    addToQueue(data, 'random-forest', res);
});

router.post('/dt/addtoq', (req, res) => {
    const data = req.body;
    addToQueue(data, 'decision-tree', res);
});

router.post('/dnn/addtoq', (req, res) => {
    const data = req.body;
    addToQueue(data, 'deep-neural-network', res);
});

export { router as queueRouter };

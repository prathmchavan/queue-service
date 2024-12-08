import { dataQueue } from "../queue/producer";

export function addToQueue(data: any, modelType: string, res: any) {
    try {
        dataQueue.add({ data, modelType }); 
        res.status(200).json({ message: "Data added to the queue successfully!" });
    } catch (error: any) {
        console.error(`Failed to add job to the queue: ${error.message}`);
        res.status(500).json({ error: "Failed to add data to the queue" });
    }
}


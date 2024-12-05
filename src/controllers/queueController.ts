const Queue = require('bull')
import axios from "axios";

const API = process.env.FAST_API || "http://localhost:8000"; 

const dataQueue = new Queue('data-processing');

export function addToQueue(data: any, modelType: string, res: any) {
    try {
        dataQueue.add({ data, modelType }); 
        res.status(200).json({ message: "Data added to the queue successfully!" });
    } catch (error: any) {
        console.error(`Failed to add job to the queue: ${error.message}`);
        res.status(500).json({ error: "Failed to add data to the queue" });
    }
}

dataQueue.process(async (job: any) => {
    const { data, modelType } = job.data; 
    try {
        console.log(`Processing job for model: ${modelType}`);
        console.log(`Data: ${JSON.stringify(data)}`);
        
        const response = await axios.post(`${API}/predict/${modelType}`, data);

        console.log(`Model Response: ${JSON.stringify(response.data)}`);
        return response.data; 
    } catch (error: any) {
        console.error(`Error processing job: ${error.message}`);
        throw error; 
    }
});

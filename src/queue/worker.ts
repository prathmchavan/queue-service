import axios from 'axios';
import { dataQueue } from './producer';
import dotenv from 'dotenv'

dotenv.config({ path: '.env' }); 

const API = process.env.FAST_API || "http://localhost:8000"; 

dataQueue.process(async (job: any) => {
    const { data, modelType } = job.data; 
    try {
        console.log(`Processing job for model: ${modelType}`);
        console.log(`Data: ${JSON.stringify(data)}`);
        console.log(`api: ${API}`);
        const response = await axios.post(`${API}/predict/${modelType}`, data);

        console.log(`Model Response: ${JSON.stringify(response.data)}`);
        return response.data; 
    } catch (error: any) {
        console.error(`Error processing job: ${error.message}`);
        throw error; 
    }
});

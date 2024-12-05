import { Router } from "express"
import { queueRouter } from "./queue";

const router = Router()

router.get('/', (req , res)=>{
    res.send("Web server Live");    
})

router.use('/queue',queueRouter)

export default router;
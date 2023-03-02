import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
process.env.TOKEN_SECRET;
connectDB()
const app = express()
const PORT = process.env.PORT || 4000
const server = createServer(app)


app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));



server.listen(PORT, () => console.log(`server running on port ${PORT}`))
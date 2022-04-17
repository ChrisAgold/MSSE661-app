import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import express from "express";

app.use(express.json())

// ROUTE
app.get('/', (req, res) => {
    res.send('Welcome!');
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()

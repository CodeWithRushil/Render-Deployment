const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();

const app=express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.json({
        message: "Backend is running",
        status: "success"
    });
});

app.get('/api/health', (req, res)=>{
    res.json({
        status: "healthy",
        timestamp: new Date()
    })
})

const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})


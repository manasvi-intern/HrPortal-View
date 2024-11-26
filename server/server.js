const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const requestRoutes = require('./routes/requestRoutes');
const hrEvalRoutes = require('./routes/hrEvalRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const requestListRoutes = require("./routes/requestListRoutes");
const cooApprovalRoutes = require('./routes/CooApprovalRoutes');

const app = express();

const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173'];
// Middleware
app.use(cors({
    origin: function (origin, callback) {
        console.log('CORS origin:', origin); // Debug origin
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error('CORS error:', origin); // Log rejected origin
            callback(new Error('CORS not allowed for this origin'));
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());  
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Received ${req.method} request to ${req.url}`);
    next();  
});


// Routes
app.use('/api/request', requestRoutes);
app.use('/api/hr-eval', hrEvalRoutes);
app.use('/api', candidateRoutes); 
app.use("/api/requests", requestListRoutes);
app.use('/api/coo-approval', cooApprovalRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const requestRoutes = require('./routes/requestRoutes');

const app = express();

const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173'];
// Middleware
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);  // Allow the request
        } else {
            callback(new Error('CORS not allowed for this origin'));  // Reject the request
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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const hrEvalRoutes = require('./routes/hrEvalRoutes');
// const candidateRoutes = require('./routes/candidateRoutes');

// const app = express();

// // Allow multiple origins (change as needed)
// const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173'];
// // Middleware
// app.use(cors({
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);  // Allow the request
//         } else {
//             callback(new Error('CORS not allowed for this origin'));  // Reject the request
//         }
//     },
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
// }));
// app.use(bodyParser.json());  // To parse JSON request bodies
// app.use(express.json());
// app.use((req, res, next) => {
//     console.log(`Received ${req.method} request to ${req.url}`);
//     next();  // Call the next middleware or route handler
// });


// // Routes
// app.use('/api/hr-eval', hrEvalRoutes);
// app.use('/api', candidateRoutes); // API routes for candidates


// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
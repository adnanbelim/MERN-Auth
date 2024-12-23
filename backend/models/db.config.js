const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://belimadnan488:KE6S6L9fCPprvcPH@cluster0.kira8.mongodb.net/MERN-Auth?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected Successfully');
    })
    .catch((err) => {
        console.error('DB not connected:', err.message);
    });



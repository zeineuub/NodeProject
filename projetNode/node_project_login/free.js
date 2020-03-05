const express = require('express');
const app=express();

//Routes
app.use('/',require('./rootes/index'));
app.use('/user',require('./rootes/user'));
const PORT = process.env.Port || 5000;
app.listen(PORT,console.log(`Server started on port ${PORT}`));
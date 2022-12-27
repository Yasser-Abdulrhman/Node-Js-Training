const setupDB = require('./database/db-setup');
const express = require('express');
const channelRouter = require('./routes/channels');
const videoRouter = require('./routes/videos');
const userRouter = require('./routes/users');

setupDB();
const app = express();
app.use(express.json());
app.use("/api/channels" , channelRouter);
app.use("/api/videos" , videoRouter);
app.use("/api/users" , userRouter);

app.get("/" , (req , res) => {
    res.send('server running in port 8080');
});


app.listen(8080 , () => console.log('server running in port 8080'));
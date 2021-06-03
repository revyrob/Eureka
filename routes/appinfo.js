import express from 'express';
const AppInfo  = express.Router();

AppInfo.get("/health", (req, res) => {
    res.send("Working Absolutely Fine!!").status(200);
});

export default AppInfo;
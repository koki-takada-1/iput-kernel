const router = require('express').Router();
const Room = require('../models/Room');

//Room作成
router.post("/", async (req,res) => {
    const newRoom = new Room(req.body);
    try{
        const savedRoom = await newRoom.save();
        res.status(200).json(savedRoom);
    }catch(err){
        return res.status(500).json(err);
    }
});

module.exports = router;
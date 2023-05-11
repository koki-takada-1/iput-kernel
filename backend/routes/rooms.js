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

//roomをすべて取得
router.get("/", async (req,res) => {
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms);
    }catch(err){
        return res.status(500).json(err);
    }
});

//特定のroomを取得
router.get("/:id", async (req,res) => {
    try{
        const room = await Room.findById(req.params.id);
        return res.status(200).json(room);
    }catch(err){
        return res.status(403).json(err);
    }
});

//特定のroomを更新
router.put("/:id", async (req,res) => {
    try{
        const room = await Room.findById(req.params.id);
        await room.updateOne({
            $set: req.body,
        });
        return res.status(200).json("roomが更新されました");
    }catch(err){
        return res.status(500).json(err);
    }
});
        
//特定のroomを削除
router.delete("/:id", async (req,res) => {
    try{
        const room = await Room.findById(req.params.id);
        await room.deleteOne();
        return res.status(200).json("roomが削除されました");
    }catch(err){
        return res.status(500).json(err);
    }
});

module.exports = router;
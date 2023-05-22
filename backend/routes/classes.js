const router = require('express').Router();

const Class = require('../models/Class');
const User = require('../models/User');

//投稿
router.post("/", async (req,res) => {
    const newClass = new Class(req.body);
    try{
        const savedClass = await newClass.save();
        res.status(200).json(savedClass);
    }catch(err){
        return res.status(500).json(err);
    }
});

router.put("/:id", async (req,res) => {
    try{
        const post = await Class.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({
                $set: req.body,
            });
            return res.status(200).json("投稿が更新されました");
        }else{
            return res.status(403).json("投稿を更新できません");
        }
    }catch(err){
        return res.status(500).json(err);
    }
});

router.delete("/:id", async (req,res) => {
    try{
        const post = await Class.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            return res.status(200).json("投稿が削除されました");
        }else{
            return res.status(403).json("投稿を削除できません");
        }
    }catch(err){
        return res.status(500).json(err);
    }
});

//特定の投稿の取得
router.get("/:id", async (req,res) => {
    try{
        const post = await Class.findById(req.params.id);
        return res.status(200).json(post);
    }catch(err){
        return res.status(403).json(err);
    }
});

//クラスをすべて取得
router.get("/", async (req,res) => {
    try{
        const classes = await Class.find();
        return res.status(200).json(classes);
    }catch(err){
        return res.status(500).json(err);
    }
});

module.exports = router;
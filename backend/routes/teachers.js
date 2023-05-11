const router = require('express').Router();
const Teacher = require('../models/Teacher');

//Teacher作成
router.post("/", async (req,res) => {
    const newTeacher = new Teacher(req.body);
    try{
        const savedTeacher = await newTeacher.save();
        res.status(200).json(savedTeacher);
    }catch(err){
        return res.status(500).json(err);
    }
});

//teacherをすべて取得
router.get("/", async (req,res) => {
    try{
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    }catch(err){
        return res.status(500).json(err);
    }
});

//courseが一致するteacherをすべて取得
router.get("/course/:course", async (req,res) => {
    try{
        const teachers = await Teacher.find({course: req.params.course});
        res.status(200).json(teachers);
    }catch(err){
        return res.status(500).json(err);
    }
});


//teacherを編集
router.put("/:id", async (req,res) => {
    try{
        const teacher = await Teacher.findById(req.params.id);
        await teacher.updateOne({
            $set: req.body,
        });
        return res.status(200).json("teacherが更新されました");
    }catch(err){
        return res.status(500).json(err);
    }
});

//特定のteacherを削除
router.delete("/:id", async (req,res) => {
    try{
        const teacher = await Teacher.findById(req.params.id);
        await teacher.deleteOne();
        return res.status(200).json("teacherが削除されました");
    }catch(err){
        return res.status(500).json(err);
    }
});

module.exports = router;